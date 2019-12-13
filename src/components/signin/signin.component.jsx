import React, { Component } from "react";
import "./signin.style.scss";
import FormInput from "../form.input/form.input.component";
import Button from "../custom-button/custom.button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      alert("Invalid Email and/or password");
      console.log(`error trying to log in : ${error}`);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleRedirect() {
    this.props.history.push(`${this.props.match.url}`);
  }

  render() {
    return (
      <div className="SignIn">
        <h2 className="Title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            type="email"
            name="email"
            required
          />
          <FormInput
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            type="password"
            name="password"
            required
          />

          <Button type="submit" color="dark">
            SIGN IN
          </Button>

          <Button color="primary" onClick={signInWithGoogle}>
            {" "}
            {""}
            Sign In With Google {""}
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
