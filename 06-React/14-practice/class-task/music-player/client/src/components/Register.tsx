import { useEffect, useState } from 'react'
import './App.css'
import  register  from './API/registerApi'

function App() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  // This is redux
  const [user, setUser] = useState(null)

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    try {
      ev.preventDefault()
      const response = await register(email, password)
      console.log(response)

      setUser(response?.data.results[0])
      // if (data.ok) {
      //   navigate("/home")
      // }
    } catch (error) {
      console.error(error)
    }
  }
  // getUser
  // go to server, look for user with the id in cookie
  // if user return = set State and add user
  // is no user navigate to login
  useEffect(() => {
    // getUser()
  },[])}
