import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, CartBudge } from "../index";
import Logo from "../assets/Logo.png";
import { useCallback, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const DesktopMenu = ({ links, isOpen, setIsOpen }) => {
  const userData = useContext(UserContext);
  const { user, setUser } = userData;

  let navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSignup = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <Link
        to="/"
        className="text-3xl font-bold text-indigo-600 transition hover:scale-105"
      >
        <img src={Logo} alt="Logo" className="w-[80px]" />
      </Link>

      <nav className="hidden items-center gap-2 md:flex">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              `relative font-medium transition duration-300 px-4 py-2  rounded-lg ${
                isActive
                  ? "bg-indigo-600 text-white "
                  : "text-slate-700 hover:text-indigo-600"
              }`
            }
          >
            {link.name}

            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </NavLink>
        ))}
      </nav>

      <div className="hidden md:flex gap-3 justify-center items-center">
        {user ? (
          <>
            <div className="flex items-center gap-x-4">
              <CartBudge />
              <div className="flex items-center gap-2 ">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                    {user.username.charAt(0).toUpperCase()}
                  </div>

                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-ping"></span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
                </div>

                <div className="text-sm font-bold text-indigo-600">
                  <p>Welcome</p>
                  <h2>{user.username}</h2>
                </div>
              </div>
              <Button
                handleButton={handleLogout}
                text="Logout"
                varient="outline"
              />
            </div>
          </>
        ) : (
          <>
            <Button
              handleButton={handleLogin}
              text="Log In"
              varient="primary"
            />
            <Button
              handleButton={handleSignup}
              text="Sign Up"
              varient="outline"
            />
          </>
        )}
      </div>
      <div className="flex justify-center items-center gap-2  md:hidden">
        <div className="">
          {" "}
          <CartBudge />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default DesktopMenu;
