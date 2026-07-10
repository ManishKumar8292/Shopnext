import { Link } from "react-router-dom";

const NoDataFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 ">
      <div className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl my-10">
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-6xl">
          📦
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-800">
          No Products Found
        </h1>

        <p className="mt-4 text-slate-500">
          Sorry, we couldn't find any products matching your search or selected
          category.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition duration-300 hover:border-indigo-600 hover:bg-indigo-50"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Try searching with a different keyword or category.
        </p>
      </div>
    </section>
  );
};

export default NoDataFound;
