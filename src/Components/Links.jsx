import { NavLink } from "react-router-dom";

const Links = ({ links, setIsOpen, isOpen }) => {
  return (
    <>
      {links.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          onClick={() => setIsOpen(!isOpen)}
          className={({ isActive }) =>
            `text-lg font-medium transition-all duration-300 ${
              isActive
                ? "text-indigo-600"
                : "text-slate-700 hover:translate-x-2 hover:text-indigo-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default Links;
