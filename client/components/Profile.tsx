import { useAppSelector } from "../hooks"

function Profiles() {
  const users = useAppSelector(redux => redux.searchImg)

  return (
    <div className='user__grid'>
      {users.map(u => (
        <div key={u.id} className='user'>
          <img src={`data:image/jpg;base64,${u.src}`} alt={u.category} />
          <h3>{u.category}</h3>
        </div>
      ))}
    </div>
  )
}

export default Profiles