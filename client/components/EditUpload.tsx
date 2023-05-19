import { useEffect, useState, ChangeEvent, FormEvent} from 'react'
import * as Img from '../../models/character'
import { editUpload, getIdUpload } from '../apis/uploadImgs'
import { useParams } from 'react-router-dom'
// import * as Base64 from 'base64-arraybuffer' 

export function EditUpload(){
    const { id } = useParams()
    const [imgData, setImgData] = useState(null as Img.UploadTestData | null)

    //get the id data item
    useEffect(() => {
        getIdUpload(Number(id))
        .then((data) => {
            setImgData(data)
        })
        .catch((err) => alert(err.message))
    }, [id])


    //get the data to pre populate the form
    const [formData, setFormData] = useState<Img.UploadTestData>({
        category:''
    })

      

    // fill out those fields and accept changes
      useEffect(() => {
        if (imgData) {
            setFormData({
                category:imgData.category,
            })
        }
      }, [imgData])


      const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        console.log(formData) // Move console.log(formData) here
        editUpload(Number(id), formData)
      }



    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor='category'>Name</label>
            <input 
            type='text'
            name='category'
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />

            {/* <label htmlFor='image'>Image</label>
            <input 
            type='file'
            name='image'
            value={formData.image}
            onChange={handleUpdate}
            /> */}
            <button type='submit'>Update</button> 
 
        </form>
    )
}

