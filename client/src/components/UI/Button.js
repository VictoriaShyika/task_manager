import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button  {...props} className="btn btn-outline-light px-4 mx-2" >
      {children}
    </button>
  );
};

export default Button;
