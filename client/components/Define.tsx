import { useState, ChangeEvent, FormEvent, MouseEvent} from 'react';
import { defineUnsplash } from '../apis/srcUnsplash';
import { createImg } from '../apis/saveSearch'
import { UnsplashCharacter} from '../../models/character';

export function Define() {

  const [images, setImages] = useState([] as UnsplashCharacter[])
  const [searchCategory, setSearchCategory] = useState('')

  const [savedImageId, setSavedImageId] = useState<string | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(event.target.value)
  }

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() 
    defineUnsplash(searchCategory)
      .then((res) => {
        setImages(res.results);
      })
      .catch((err) => {
        console.log('Err message: ' + err)
      });
  }


  const saveImageData = (image: UnsplashCharacter) => {
    const data = {
      src: image.urls.regular,
      url: image.links.html,
      category: searchCategory,
      description:image.alt_description,
    }

    createImg(data)
      .then(() => {
        setSavedImageId(image.id)
        console.log('Image data saved successfully!')
      })
      .catch((err) => {
        console.log('Error saving image data: ' + err)
      });
  };



  return (
    <>
    <form onSubmit={submitSearch}>
      <label htmlFor="cat">Search Category</label>
      <input
        type="text"
        id="cat"
        value={searchCategory}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>

    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id}>
          <img          
            className="unsplash"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <p><a href={image.links.html}>Download here</a></p>
          <p>Category: {searchCategory}</p>    
          <button onClick={() => saveImageData(image)}>Save Image</button>
          {savedImageId === image.id && <p>Image saved!</p>}
        </div>
      ))}
    </div>
    </>
  )
}


