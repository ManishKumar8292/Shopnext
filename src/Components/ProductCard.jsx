import Button from "../Components/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product, index }) => {
  const { cart, addToCart, GoToCart } = useContext(CartContext);
  const isInCart = cart.some((item) => item.id === product.id);
  return (
    <>
      <div
        key={index}
        className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Badge */}
          <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
            {product.tags[0].toUpperCase()}
          </span>
        </div>

        <div className="p-5">
          <p className="text-sm text-slate-500">{product.category}</p>

          <h2 className="mt-2 text-lg font-bold text-slate-800">
            {product.title}
          </h2>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-xl font-bold text-indigo-600">
              ₹ {product.price}
            </span>
            <div>
              {" "}
              {[1, 2, 3, 4, 5].map((star, idx) => {
                return (
                  <span key={idx} className="text-yellow-500">
                    {star <= product.rating ? "★" : "☆"}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between gap-2">
            <Link
              to={`/product/${product.id}`}
              className="inline-block rounded-xl w-fit  px-4 py-2 font-semibold transition hover:scale-105 bg-white text-indigo-600  hover:bg-gray-200 hover:outline-2 hover:outline hover:outline-gray-200"
            >
              View
            </Link>
            {isInCart ? (
              <Button
                handleButton={GoToCart}
                text={"Go to Cart"}
                varient="outline"
              />
            ) : (
              <Button
                handleButton={() => addToCart(product)}
                text={"Add to Cart"}
                varient="primary"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
