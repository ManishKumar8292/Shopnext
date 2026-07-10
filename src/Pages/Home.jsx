import { Link } from "react-router-dom";
import { Testimonial, Card, Features, Offer, Stats } from "../index";
import Hero from "../Components/Hero";
// import HeroSlider from "../Components/HeroSlider";

const Home = () => {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
    },
    {
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      desc: "Free shipping on all orders over ₹999.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      desc: "100% secure and encrypted payment methods.",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      desc: "Friendly customer support whenever you need us.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      desc: "Only trusted brands and premium quality products.",
    },
  ];

  const stats = [
    [10, "K+", "Happy Customers"],
    [500, "+", "Products"],
    [50, "+", "Brands"],
    [99, "%", "Satisfaction"],
  ];

  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[5px] text-indigo-600">
              Categories
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-800">
              Shop By Category
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[5px] text-indigo-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold">We Make Shopping Better</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => {
              return <Features key={idx} item={item} />;
            })}
          </div>
        </div>
      </section>

      <Offer />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
          {stats.map(([number, surFix, label]) => (
            <Stats surFix={surFix} target={number} label={label} key={label} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">Ready to Start Shopping?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Explore thousands of premium products from trusted brands and enjoy
            an effortless shopping experience.
          </p>

          <Link
            to="/products"
            className="mt-10 inline-block rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <Testimonial />
    </>
  );
};

export default Home;
