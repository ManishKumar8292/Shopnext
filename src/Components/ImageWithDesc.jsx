import { Link } from "react-router-dom";

const ImageWithDesc = ({
  imgSrc,
  label = false,
  title,
  firstPara,
  secondPara,
  link = false,
  subHead = false,
  text,
  labelText,
}) => {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
      <div>
        <img src={imgSrc} alt={title} className="rounded-3xl shadow-xl" />
      </div>

      <div>
        {label && (
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            {labelText}
          </span>
        )}

        {subHead && (
          <p className="font-semibold uppercase tracking-[5px] text-indigo-600">
            {text}
          </p>
        )}

        <h2 className="mt-6 text-4xl font-bold text-slate-800">{title}</h2>

        <p className="mt-6 leading-8 text-slate-600">{firstPara}</p>

        <p className="mt-4 leading-8 text-slate-600">{secondPara}</p>
        {link && (
          <div className="mt-6 ">
            <Link
              to="/our-story"
              className=" rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Our Story
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageWithDesc;
