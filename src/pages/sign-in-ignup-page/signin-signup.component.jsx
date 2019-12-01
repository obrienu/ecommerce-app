import React from 'react';
import './signin-signup.style.scss'
import SignIn from '../../components/signin/signin.component'

const SignInSignUp = () => {
    return (
        <div className="SignInSignUp">
            <div className="row">
                <div className="col-md-6 section">
                    <SignIn />
                </div>
                <div className="col-md-6 section">
                
                </div>
            </div>
           
        </div>
    );
}

export default SignInSignUp;
