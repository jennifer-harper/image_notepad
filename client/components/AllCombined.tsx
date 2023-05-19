import { useEffect, useState} from 'react'
import * as Imgs from '../../models/character'
import {combinedImgs } from '../apis/combinedImg'
import { delImg } from '../apis/saveSearch'
import { delUpload } from '../apis/uploadImgs'

import {Link} from 'react-router-dom'

export function AllCombined(){
  const [imageData, setImageData] = useState([] as Imgs.Combined[])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await combinedImgs();
      setImageData(data)
      setLoading(false)
    } catch (err) {
        alert((err as Error).message)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await delImg(id)       
      fetchData()
    } catch (err) {
      alert((err as Error).message);
    }
  }

  const handleDeleteUpload = async (id: number) => {
    try {
      await delUpload(id)
      fetchData()
    } catch (err) {
      alert((err as Error).message);
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  // Retrieve unique categories from the imageData array so they do not repeat in the dropdown list
  const uniqueCategories = [...new Set(imageData.map((image) => image.category))] 
  //Filter the imageData array based on the selected category
  const filteredImageData = selectedCategory === "" ? imageData : imageData.filter((image) => image.category === selectedCategory)


  
  return(
  <>
    <select name="menu" id="menu" onChange={(e) => setSelectedCategory(e.target.value)}>
    <option value="">Show all</option>
      {uniqueCategories.map( category => (
        <option key={category} value={category}>{category}</option>             
      ))}
    </select>
    <div className="user__grid">
      {filteredImageData.map( image => (
        <div key={image.id}>            
          {image.image && 
            <div id={String(image.id)}>
              <img src={`data:image/jpg;base64,${image.image}`} alt={image.category} />
              <button onClick={() => handleDeleteUpload(image.upload_img_id)}>Delete</button>
              <Link to={`/upload/${image.upload_img_id}`}><button>Update</button></Link>
            </div> 
          }
          {!image.image && image.src && 
            <div>
              <img src={image.src} alt={image.description} />
              <p><a href={image.url} target="_blank" rel="noreferrer">Download here</a></p>
              <button onClick={() => handleDelete(image.save_search_id)}>Delete</button>
            </div> 
          } 
          <p>Category: {image.category}</p>          
        </div>            
      ))}
    </div>
  </>
  )
}
