import { ChangeEvent, FormEvent, useState} from "react";
import * as Base64 from "base64-arraybuffer";
import { createUpload } from '../apis/uploadImgs';
import * as Img from '../../models/uploads'
import { useAuth0 } from '@auth0/auth0-react' 


type InputChange = ChangeEvent<HTMLInputElement>
type AreaChange = ChangeEvent<HTMLTextAreaElement>

type Props = {
  refreshList: () => void
  toggleEditMode: () => void;
}

function UploadToDb({ refreshList, toggleEditMode }: Props) {
  const { getAccessTokenSilently} = useAuth0()
  const [file, setFile] = useState(null as null | File)



  const [dataForm, setDataForm] = useState({
    category:'',
    notes:'',
    image:''
  } as Img.UploadImgData)


  const handleUpdate = (e: InputChange | AreaChange) => {
    setDataForm({...dataForm, [e.target.name]: e.target.value}) 
  } 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newData = {
      category: dataForm.category,
      notes: dataForm.notes,
      image: file ? Base64.encode(await file.arrayBuffer()) : null
    }

    const token = await getAccessTokenSilently() 

    createUpload(newData, token)

    .then(() => {
      refreshList()
      toggleEditMode()
      setDataForm({category: '', notes: '', image: ''}) 
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement 
      fileInput.value = ''
      setFile(null)
    })    
    .catch(err => console.error(err))
  }

  const updateFile = (e: InputChange) => {
    const fileArr = e.target.files as FileList
    const selectedFile = fileArr[0]
    setFile(selectedFile)
  }  

  const tempUrl = file ? URL.createObjectURL(file) : '/img/placeholder.svg'


  
 
  return (
    <>  
      <div className="form-wrapper">       
        <div className='temp-profile'>
          <img src={tempUrl} alt={file ? 'chosen picture' : 'profile icon'} />
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='image'>Select Image (.jpg and .png)</label>
            <input id='image' name="image" type='file' onChange={updateFile} />
            </div>
            <div>
            <label htmlFor='category'>Category</label>
            <input type="text" id="category" name="category" value={dataForm.category} onChange={handleUpdate}/>
            </div>
            <div>
            <label htmlFor='notes'>Notes</label>
            <textarea rows={5} name="notes" id="notes" value={dataForm.notes} onChange={handleUpdate}/>
            </div>
            <button>Add note</button>         
          </form>
        </div>
      </div>
    </>
  )
}



export default UploadToDb
