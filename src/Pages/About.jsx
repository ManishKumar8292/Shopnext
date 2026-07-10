import { HeroSection, Stats, Features, ImageWithDesc } from "../index";

const About = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "We carefully select high-quality products to ensure the best shopping experience.",
      icon: "⭐",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to your doorstep with real-time order tracking.",
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      description:
        "100% secure payment methods with trusted gateways and encrypted transactions.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is always ready to help whenever you need us.",
      icon: "💬",
    },
  ];

  const stats = [
    {
      number: "10K+",
      title: "Customers",
    },
    {
      number: "500+",
      title: "Products",
    },
    {
      number: "99%",
      title: "Satisfaction",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="bg-slate-50">
      <HeroSection
        heading="Shopping Made Simple"
        title="About Us"
        description="Discover premium products, unbeatable prices, and an exceptional
            shopping experience—all in one place."
      />

      <ImageWithDesc
        imgSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
        subHead={true}
        text="Who We Are"
        title="We Love Building Amazing Shopping Experiences"
        firstPara="Our platform is designed to make online shopping faster, easier, and
            more enjoyable. From fashion and electronics to home essentials, we
            bring together trusted products and great deals for every customer."
        secondPara="With a focus on quality, affordability, and customer satisfaction,
            we continue to grow while keeping our shoppers at the heart of
            everything we do."
        link={true}
      />

      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-[5px] text-indigo-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-800">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features?.map((item, idx) => (
              <Features key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats?.map((item) => (
            <Stats label={item.title} key={item.label} number={item.number} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
