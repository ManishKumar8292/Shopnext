import { Counter } from "../index";

const Stats = ({ label, target, surFix }) => {
  return (
    <div className="rounded-2xl bg-slate-50 p-8 shadow-md">
      <Counter label={label} target={target} surFix={surFix} />
    </div>
  );
};

export default Stats;
