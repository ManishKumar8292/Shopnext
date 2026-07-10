import { useEffect, useState } from "react";
import { ProductCard, Loader, NoDataFound } from "../index";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(url);

      if (!res.ok) {
        console.log("Data fetching issue");
      } else {
        const data = await res.json();
        setProductList(data.products);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const category = [
    "All",
    ...new Set(productList.map((product) => product.category)),
  ];

  const filteredProducts = productList.filter((product) => {
    const matchsearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCatogory =
      selectedCategory == "All" || product.category === selectedCategory;

    return matchsearch && matchCatogory;
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div>
            <p className="text-indigo-600 font-semibold uppercase tracking-[4px]">
              Our Collection
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Explore Our Products
            </h1>
          </div>

          <div className="flex w-full max-w-lg rounded-full border border-gray-200 bg-white p-2 shadow-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-transparent px-4 outline-none"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-red-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-4">
          {category.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`rounded-full border border-slate-300  px-5 py-2 text-sm font-medium transition hover:bg-indigo-600 hover:text-white ${selectedCategory === item ? "bg-indigo-600 text-white" : "bg-white text-indigo-600"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => {
              return <ProductCard key={idx} product={product} index={idx} />;
            })
          ) : (
            <div className="col-span-full">
              <NoDataFound />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
