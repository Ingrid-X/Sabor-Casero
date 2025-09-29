import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Si no hay token, redirige a login
    return <Navigate to="/login" />;
  }

  return children; // si hay token, muestra la ruta
}
