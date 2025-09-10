import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  
  const [items, setItems] = useState([]);

  const addItem = (product, qty) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === product.id);
      if (i >= 0) {
        
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      
      return [...prev, { id: product.id, title: product.title, price: product.price, qty }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => setItems([]);

  const totalQty = useMemo(() => items.reduce((acc, p) => acc + p.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((acc, p) => acc + p.qty * p.price, 0), [items]);

  const value = { items, addItem, removeItem, clear, totalQty, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}