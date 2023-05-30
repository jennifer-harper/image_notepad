import { ChangeEvent, FormEvent, useState } from "react"
import {UserData} from '../../models/character'
import { signUp } from "../apis/user_api"
import { useNavigate} from 'react-router-dom'

export function AddUser(){
    const [user, setUser] = useState([] as UserData[])
    const [formData, setFormUser] = useState({ email: '', password: '', username:'' } as UserData)
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormUser({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmitAdd = (evt: FormEvent) => {
        evt.preventDefault()
        signUp(formData)
        .then((response) => {
            // Check if the response indicates a successful login
            if (response) {
              setUser([response, ...user])
              navigate('/login')
            } else {
              // Handle incorrect email/password case
              navigate('/')
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

        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
        type="email"
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