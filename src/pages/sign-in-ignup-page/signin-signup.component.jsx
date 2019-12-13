import React from "react";
import "./signin-signup.style.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInSignUp = () => {
  return (
    <div className="SignInSignUp">
      <div className="row ">
        <div className="col-md-6 section justify-content-center">
          <SignIn />
        </div>
        <div className="col-md-6 section justify-content-center">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
