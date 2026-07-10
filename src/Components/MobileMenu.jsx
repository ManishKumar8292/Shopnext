import { Button, Links } from "../index";

const MobileMenu = ({ isOpen, setIsOpen, links }) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      {isOpen && (
        <aside
          className={`fixed top-18 right-0 z-50 h-screen w-72 bg-white shadow-2xl transition-transform duration-500 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-4 flex flex-col gap-8 px-8">
            <Links links={links} setIsOpen={setIsOpen} isOpen={isOpen} />

            <Button text="Explore More" />
          </div>
        </aside>
      )}
    </>
  );
};

export default MobileMenu;
