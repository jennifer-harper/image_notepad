import { ChangeEvent, FormEvent, useState } from "react"
import * as Base64 from "base64-arraybuffer"
import { useAppDispatch } from "../hooks"
import Profiles from "./Profile"

import {addImgToDB} from "../actions/searchImg"
type InputChange = ChangeEvent<HTMLInputElement>


function UploadToDb() {
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [file, setFile] = useState(null as null | File)

    const dispatch = useAppDispatch()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!url) return alert('please add a name')
        if (!category) return alert('please add a category')
        if (!file || !file.type.includes('image')) return alert('please add a picture')
    
        const fileAsBytes = await file.arrayBuffer()
        const newUser = {
          url,
          category,
          src: Base64.encode(fileAsBytes)
        }
    
        dispatch(addImgToDB(newUser))
        setUrl('')
        setCategory('')
        setFile(null)
      }

      const updateFile = (e: InputChange) => {
        const fileArr = e.target.files as FileList
        console.log(fileArr)
        setFile(fileArr[0])
      }

      const tempUrl = file ? URL.createObjectURL(file) : 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
      // fileReader

      return (
        <section>
          <h2>Upload to db</h2>
          {/* <Profiles /> */}
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor='url'>Url</label>
                <input id='url' type='text' onChange={(e: InputChange) => setUrl(e.target.value)} />
              </div>
              <div>
                <label htmlFor='cate'>Category</label>
                <input id='cate' type='text' onChange={(e: InputChange) => setCategory(e.target.value)} />
              </div>

              <div>
                <label htmlFor='src'>Profile pic: (src)</label>
                <input id='src' type='file' onChange={updateFile}/>
              </div>
            </div>
    
            <div className='temp_profile'>
              <img src={tempUrl} alt={file ? 'chosen picture' : 'profile icon'} />
              <h3>{ category ? category : 'no one'}</h3>
            </div>
    
            <button>Add</button>
          </form>
        </section>
      )

}

export default UploadToDb