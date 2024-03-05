import React from "react";

function TextArea({
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
      <textarea
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-area"
        rows={5}
        cols={50}
      ></textarea>
      <div className="tag">{tag}</div>
      <label className="ml-2">{afterLabel}</label>
    </div>
  );
}

export default TextArea;
