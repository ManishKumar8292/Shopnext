import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div
      key={item.name}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold">{item.name}</h3>

        <Link
          to="/products"
          className="mt-5 inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
