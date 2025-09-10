import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = async (categoryId) => {
  const ref = collection(db, "products");
  const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
};