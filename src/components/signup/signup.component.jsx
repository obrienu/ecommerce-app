import React, { Component } from "react";
import FormInput from "../form.input/form.input.component";
import Button from "../custom-button/custom.button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.style.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password must be same as Confirm Password");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(`error trying to save user: ${error}`);
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="Title">I do not have an account</h2>
        <span>Sign Up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            value={displayName}
            required
          />
          <FormInput
            name="email"
            handleChange={this.handleChange}
            label="Email"
            type="email"
            value={email}
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            label="Password"
            type="password"
            value={password}
            required
          />
          <FormInput
            name="confirmPassword"
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            required
          />

          <Button color="dark">SIGN UP</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
