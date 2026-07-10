const Button = ({
  text = "Click Here",
  varient = "primary",
  arrow = false,
  handleButton,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={handleButton}
      className={`${className} inline-block rounded-xl  px-4 py-2 font-semibold transition hover:scale-105 ${varient === "primary" ? " bg-indigo-600 text-white hover:bg-indigo-900" : "bg-white text-indigo-600  hover:bg-gray-200 hover:outline-2 hover:outline hover:outline-gray-200"}`}
    >
      {text}
      {arrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
};

export default Button;
