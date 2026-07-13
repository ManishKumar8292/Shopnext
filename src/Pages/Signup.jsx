import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
const Signup = () => {
  const { handleSubmit, register, reset } = useForm();
  const [viewPassword, setViewPassword] = useState(false);

  const onSubmit = (values) => {
    if (values.password !== values.conpassword) {
      toast.error("Please Enter Correct passwod");
      return;
    }
    reset();
  };
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-4 py-10">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">
        <div className="hidden flex-col justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-12 text-white lg:flex">
          <h1 className="text-5xl font-extrabold">ShopNest</h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Create your account and discover the latest products with exclusive
            offers, secure checkout, and a seamless shopping experience.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛍️</span>
              <p>Thousands of premium products</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🚚</span>
              <p>Fast & Free Delivery</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <p>100% Secure Payments</p>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
              <span className="text-4xl">👤</span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-800">
              Create Account
            </h2>

            <p className="mt-2 text-slate-500">
              Join ShopNext and start shopping today.
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="mb-2 block font-medium text-slate-700"
              >
                User Name
              </label>

              <input
                id="username"
                type="text"
                {...register("username", {
                  required: "Please Enter Your User Name",
                })}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label
                htmlFor="useremail"
                className="mb-2 block font-medium text-slate-700"
              >
                Email Address
              </label>

              <input
                id="useremail"
                type="email"
                {...register("useremail", {
                  required: "Please Enter Your Email",
                })}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="mb-2 block font-medium text-slate-700"
              >
                Password
              </label>

              <div>
                <input
                  id="password"
                  type={viewPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Plaese Enter Your Password",
                  })}
                  className="w-full rounded-xl border px-4 py-3"
                />

                <button
                  type="button"
                  onClick={() => setViewPassword(!viewPassword)}
                  className="absolute top-[56px] right-4 -translate-y-1/2 text-slate-500 border border-1 border-zinc-50"
                >
                  {viewPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="conpassword"
                className="mb-2 block font-medium text-slate-700"
              >
                Confirm Password
              </label>

              <input
                id="conpassword"
                {...register("conpassword", {
                  required: "Plaese Enter Your Confirm Password",
                  minLength: 6,
                })}
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3 text-lg font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
