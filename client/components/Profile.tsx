import * as Img from '../../models/character'
import { delUpload } from '../apis/uploadImgs';

type ProfilesProps = {
  users: Img.UploadImg[]
  refreshList: () => void;
}

export function Profiles({refreshList, users}: ProfilesProps) {
  // const { users } = props

  const handleDel = async (id:number) => {
    delUpload(id)
    .then(() => {
      refreshList()
    })
    .catch((err) => alert(err.message))
  }

  return (
    <div className='user__grid'>
      {users.map(u => (
        <div key={u.id}>
          <img src={`data:image/jpg;base64,${u.image}`} alt={u.category} />
          <h3>{u.category}</h3>
          <button className="del_button" onClick={() => handleDel(u.id)}>Delete</button>
        </div>
      ))}

    </div>
  )
}

