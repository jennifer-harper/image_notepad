import * as Img from '../../models/character'
import { delUpload } from '../apis/uploadImgs';
import {Link} from 'react-router-dom'
import { useState, useEffect} from "react";

type ProfilesProps = {
  graphic: Img.UploadImg[]
  refreshList: () => void;
}


export function Profiles({ refreshList, graphic }: ProfilesProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredGraphic, setFilteredGraphic] = useState(graphic)

  useEffect(() => {
    const filteredData = selectedCategory === ""
      ? graphic
      : graphic.filter((data) => data.category === selectedCategory)

    setFilteredGraphic(filteredData)
  }, [selectedCategory, graphic])

  const handleDel = async (id: number) => {
    delUpload(id)
      .then(() => {
        refreshList()
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
    <div className="gallery-wrapper">
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">All</option>

      {[...new Set(graphic.map((data) => data.category))].map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    
    <div className="img__grid">
      {filteredGraphic.map((u) => (
        <div key={u.id} >
          <img src={`data:image/jpg;base64,${u.image}`} alt={u.category} />
          <p>{u.notes}</p>
          <h3>{u.category}</h3>
          <button className="del_button" onClick={() => handleDel(u.id)}>
            Delete
          </button>
          <Link to={`/upload/${u.id}`}>
            <button>Update</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}


