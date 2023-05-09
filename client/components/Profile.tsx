import * as Img from '../../models/character'
import { delImg } from '../apiClient';

type ProfilesProps = {
  users: Img.ImgSearch[]
  refreshList: () => void;
}

export function Profiles({refreshList, users}: ProfilesProps) {
  // const { users } = props

  const handleDel = async (id:number) => {
    delImg(id)
    .then(() => {
      refreshList();
    })
    .catch((err) => alert(err.message));
  }

  return (
    <div className='user__grid'>
      {users.map(u => (
        <div key={u.id} className='user'>
          <img src={`data:image/jpg;base64,${u.src}`} alt={u.category} />
          <h3>{u.category}</h3>
          <button className="del_button" onClick={() => handleDel(u.id)}>Delete</button>
        </div>

      ))}

    </div>
  )
}

