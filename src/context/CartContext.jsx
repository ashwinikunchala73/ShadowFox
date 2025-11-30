import React, { createContext, useContext, useEffect, useState } from "react";
import { load, save } from "../utils/storage";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => load("cart_items", []));

  useEffect(() => {
    save("cart_items", items);
  }, [items]);

  const add = (product, qty = 1) => {
    setItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      }
      return [...prev, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  };

  const remove = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => setItems([]);

  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, updateQty, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}
