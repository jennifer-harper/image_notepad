import * as Img from '../../models/uploads'
import { delUpload } from '../apis/uploadImgs';
import {Link} from 'react-router-dom'
import { useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react"


type NotesProps = {
  graphic: Img.UploadUser[]
  refreshList: () => void;
}


function Notes({ refreshList, graphic }: NotesProps) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filteredGraphic, setFilteredGraphic] = useState(graphic)
  const { user } = useAuth0()

  const handleDel = async (id: number) => {
    delUpload(id)
    .then(() => {
      refreshList()
    })
    .catch((err) => alert(err.message))
  }

  useEffect(() => {
    //Ensures that only the user's categories are displayed initially.
    setFilteredGraphic(graphic.filter((data) => data.user_id === user?.sub))
  }, [graphic, user?.sub])

  //Map filteredGraphic array and extracting the unique category values (only show once in dropdown) 
  const userCategories = [...new Set(filteredGraphic.map((data) => data.category))]

  // Count the total number of times a category is present in the selected category
  const categoryCount = selectedCategory
  ? filteredGraphic.filter((data) => data.category === selectedCategory).length
  : filteredGraphic.length


  return (
    <>
      <div className="view-wrapper">
       
        <div className="select-wrapper">
          <h1>Upload your notes:</h1>
        <div>
        <p>Filter by category: </p>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">All</option>
                {userCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
        </div>
        </div>  

        <div className={`main-style ${categoryCount <= 3 ? 'flex-style' : 'column-style'}`}>
          {filteredGraphic
            .filter((data) => selectedCategory === "" || data.category === selectedCategory)
            .map((imgs) => (
              <div className='note' key={imgs.id} >
                {imgs.image && <img src={`data:image/jpg;base64,${imgs.image}`} alt={`Visual for category: ${imgs.category}`} />}                
                <p><b>Category:</b> {imgs.category}</p>
                {imgs.notes && <p>{imgs.notes}</p> }

                <div className='button-wrapper'>  
                  <Link to={`/edit/${imgs.id}`}>
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
  );
}

export default Notes