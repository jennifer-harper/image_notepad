import { ChangeEvent, FormEvent, useState } from 'react'
// import { addWidgets } from '../apiClient'
import {UserData} from '../../models/character'
import { getUser } from '../apis/user_api'
import { useNavigate} from 'react-router-dom'


export function Login() {
  const [user, setUser] = useState([] as UserData[])
  const [formData, setFormUser] = useState({ email: '', password: '' } as UserData)
  const navigate = useNavigate()

  const [error, setErrors] = useState('')


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormUser({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitAdd = (evt: FormEvent) => {
    evt.preventDefault()

    // Clear any previous error messages
    setErrors('')


    getUser(formData)
    .then((response) => {
        // Check if the response indicates a successful login
        if (response) {
          setUser([response, ...user])
          navigate('/')
        } else {
          // Handle incorrect email/password case
          setErrors('Incorrect username or password')
        }
      })
      .catch(() => {
        setErrors('Incorrect username or password')
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

      {error && <p>{error}</p>}
      
      <button type="submit">
        Login
      </button>
    </form>

    
  )
}
