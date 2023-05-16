import { useEffect, useState} from 'react'
import * as Imgs from '../../models/character'
import { getAllImgs, delImg } from '../apis/saveSearch'

export function AllImgs(){
    const [imageData, setImageData] = useState([] as Imgs.ImgSearch[])

    const handleDelete = async (id: number) => {
        try {
          await delImg(id)
          fetchData()
        } catch (err) {
          alert((err as Error).message);
        }
      }

      useEffect(() => {
        fetchData()
      }, [])


      const fetchData = async () => {
        try {
          const data = await getAllImgs();
          setImageData(data);
        } catch (err) {
            alert((err as Error).message)
        }
      };

      return(
        <div className="user__grid">
        {imageData.map( image => (
            <div key={image.id}>
                <img src={image.src} alt="description" />
                <p>Category: {image.category}</p>
                <p>Description: {image.description}</p>
                <p><a href={image.url} target="_blank" rel="noreferrer">Download here</a></p>
                <button onClick={() => handleDelete(image.id)}>Delete</button>
            </div>
        ))}
        </div>
    )
}

//to do - add category filter