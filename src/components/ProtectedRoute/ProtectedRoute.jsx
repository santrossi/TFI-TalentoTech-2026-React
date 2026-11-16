import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>; // importante para chequear que haya un user autenticado; antes de redirigir

  if (!user) return <Navigate to="/admin/login" />;

  return children;
};
