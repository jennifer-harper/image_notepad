import * as Img from '../../models/uploads'
import { delUpload } from '../apis/uploadImgs';
import {Link} from 'react-router-dom'
import { useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react"


type NotesProps = {
  graphic: Img.UploadUser[]
  refreshList: () => void;
}


export function Notes({ refreshList, graphic }: NotesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredGraphic, setFilteredGraphic] = useState(graphic)

  const { user } = useAuth0()


  useEffect(() => {
    const filteredData = selectedCategory === ""
      ? graphic.filter((data) => data.user_id === user?.sub)
      : graphic.filter((data) => data.category === selectedCategory && data.user_id === user?.sub)

    setFilteredGraphic(filteredData)
  }, [selectedCategory, graphic, user?.sub])

  const handleDel = async (id: number) => {
    delUpload(id)
      .then(() => {
        refreshList()
      })
      .catch((err) => alert(err.message))
  }

  return (
    <>
    <div className="">
      <div className="select-wrapper">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {[...new Set(filteredGraphic.map((data) => data.category))].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>

    
      <div className="notes__grid">
        {filteredGraphic.map((imgs) => (
          <div key={imgs.id} >
            <img src={`data:image/jpg;base64,${imgs.image}`} alt={imgs.category} />
            <h2>{imgs.category}</h2>
            <p>{imgs.notes}</p> 
            <div className='button-wrapper'>  
            <Link to={`/upload/${imgs.id}`}>
                <button className="update">Update</button>
              </Link>       
              <button className="del_button" onClick={() => handleDel(imgs.id)}>
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}


