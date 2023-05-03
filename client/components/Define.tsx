import { useState, ChangeEvent, FormEvent} from 'react';
import { defineUnsplash } from '../apiClient';
import { UnsplashCharacter } from '../../models/character';

export function Define() {

  const [images, setImages] = useState([] as UnsplashCharacter[]);
  const [searchCategory, setSearchCategory] = useState('');


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
        <img
          key={image.id}
          className="unsplash"
          src={image.urls.regular}
          alt={image.alt_description}
        />
      ))}
    </div>
    </>
  )
}


