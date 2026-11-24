import { Link, useParams } from "react-router-dom";
import "./ProductSuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();
  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Producto agregado exitosamente</h2>
      <p>ID del producto: {id}</p>
      <p>
        Puede agregar otro producto haciendo click nuevamente en el botón
        <b> "Agregar"</b> del Panel administrador.
      </p>

      <div className="success-actions">
        {/* <Link className="btn bg-primary primary" to="/admin/dashboard"> Volver al panel </Link> */}
        {/* <Link className="btn bg-success primary" to="/admin/products/new"> Cargar otro producto </Link> */}
        <Link className=" btn bg-success primary" to="/admin">
          Volver al Panel Administrador
        </Link>
      </div>
    </section>
  );
};
