import * as Img from '../../models/uploads'
import { delUpload } from '../apis/uploadImgs';
import { useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { EditUpload } from './EditUpload';

type NotesProps = {
  graphic: Img.UploadUser[]
  refreshList: () => void;
}


function Notes({ refreshList, graphic }: NotesProps) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filteredGraphic, setFilteredGraphic] = useState(graphic)
  const { user } = useAuth0()

  const [editMode, setEditMode] = useState(false)
  const [editItemId, setEditItem] = useState<number | null>(null)
  
  //set id of item being toggled
  const toggleEditMode = (itemId: number) => {
    if (editMode && editItemId === itemId){
      setEditMode(false)
      setEditItem(null)
    } else {
      setEditMode(true)
      setEditItem(itemId)
    }
  }

  const handleDel = async (id: number) => {
    delUpload(id)
    .then(() => {
      refreshList()
    })
    .catch((err) => alert(err.message))
  }

  useEffect(() => {
    setFilteredGraphic(graphic.filter((data) => data.user_id === user?.sub))
  }, [graphic, user?.sub])

   //so that each category appears only once
  const userCategories = [...new Set(filteredGraphic.map((data) => data.category))]

  //Count the number of times the class is present for the correct css category
  const categoryCount = selectedCategory
  ? filteredGraphic.filter((data) => data.category === selectedCategory).length
  : filteredGraphic.length


  return (
    <>
      <div className="view-wrapper">
       
        <div className="select-wrapper">
          <h1>Your notes:</h1>
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
                  <button className='add-new' onClick={() => toggleEditMode(imgs.id)}>{editMode && editItemId === imgs.id ? 'Close' : 'Edit'}</button>

                  <button className="del_button" onClick={() => handleDel(imgs.id)}>
                    Delete
                  </button>                  
                </div>

                <div className={`x ${editItemId === imgs.id ? 'yes' : 'no'}`}>
                    {editMode && editItemId === imgs.id && (
                      <EditUpload id={imgs.id} toggleEditMode={() => toggleEditMode(imgs.id)} refreshList={refreshList} />
                    )}
                </div> 
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Notes