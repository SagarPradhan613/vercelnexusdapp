import React from "react";

function Selector({ label, options, setState }) {
  const onChange = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="flex justify-center items-start flex-col w-full relative">
      <label className="ml-2">{label}</label>
      <select className="input" onChange={onChange}>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
