import { useEffect, useState} from 'react'
import * as Imgs from '../../models/character'
import {combinedImgs } from '../apis/saveSearch'

export function AllCombined(){
    const [imageData, setImageData] = useState([] as Imgs.Combined[])


      useEffect(() => {
        fetchData()
      }, [])


      const fetchData = async () => {
        try {
          const data = await combinedImgs();
          console.log('Data:', data);
          setImageData(data);
        } catch (err) {
            alert((err as Error).message)
        }
      };

      return(
        <div className="user__grid">
        {imageData.map( image => (
            <div key={image.id}>
                <p>Category: {image.category}</p>              
            </div>
        ))}
        </div>
    )
}
