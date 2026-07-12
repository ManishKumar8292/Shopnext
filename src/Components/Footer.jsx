import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGit } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    } else {
      toast.success("Subscribed successfully!");
      setIsSubscribed(true);
      setEmail("");
    }
  };
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Discover the latest products with unbeatable prices. Shop
              confidently with secure payments and fast delivery.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/ManishKumar8292"
                target="blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-indigo-600 hover:text-white"
              >
                <FaGit />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/manish-kumar-bb579a192"
                target="blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 grid gap-2 text-gray-400 grid-cols-2">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `transition hover:text-indigo-400 ${isActive ? "text-indigo-400" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `transition hover:text-indigo-400 ${isActive ? "text-indigo-400" : ""}`
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `transition hover:text-indigo-400 ${isActive ? "text-indigo-400" : ""}`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `transition hover:text-indigo-400 ${isActive ? "text-indigo-400" : ""}`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            {isSubscribed ? (
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700">
                Subscribed
              </button>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  onChange={handleOnChange}
                  value={email}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                />

                <button className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 ShopNest. All Rights Reserved By Manish Kumar.</p>

          <div className="flex gap-6">
            <Link to="/policy" className="transition hover:text-indigo-400">
              Privacy Policy
            </Link>

            <Link
              to="/terms-condition"
              className="transition hover:text-indigo-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
