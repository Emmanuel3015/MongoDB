import React from "react";

const Input = ({ type, name, id, placeholder, hasError, defaultValue }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`block w-200 border ${
        hasError ? "border-red-500" : "border-gray-300"
      }  p-4 rounded-md`}
    />
  );
};

export default Input;
