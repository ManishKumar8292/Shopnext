const Features = ({ item }) => {
  const { title, icon, desc } = item;
  return (
    <div
      key={title}
      className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-slate-500">{desc}</p>
    </div>
  );
};

export default Features;
