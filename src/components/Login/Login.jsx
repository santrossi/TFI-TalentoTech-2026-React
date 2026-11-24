import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";
import { useState } from "react";
import { toast, Zoom } from "react-toastify";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Usuario o contraseña incorrectos", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>INICIAR SESIÓN</h2>

      <div className="form-group">
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="ejemplo@ejemplo.com.ar"
          value={formData.email}
          onChange={handleChange}
          required
          /* TO DO: personalizar mensaje de error (como en el form de alta) con archivo "ValidateUser" x ej */
        />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn bg-primary" type="submit">
        Ingresar
      </button>
    </form>
  );
};
