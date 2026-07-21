import { Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/CartContext";
const Home = React.lazy(() => import("./Pages/Home.jsx"));
const Products = React.lazy(() => import("./Pages/Products.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
const Contact = React.lazy(() => import("./Pages/Contact.jsx"));
const NoDataFound = React.lazy(() => import("./Pages/NoDataFound.jsx"));
const Product = React.lazy(() => import("./Pages/Product.jsx"));
const OurStory = React.lazy(() => import("./Pages/OurStory.jsx"));
const Login = React.lazy(() => import("./Pages/Login.jsx"));
const TermsConditions = React.lazy(() => import("./Pages/TermsConditions.jsx"));
const PrivacyPolicy = React.lazy(() => import("./Pages/PrivacyPolicy"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Payment = React.lazy(() => import("./Components/Payment"));
const PaymentSuccess = React.lazy(() => import("./Pages/PaymentSuccess"));
const Signup = React.lazy(() => import("./Pages/Signup"));
import Layout from "./Layout";
import { Suspense } from "react";
import Loader from "./Components/Loader.jsx";

const App = () => {
  const links = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/product/:id", element: <Product /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/our-story", element: <OurStory /> },
    { path: "/login", element: <Login /> },
    { path: "/terms-condition", element: <TermsConditions /> },
    { path: "/policy", element: <PrivacyPolicy /> },
    { path: "/cart", element: <Cart /> },
    { path: "/payment", element: <Payment /> },
    { path: "/payment-success", element: <PaymentSuccess /> },
    { path: "/signup", element: <Signup /> },
    { path: "*", element: <NoDataFound /> },
  ];

  return (
    <>
      <ToastContainer />
      <UserProvider>
        <CartProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<Layout />}>
                {links?.map((link, idx) => {
                  return (
                    <Route key={idx} path={link.path} element={link.element} />
                  );
                })}
              </Route>
            </Routes>
          </Suspense>
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default App;
