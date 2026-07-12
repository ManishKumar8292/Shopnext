import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/CartContext";
import {
  Home,
  Products,
  About,
  Contact,
  NoDataFound,
  Product,
  OurStory,
  Login,
  TermsConditions,
  PrivacyPolicy,
  Cart,
  Payment,
  PaymentSuccess,
} from "./index";
import Layout from "./Layout";

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
    { path: "*", element: <NoDataFound /> },
  ];

  return (
    <>
      <ToastContainer />
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              {links?.map((link, idx) => {
                return (
                  <Route key={idx} path={link.path} element={link.element} />
                );
              })}
            </Route>
          </Routes>
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default App;
