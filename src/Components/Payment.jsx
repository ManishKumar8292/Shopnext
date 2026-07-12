import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Button from "./Button";

const Payment = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const handlePayment = () => {
    if (cart.length == 0) {
      return;
    }
    clearCart();
    navigate("/payment-success");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
          <span className="text-5xl">💳</span>
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-slate-800">
          Secure Payment
        </h1>
        <p className="mt-3 text-center text-slate-500">
          Complete your purchase securely with encrypted payment.
        </p>
        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <div className="mb-3 flex justify-between">
            <span className="text-slate-600">Items</span>
            <span className="font-semibold">{cart.length}</span>
          </div>

          <div className="mb-3 flex justify-between">
            <span className="text-slate-600">Delivery</span>
            <span className="font-semibold text-green-600">Free</span>
          </div>

          <div className="border-t pt-3 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-indigo-600">₹{totalPrice}</span>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-center">
          <p className="text-sm text-green-700">
            🔒 Your payment is protected with secure SSL encryption.
          </p>
        </div>

        <Button
          text="💳 Pay Now"
          handleButton={handlePayment}
          className="mt-8 w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl active:scale-95"
        />

        <Link
          to="/products"
          className="mt-4 block text-center text-indigo-600 font-medium hover:underline"
        >
          ← Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Payment;
