const Input = ({
  varient = "primary",
  type,
  placeholder,
  name,
  text,
  handleOnChange,
  value,
}) => {
  return (
    <>
      {" "}
      <label
        className={`${varient == "primary" ? "text-slate-700" : "text-white"} text-sm  mb-2 block font-medium`}
      >
        {text}
      </label>
      <input
        onChange={handleOnChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${varient == "primary" ? "border border-slate-300  outline-none focus:border-indigo-600 " : "bg-white/20 border border-white/20  text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"} w-full rounded-xl px-5 py-3 transition`}
      />
    </>
  );
};

export default Input;
