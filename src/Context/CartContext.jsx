import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    let existingProduct = cart.find((item) => item.id == product.id);

    if (existingProduct) {
      toast.warning("Product already in Cart.");
      return;
    }

    setCart((prevCart) => {
      return [...prevCart, product];
    });

    toast.success("Product added to cart!");
  };

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  const GoToCart = () => {
    navigate("/cart");
  };

  const removeCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        GoToCart,
        removeCart,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
