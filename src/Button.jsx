import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Button = ({ value, onClick }) => {
    
  return (
    <div className="box" onClick={onClick}>
      <RxCross1 className={value==="X"?"display":"hidden" }/>
      <FaRegCircle className={value==="O"?"display":"hidden" }/>
    </div>
  );
};

export default Button;
