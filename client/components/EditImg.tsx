import { useEffect, useState, FormEvent} from 'react'
import * as Img from '../../models/character'
import { editImg, getIdImg } from '../apis/saveSearch'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

 export function EditImg(){
    const { id} = useParams()
    const [imgData, setImgData] = useState<Img.EditSearchData| undefined>(undefined)
    const navigate = useNavigate()

    //get the id data item
    useEffect(() => {
        getIdImg(Number(id))
        .then((data) => {
            setImgData(data)
        })
        .catch((err) => alert(err.message))
    }, [id])


//get the data to pre populate the form
    const [formData, setFormData] = useState<Img.EditSearchData>({
        category:'',
        notes:'',
    })

    // fill out those fields and accept changes
    useEffect(() => {
    if (imgData) {
        setFormData({
            category:imgData.category,
            notes:imgData.notes,
        })
    }
    }, [imgData])


    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault()
        try {
            await editImg(Number(id), formData);
            navigate('/')

            } catch (err) {
            alert((err as Error).message);
            }
        }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='category'>Name</label>
            <input type='text' name='category'
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>

            <label htmlFor='notes'>Notes</label>
            <textarea rows={5}  id="notes" name="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>

            <button type='submit'>Update</button>  
        </form>
        )
    }






