const HeroSection = ({ heading, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center text-white">
        <p className="uppercase tracking-[6px] text-indigo-100">{title}</p>

        <h1 className="mt-4 text-5xl font-bold lg:text-6xl">{heading}</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
