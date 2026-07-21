import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cart, removeCart, totalPrice } = useContext(CartContext);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-slate-800 md:text-5xl">
            🛒 Shopping Cart
          </h1>

          <p className="mt-3 text-slate-500">
            Review your selected products before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-3xl bg-white p-12 text-center shadow-xl">
            <div className="text-7xl">🛒</div>

            <h2 className="mt-6 text-3xl font-bold text-slate-800">
              Your Cart is Empty
            </h2>

            <p className="mt-3 text-slate-500">
              Start shopping and add your favourite products.
            </p>

            <Button
              text="Continue Shopping"
              className="mt-8 w-full"
              handleButton={() => navigate("/products")}
            />
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex-row"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-60 w-full object-cover transition duration-500 group-hover:scale-110 md:h-40 md:w-40"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                        {item.category}
                      </span>

                      <h2 className="mt-3 text-2xl font-bold text-slate-800">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-3xl font-bold text-indigo-600">
                        ₹ {item.price}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        text="Remove"
                        handleButton={() => removeCart(item.id)}
                        className="w-full lg:w-fit bg-red-500 hover:bg-red-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky top-24 h-fit rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-800">
                Order Summary
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Items</span>
                  <span className="font-semibold">{cart.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping</span>

                  <span className="font-semibold text-green-600">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Discount</span>

                  <span className="font-semibold text-red-500">₹ 0</span>
                </div>

                <hr />

                <div className="flex justify-between text-3xl font-bold">
                  <span>Total :</span>

                  <span className="text-indigo-600">
                    ₹ {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                text="Proceed to Checkout"
                handleButton={() => navigate("/payment")}
                className="mt-8 w-full"
              />

              <div className="mt-6 rounded-2xl bg-green-50 p-4 text-center">
                <p className="text-sm font-medium text-green-700">
                  🔒 100% Secure Checkout
                </p>

                <p className="mt-1 text-xs text-green-600">
                  SSL encrypted payment powered by ShopNext.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
