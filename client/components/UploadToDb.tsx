import { ChangeEvent, FormEvent, useState, useEffect} from "react";
import * as Base64 from "base64-arraybuffer";
import { getUploads, createUpload } from '../apis/uploadImgs';
import { Profiles } from "./Profile";
import * as Img from '../../models/uploads'
import { useAuth0 } from '@auth0/auth0-react' 
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import {Link} from 'react-router-dom'

type InputChange = ChangeEvent<HTMLInputElement>
type AreaChange = ChangeEvent<HTMLTextAreaElement>;


function UploadToDb() {

  const { getAccessTokenSilently, loginWithRedirect } = useAuth0()

  const [category, setCategory] = useState('')
  const [notes, setNotes] = useState('')
  const [file, setFile] = useState(null as null | File)
  const [graphic,  setGraphic] = useState([] as Img.UploadUser[])

  useEffect(() => {
    getUploads()
    .then((data) => {
       setGraphic(data);
    })
    .catch((err) => alert(err.message));
  }, []);

  const refreshList = () => {
    getUploads()
    .then((data) => {
       setGraphic(data)
    })
    .catch((err) => alert(err.message));
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!file || !file.type.includes('image')) return alert('please add a picture')

    const fileAsBytes = await file.arrayBuffer()    
    const newUser = {
      category,
      notes,
      image: Base64.encode(fileAsBytes)
    }

    const token = await getAccessTokenSilently()    
    createUpload(newUser, token)
    .then(data => {
      setGraphic([data, ...graphic])
      setCategory('')
      setNotes('')
    })
    .catch(err => console.error(err))
  }

  const updateFile = (e: InputChange) => {
    const fileArr = e.target.files as FileList
    setFile(fileArr[0])
  }

  const tempUrl = file ? URL.createObjectURL(file) : 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'


  const handleSignIn = () => {
    loginWithRedirect()
  }

  
  return (
    <>
    <IfAuthenticated>
    <section className="flex-wrapper">
      <div className="form-wrapper">
        <h1>Upload image and notes</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='image'>Select Image</label>
            <input id='image' type='file' onChange={updateFile} />
          </div>
          <div>
            <label htmlFor='category'>Category</label>
            <input id='category' type='text' onChange={(e: InputChange) => setCategory(e.target.value)} />
          </div>
          <div>
            <label htmlFor='notes'>Notes</label>
            <textarea rows={5}  id="notes" onChange={(e: AreaChange) => setNotes(e.target.value)}/>
          </div>
          <button>Add</button>
          <div className='temp_profile'>
            <img src={tempUrl} alt={file ? 'chosen picture' : 'profile icon'} />
          </div>          
        </form>
      </div>
      <Profiles graphic={graphic} refreshList={refreshList}/>
    </section>
    </IfAuthenticated>

    <IfNotAuthenticated>
      <h1>You must be signed in to use this site. Please sign in or register</h1>
      <Link to='/'><p>Home</p></Link>
    <button onClick={handleSignIn}>Sign in</button>
    </IfNotAuthenticated>
    </>
  )
}



export default UploadToDb
