import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

// traer productos:

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.log("Error al obtener productos", error);
    throw error;
  }
};

// traer 1 producto por ID:

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsRef, id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    throw error;
  }
};

// alta de producto:

export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);

    return docRef.id;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};
