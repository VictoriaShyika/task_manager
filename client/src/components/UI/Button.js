import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-outline-light px-4   btn-dark ">
      {children}
    </button>
  );
};

export default Button;
