import { ChangeEvent, FormEvent, useState } from 'react'
// import { addWidgets } from '../apiClient'
import {UserData} from '../../models/character'
import { getUser } from '../apis/user_api'
import { useNavigate} from 'react-router-dom'


export function Login() {
  const [user, setUser] = useState([] as UserData[])
  const [formData, setFormUser] = useState({ email: '', password: '' } as UserData)
  const navigate = useNavigate()


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.id)
    setFormUser({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitAdd = (evt: FormEvent) => {
    evt.preventDefault()
    getUser(formData)
    .then((response) => {
        // Check if the response indicates a successful login
        if (response) {
          setUser([response, ...user])
          navigate('/')
        } else {
          // Handle incorrect email/password case
          navigate('/search')
        }
      })
      .catch((error) => {
        // Handle other errors
        console.log(error)
      })
  }


  return (
    <form onSubmit={handleSubmitAdd}>
      <p>Enter login details</p>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">
        Login
      </button>
    </form>
  )
}
