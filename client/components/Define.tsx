import { useState, ChangeEvent, FormEvent} from 'react';
import { defineUnsplash } from '../apis/srcUnsplash';
import { createImg } from '../apis/saveSearch'
import { UnsplashCharacter} from '../../models/character';

export function Define() {


  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

  const [images, setImages] = useState([] as UnsplashCharacter[])
  const [searchCategory, setSearchCategory] = useState('')
  const [addNotes, setAddNotes] = useState('')

  const [savedImageId, setSavedImageId] = useState<string | null>(null)



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
      notes:addNotes
    }

    createImg(data)
      .then(() => {
        setSavedImageId(image.id)
      })
      .catch((err) => {
        console.log('Error saving image data: ' + err)
      })
  }


  return (
    <>
    <form onSubmit={submitSearch}>
      <label htmlFor="cat">Search Category</label>
      <input
        type="text"
        id="cat"
        value={searchCategory}
        onChange={(e: InputChange) => setSearchCategory(e.target.value)}
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
          <form>
            <label htmlFor='notes'>Notes</label>
            <textarea rows={5}  id="notes" onChange={(e: InputChange) => setAddNotes(e.target.value)}/>
          </form>

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


