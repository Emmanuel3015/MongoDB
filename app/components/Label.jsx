import React from "react";

const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[18px] font-medium text-white"
    >
      {text}
    </label>
  );
};

export default Label;
