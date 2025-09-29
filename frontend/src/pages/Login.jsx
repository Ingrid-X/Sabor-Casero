import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await API.post("/auth/login", { email, password });
      // Guardar token en localStorage
      localStorage.setItem("token", res.data.token)
      navigate("/dashboard") // redirigir a dashboard
    } catch (err) {
      console.error(err.response.data)
      alert("Error en login")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}
