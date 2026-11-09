import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>MI CARRITO</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">No hay productos agregados al carrito ☹️</p>
          <Link classname="btn primary bg-primary" to={"/"}>
            <button className="btn bg-secondary primary">
              Explorar catálogo
            </button>
          </Link>
        </>
      )}
    </section>
  );
};
