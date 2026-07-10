import CustomerRating from "./CustomerRating";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review: "Excellent service and fast delivery. Highly recommended!",
      rating: 4,
    },
    {
      name: "Priya Singh",
      review: "Amazing product quality and customer support.",
      rating: 5,
    },
    {
      name: "Aman Verma",
      review: "My favorite online shopping destination.",
      rating: 3,
    },
  ];
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-indigo-600 font-semibold">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">What Our Customers Say</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <CustomerRating key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
