import { Link } from "react-router-dom";
import { HeroSection, ImageWithDesc } from "../index";

const OurStory = () => {
  const achivements = [
    {
      year: "2024",
      title: "The Beginning",
      desc: "Started with a vision to simplify online shopping.",
    },
    {
      year: "2025",
      title: "Growing Collection",
      desc: "Expanded our catalog with hundreds of premium products.",
    },
    {
      year: "2026",
      title: "Trusted by Customers",
      desc: "Built a loyal customer community through quality service.",
    },
  ];
  return (
    <section className="bg-slate-50">
      <HeroSection
        title="Our Story"
        heading=" Every Great Journey Starts with a Vision"
        description="  We believe shopping should be simple, enjoyable, and accessible to
            everyone. Our journey began with one goal—to connect people with
            quality products they love."
      />

      <ImageWithDesc
        imgSrc="https://images.unsplash.com/photo-1674027392887-751d6396b710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3VyJTIwc3RvcnklMjBmb3IlMjBlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D"
        labelText="Since 2024"
        label={true}
        title="From a Small Idea to a Growing Community"
        firstPara="What started as a simple idea has grown into a trusted online shopping destination. We wanted to create a place where customers could discover high-quality products without spending hours searching across multiple websites."
        secondPara="Every product we showcase is selected with care, ensuring quality, affordability, and customer satisfaction remain our highest priorities."
      />

      <div className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-indigo-600 font-semibold">
              Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-800">
              Our Milestones
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            {achivements.map((item) => (
              <div
                key={item.year}
                className="flex gap-6 rounded-2xl bg-slate-50 p-6 shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2">
        <div className="rounded-3xl bg-indigo-600 p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Our Mission</h2>

          <p className="mt-6 leading-8 text-indigo-100">
            To provide customers with premium-quality products, competitive
            pricing, and a seamless shopping experience that inspires trust and
            satisfaction.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>

          <p className="mt-6 leading-8 text-slate-600">
            To become one of the most customer-centric online shopping
            destinations by continuously innovating and delivering exceptional
            value.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold">Become Part of Our Journey</h2>

          <p className="mt-6 text-lg text-indigo-100">
            Thank you for being a part of our story. We look forward to serving
            you with the best products and an exceptional shopping experience.
          </p>
          <div className="mt-4">
            {" "}
            <Link
              to="/products"
              className="mt-10 rounded-xl bg-white px-8 py-3 font-semibold text-indigo-600 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
