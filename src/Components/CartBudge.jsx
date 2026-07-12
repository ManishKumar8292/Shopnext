import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartBudge = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Link to="/cart" className="relative">
        <FaShoppingCart className="text-2xl text-slate-700 hover:text-indigo-600 transition" />

        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {cart.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartBudge;
