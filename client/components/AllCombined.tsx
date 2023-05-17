import { useEffect, useState} from 'react'
import * as Imgs from '../../models/character'
import {combinedImgs } from '../apis/combinedImg'
import { delImg } from '../apis/saveSearch'
import { delUpload } from '../apis/uploadImgs'

export function AllCombined(){
    const [imageData, setImageData] = useState([] as Imgs.Combined[])
    const [loading, setLoading] = useState(true)

     // Retrieve unique categories from the imageData array
      const uniqueCategories = [...new Set(imageData.map((image) => image.category))]
      //The Set is a built-in JavaScript object that allows you to store unique values (automatically removes any duplicate)
     //new Set(...) creates a Set object
     //spread operator (...) is used to convert the Set object back into an array

      useEffect(() => {
        fetchData()
      }, [])


      const fetchData = async () => {
        try {
          const data = await combinedImgs();
          console.log('Data:', data)
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

      return(
        <>
        <select name="menu" id="menu">
          {uniqueCategories.map( category => (
            <option key={category} value={category}>{category}</option>             
          ))}
        </select>

          <div className="user__grid">
          {imageData.map( image => (
              <div key={image.id}>            
                {image.image && 
                  <div>
                    <img src={`data:image/jpg;base64,${image.image}`} alt={image.category} />
                    <button onClick={() => handleDeleteUpload(image.upload_img_id)}>Delete</button>
                  </div> 
                }
                {!image.image && image.src && 
                  <div>
                    <img src={image.src} alt={image.category} />
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
