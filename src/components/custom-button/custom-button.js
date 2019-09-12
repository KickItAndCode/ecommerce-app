import React from "react";
import "./custom-button.scss";
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className="custombuttom">
      <button className="custom-button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
