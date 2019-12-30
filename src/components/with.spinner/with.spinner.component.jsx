import React from "react";
import "./with.spinner.style.scss";

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  const Spinner = (
    <div className="SpinnerOverlay">
      <div className="SpinnerContainer"></div>
    </div>
  );

  return isLoading ? Spinner : <WrapperComponent {...otherProps} />;
};

export default WithSpinner;
