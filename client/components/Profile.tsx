import * as Img from '../../models/character'
import { useEffect, useState } from "react";
import { getAllImgs } from '../apiClient'

type ProfilesProps = {
  users: Img.ImgSearch[]
}

function Profiles(props: ProfilesProps) {
  const { users } = props

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

