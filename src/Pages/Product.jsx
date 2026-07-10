import { useEffect, useState } from "react";
import { Button, Loader } from "../index";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let res = await fetch(url);
      let data = await res.json();
      setProduct(data);
      setSelectImage(data.thumbnail);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    product && (
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <img
                  src={selectImage}
                  alt={product.title}
                  className="h-[500px] w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="mt-5 flex gap-4">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Product ${idx + 1}`}
                    onClick={() => setSelectImage(img)}
                    className={`h-24 w-24 cursor-pointer rounded-xl border-1 border-indigo-200 object-cover ${
                      selectImage === img
                        ? "border-2 border-indigo-600 scale-105"
                        : "border-gray-300 hover:border-indigo-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
                {product.category.toUpperCase()}
              </span>

              <h1 className="mt-5 text-5xl font-bold text-slate-800">
                {product.title}
              </h1>

              <p className="mt-3 text-lg text-slate-500">
                Brand : <span className="font-semibold">{product.brand}</span>
              </p>

              <div className="mt-5 flex items-center gap-4">
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-2xl text-yellow-500">
                      {star <= Math.round(product.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <span className="text-slate-500">({product.rating})</span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <h2 className="text-5xl font-bold text-indigo-600">
                  ${product.price}
                </h2>

                <span className="rounded-full bg-red-100 px-3 py-1 text-red-600">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <p className="mt-8 leading-8 text-slate-600">
                {product.description}
              </p>

              <div className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow">
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="font-semibold text-green-600">
                    {product.availabilityStatus}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Stock</span>
                  <span>{product.stock}</span>
                </div>

                <div className="flex justify-between">
                  <span>Weight</span>
                  <span>{product.weight} kg</span>
                </div>

                <div className="flex justify-between">
                  <span>Warranty</span>
                  <span>{product.warrantyInformation}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{product.shippingInformation}</span>
                </div>

                <div className="flex justify-between">
                  <span>Return</span>
                  <span>{product.returnPolicy}</span>
                </div>

                <div className="flex justify-between">
                  <span>Minimum Order</span>
                  <span>{product.minimumOrderQuantity}</span>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap justify-between w-full">
                <Link
                  to={`/products`}
                  className="inline-block rounded-xl w-fit  px-4 py-2 font-semibold transition hover:scale-105 bg-indigo-600 text-white hover:bg-indigo-900"
                >
                  Back
                </Link>
                <Button text="Add To Cart" varient="primary" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="mb-10 text-4xl font-bold">Customer Reviews</h2>

            <div className="space-y-6">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                      {review.reviewerName}
                    </h3>

                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-500">
                          {star <= review.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-slate-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Product;
