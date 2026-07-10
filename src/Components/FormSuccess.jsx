import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <section className="felx justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-5xl text-white">
            ✓
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold text-slate-800">
          Form Submitted!
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Thank you for contacting us.
          <br />
          We've successfully received your message and our team will get back to
          you as soon as possible.
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200"></div>

        {/* Information */}
        <div className="space-y-3 text-left text-slate-600">
          <div className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <p>Your request has been received.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <p>Our support team will review your message.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-green-500">✔</span>
            <p>You can expect a response within 24 hours.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-indigo-700"
          >
            Back to Home
          </Link>

          <Link
            to="/products"
            className="rounded-xl border-2 border-indigo-600 px-8 py-3 font-semibold text-indigo-600 transition duration-300 hover:bg-indigo-600 hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormSuccess;
