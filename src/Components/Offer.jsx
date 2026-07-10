import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center text-white">
        <p className="uppercase tracking-[5px]">Limited Time Offer</p>

        <h2 className="mt-4 text-5xl font-bold">Summer Sale Up To 70% OFF</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          Shop the latest fashion, electronics, furniture, beauty products, and
          much more at unbeatable prices.
        </p>

        <Link
          to="/products"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 transition hover:scale-105"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Offer;
