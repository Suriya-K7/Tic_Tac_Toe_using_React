import React from "react";
// import { FaRegCircle } from "react-icons/fa";

const Button = ({ value, onClick }) => {
    
  return (
    <div className="box" onClick={onClick}>
      {value}
    </div>
  );
};

export default Button;
