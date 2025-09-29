import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // 1️⃣ Elimina el token de localStorage
    localStorage.removeItem("token")

    // 2️⃣ Redirige al login
    navigate("/login")
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-200">
      <h1 className="font-bold">Mi App de Recetas</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
        Cerrar sesión
      </button>
    </nav>
  )
}
