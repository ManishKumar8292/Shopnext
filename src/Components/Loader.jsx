const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>

        <div className="absolute inset-3 animate-ping rounded-full bg-indigo-100"></div>

        <div className="absolute inset-5 rounded-full bg-indigo-600"></div>
      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">Loading...</h2>

      <p className="mt-2 text-gray-500">Please wait while we fetch products.</p>
    </div>
  );
};

export default Loader;
