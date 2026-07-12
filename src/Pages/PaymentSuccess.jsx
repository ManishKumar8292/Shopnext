import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-2xl">
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <span className="text-5xl">✅</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-slate-800">
          Payment Successful!
        </h1>

        <p className="mt-4 text-slate-500">
          Thank you for shopping with{" "}
          <span className="font-semibold text-indigo-600">ShopNext</span>. Your
          payment has been received successfully.
        </p>

        {/* Order Details */}
        <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-left">
          <div className="mb-4 flex justify-between">
            <span className="text-slate-500">Order Status</span>
            <span className="font-semibold text-green-600">Confirmed</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span className="text-slate-500">Payment Status</span>
            <span className="font-semibold text-green-600">Paid</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Estimated Delivery</span>
            <span className="font-semibold">3 - 5 Days</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/products"
            className="flex-1 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="flex-1 rounded-xl border border-indigo-600 py-3 text-center font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-slate-400">
          A confirmation email will be sent to your registered email address.
        </p>
      </div>
    </section>
  );
};

export default PaymentSuccess;
