import React, { useState, useEffect } from "react";

function TextArea({
  type = "text",
  placeholder,
  value,
  setValue,
  label,
  afterLabel,
  tag,
  controller,
}) {
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);

  useEffect(() => {
    if (controller) {
      setItalic(controller.includes(3));
      setBold(controller.includes(2));
    }
  }, [controller]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex justify-center items-start flex-col w-full relative">
      <label className="ml-2">{label}</label>
      <textarea
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`text-area ${italic ? "italic" : ""} ${
          bold ? "font-bold" : ""
        }`}
        rows={5}
        cols={50}
      ></textarea>
      <div className="tag">{tag}</div>
      <label className="ml-2">{afterLabel}</label>
    </div>
  );
}

export default TextArea;
