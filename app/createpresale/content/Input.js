import React from "react";

function Input({
  type = "text",
  placeholder,
  onChange,
  value,
  label,
  afterLabel,
  tag,
}) {
  return (
    <div className="flex justify-center items-start flex-col w-full relative">
      <label className="ml-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      ></input>
      <div className="tag">{tag}</div>
      <label className="ml-2 hidden lg:block">{afterLabel}</label>
    </div>
  );
}

export default Input;
