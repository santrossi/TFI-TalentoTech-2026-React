import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Panel de administrador</h2>

        <div className="header-actions">
          <Link className="btn btn-secondary" to="/">
            TIENDA
          </Link>
          <button className="btn bg-delete primary" onClick={logout}>
            CERRAR SESIÓN
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link to="/admin/productos/new" className="action-card">
            ➕ Agregar
          </Link>

          <Link to="#" className="action-card">
            ✍️ Editar
          </Link>

          <Link to="#" className="action-card">
            ➖ Eliminar
          </Link>
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel gestionás el inventario de la tienda 👍 </p>
      </section>
    </div>
  );
};
