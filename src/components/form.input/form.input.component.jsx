import React from "react";
import "./form.input.style.scss";

const FormInput = ({ label, handleChange, ...otherData }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherData} />
      {label && (
        <label
          className={`${
            otherData.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
