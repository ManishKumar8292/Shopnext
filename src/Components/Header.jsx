import { useState } from "react";
import { MobileMenu, DesktopMenu } from "../index";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
        <DesktopMenu links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
        <MobileMenu links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </>
  );
};

export default Header;
