import React, { Component } from "react";
import PaystackButton from "react-paystack";

class Paystack extends Component {
  callback = response => {
    console.log(response); // card charged successfully, get reference here
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    const key = "pk_test_c6e9c6365b47a512f7db4a7c1677e762ba752b4f";
    const total = this.props.total * 100;
    return (
      <div>
        <p>
          <PaystackButton
            text="Pay Via Paystack"
            className="payButton"
            callback={this.callback}
            close={this.close}
            disabled={false}
            embed={false}
            reference={this.getReference()}
            email={this.props.email}
            amount={total}
            paystackkey={key}
            tag="button"
          />
        </p>
      </div>
    );
  }
}

export default Paystack;
