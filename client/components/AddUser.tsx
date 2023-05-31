// import { ChangeEvent, FormEvent, useState, useEffect } from "react"
// import {UserData} from '../../models/character'
// import { signUp, getAllUsers } from "../apis/user_api"
// import { useNavigate} from 'react-router-dom'
// type InputChange = ChangeEvent<HTMLInputElement>

// export function AddUser(){
//   const [email, setUserEmail] = useState('')
//   const [username, setUserName] = useState('')
//   const [password, setUserPassword] = useState('')
//   const [user, setUser] = useState([] as UserData[])

//   const [usernameError, setUsernameError] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')

//   const navigate = useNavigate()

//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return emailRegex.test(email);
//   }

//   const checkExistingEmail = (email:string) => {
//     const existingUser = user.find((user) => user.email === email)
//     return existingUser !== undefined
//   }

//   const validateUsername = (username:string) => {
//     const minL = 4
//     const maxL = 20
//     const usernameRegex = /^[a-zA-Z0-9_]+$/
//     return username.length >= minL && username.length <= maxL && usernameRegex.test(username)
//   }
  
//   const validatePassword = (password:string) => {
//     const minL = 8
//     const ucRegex = /[A-Z]/
//     const lcRegex = /[a-z]/
//     const digitRegex = /[0-9]/
//     return password.length >= minL && ucRegex.test(password) && lcRegex.test(password) && digitRegex.test(password)
//   }


//   const handleSubmitAdd = async (evt: FormEvent) => {
//     evt.preventDefault()

//     setUsernameError('')
//     setEmailError('')
//     setPasswordError('')

//     if (!isValidEmail(email)) {
//       setEmailError('Please enter a valid email address.')
//       return
//     }

//     if (checkExistingEmail(email)) {
//       setEmailError("This email address is already registered.")
//       return
//     }

//     if (!validateUsername(username)){
//       setUsernameError("Please enter a valid username")
//       return
//     }

//     if (!validatePassword(password)){
//       setPasswordError("Please enter a valid password")
//       return
//     }

//     const newUser ={email, username, password}
//     try{
//       const response = await signUp(newUser)
//       if (response) {
//         setUser([response, ...user])
//         navigate('/login')
//         return
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // Fetch all users on component mount
//   useEffect(() => {
//     getAllUsers()
//       .then((users) => {
//         setUser(users)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])


//   return (
//   <form className="other" onSubmit={handleSubmitAdd} >
//     <h2>Create your account</h2>

//     <label htmlFor="username">Username</label>
//     <p>Username must be between 4-20 alphanumeric and underscore characters long</p>
//     {usernameError && <p className="error-message">{usernameError}</p>}
//     <input
//     type="text"
//     id="username"
//     onChange={(e: InputChange) => setUserName(e.target.value)} />
  

//     <label htmlFor="email">Email</label>
//     <p>Emails must include @</p>
//     {emailError && <p className="error-message">{emailError}</p>}
//     <input
//     type="email"
//     id="email"
//     onChange={(e: InputChange) => setUserEmail(e.target.value)} />
 

//     <label htmlFor="password">Password</label>
//     <p>Username must be at least 8 characters, including upper, lowercase and numbers</p>
//     {passwordError && <p className="error-message">{passwordError}</p>}
//     <input
//     type="text"
//     id="password"
//     onChange={(e: InputChange) => setUserPassword(e.target.value)} />  

//     <button type="submit">Sign up</button>
//   </form>
//   )
// }