import { UnsplashCharacter } from '../../models/character'
import { useState, useEffect } from 'react'

import { getUnsplash } from '../apis/srcUnsplash'

export function Unsplash() {


    //declaring a state variable called getRes that can either be an UnsplashCharacter object or null (expecting to receive a single image, not an array).
    //When you receive the response from the API, you can use the setRes function to update the state variable with the received UnsplashCharacter object.
    const [getRes, setRes] = useState(null as UnsplashCharacter | null)

    useEffect(() => {
        getUnsplash()
        .then((res) => {
            setRes(res)
        })
        .catch((err) => {
            console.log('Err message: ' + err)
        })
    }, [])

    return(
        <>
         {getRes && (
          <img
            className="unsplash"
            src={getRes?.urls.regular}
            alt={getRes?.alt_description}
          />
        )}
        </>

    )
}