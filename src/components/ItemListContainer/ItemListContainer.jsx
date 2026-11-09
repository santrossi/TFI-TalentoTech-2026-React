import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "ERROR: Hubo un problema al intentar cargar los productos ☹️",
          );
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <section>
      <h1>NUESTROS PRODUCTOS</h1>
      <ItemList products={products} />
    </section>
  );
};
