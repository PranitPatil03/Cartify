/* eslint-disable react-refresh/only-export-components */
import { CartContextType, CartItem, Order } from "@/types/types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { generateOrderId } from "@/utils/utils";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedOrders = localStorage.getItem("orders");
    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedOrders) setOrders(JSON.parse(storedOrders));
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems]);

  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
    } else {
      localStorage.removeItem("orders");
    }
  }, [orders]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity ?? 0) + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const createOrder = () => {
    const order: Order = {
      id: generateOrderId(),
      items: cartItems,
      totalAmount: cartItems.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 0),
        0
      ),
      date: new Date(),
    };
    setOrders((prevOrders) => [...prevOrders, order]);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
