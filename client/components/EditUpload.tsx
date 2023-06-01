import { useEffect, useState, ChangeEvent, FormEvent} from 'react'
import * as Img from '../../models/character'
import { editUpload, getIdUpload } from '../apis/uploadImgs'
import { useParams } from 'react-router-dom'
import * as Base64 from 'base64-arraybuffer' 
import { useNavigate } from 'react-router-dom';

export function EditUpload(){
    const {id} = useParams()
    const [imgData, setImgData] = useState<Img.UploadImgData| undefined>(undefined)
    const navigate = useNavigate()

    //get the id data item
    useEffect(() => {
        getIdUpload(Number(id))
        .then((data) => {
            setImgData(data)
        })
        .catch((err) => alert(err.message))
    }, [id])


    //get the data to pre populate the form
    const [formData, setFormData] = useState<Img.UploadImgData>({
        category:'',
        notes:'',
        image:undefined
    })      

    // fill out those fields and accept changes
    useEffect(() => {
    if (imgData) {
        setFormData({
            category:imgData.category,
            image:imgData.image,
            notes:imgData.notes
        })
    }
    }, [imgData])

    const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = () => {
            setFormData({
                ...formData,
                image: Base64.encode(reader.result as ArrayBuffer),
            })
            }
        } else {
            console.error('No file selected.')
        }
    }

    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault()
        try {
            await editUpload(Number(id), formData);
            navigate('/db')
        } catch (err) {
            alert((err as Error).message);
        }
    }

    return(
    <div className="flex-wrapper">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='category'>Category</label>
                <input 
                id="category"
                type='text'
                name='category'
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
            </div>
            <div>
                <label htmlFor='notes'>Notes</label>
                <textarea rows={5}  id="notes" name="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
            </div>
            <div>
                <label htmlFor='image'>Image</label>
                <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={updateFile}/>
            </div>
            <button type='submit'>Update</button>  
        </form>
    </div>
    )
}

