import { ChangeEvent, FormEvent, useState, useEffect} from "react";
import * as Base64 from "base64-arraybuffer";
import { createNewImg, getAllImgs } from '../apiClient';
import { Profiles } from "./Profile";
import * as Img from '../../models/character';

type InputChange = ChangeEvent<HTMLInputElement>;


function UploadToDb() {
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null as null | File)
  const [users, setUsers] = useState([] as Img.ImgSearch[])



  useEffect(() => {
    getAllImgs()
    .then((data) => {
      setUsers(data);
    })
    .catch((err) => alert(err.message));
  }, []);

  const refreshList = () => {
    getAllImgs()
    .then((data) => {
      setUsers(data);
    })
    .catch((err) => alert(err.message));
  }


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

    createNewImg(newUser)
    .then(data => setUsers([...users, data]))
    .catch(err => console.error(err))

    setUrl('')
    setCategory('')
    setFile(null)
  }

  const updateFile = (e: InputChange) => {
    const fileArr = e.target.files as FileList
    setFile(fileArr[0])
  }

  const tempUrl = file ? URL.createObjectURL(file) : 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'

  return (
    <section>
      <h2>Upload to db</h2>
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
            <input id='src' type='file' onChange={updateFile} />
          </div>
        </div>

        <div className='temp_profile'>
          <img src={tempUrl} alt={file ? 'chosen picture' : 'profile icon'} />
          <h3>{category ? category : 'no one'}</h3>
        </div>

        <button>Add</button>
      </form>

      {/* Render Profiles component and pass users data as a prop */}
      <Profiles users={users} refreshList={refreshList}/>
    </section>
  )
}



export default UploadToDb
