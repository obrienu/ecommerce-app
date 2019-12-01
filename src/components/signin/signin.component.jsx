import React, { Component } from 'react';
import './signin.style.scss'
import FormInput from '../form.input/form.input.component'
import Button from '../custom-button/custom.button.component'
export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state= {
            email : '',
            password : ''
        }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            email : '',
            password : ''
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="SignIn">
                <h2 className="Title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                    label = "Email"
                    value = { this.state.email}
                    handleChange = {this.handleChange}
                    type = "email"
                    name="email"
                    required
                />
                <FormInput
                    label = "Password"
                    value = { this.state.password}
                    handleChange = {this.handleChange}
                    type = "password"
                    name="password"
                    required
                />

                <Button
                type='submit'
                color='primary'
                >
                    SIGN IN
                </Button>

                </form>
              
            </div>
        );
    }
}

export default SignIn;
