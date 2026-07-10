const Features = ({ item }) => {
  return (
    <div
      key={item.title}
      className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="text-5xl">{item.icon}</div>

      <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

      <p className="mt-4 text-slate-500">{item.desc}</p>
    </div>
  );
};

export default Features;
