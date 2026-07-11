import { useState, useEffect } from "react";

const Counter = ({ target, surFix = "", label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof target === "string") {
      const timer = setTimeout(() => {
        setCount(target);
        return;
      }, 10000);
      return () => clearTimeout(timer);
    }

    if (target <= 0) {
      return;
    }

    let start = 0;
    const duration = 10000;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      <h2 className="text-5xl font-bold text-indigo-600">
        {count}
        {surFix}
      </h2>
      <p className="mt-3 text-slate-600">{label}</p>
    </>
  );
};

export default Counter;
