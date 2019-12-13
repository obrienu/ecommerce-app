import React, { Component } from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavLink, Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBar: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(curState => ({
      menuBar: !curState.menuBar
    }));
  }

  render() {
    const { currentUser, history, match } = this.props;
    return (
      <div className="container-fluid">
        <div className="Header container">
          <Link className="LogoContainer" to="/">
            <Logo />
          </Link>

          <div className="Options">
            <NavLink activeClassName="ActiveLink" className="Option" to="/shop">
              SHOP
            </NavLink>
            <NavLink
              activeClassName="ActiveLink"
              className="Option"
              to="/contact"
            >
              CONTACT
            </NavLink>
            {currentUser ? (
              <div
                className="Option"
                onClick={() => {
                  auth.signOut();
                  history.push(`${match.url}`);
                }}
              >
                SIGN OUT
              </div>
            ) : (
              <NavLink
                activeClassName="ActiveLink"
                className="Option"
                to="/signin"
              >
                SIGN IN
              </NavLink>
            )}
            <span onClick={this.handleClick} className="Option MenuToggle">
              X
            </span>
          </div>
          <div className={this.state.menuBar ? "SideBar Show" : "SideBar"}>
            <NavLink
              activeClassName="ActiveLink"
              className="SideBarOptions"
              to="/shop"
            >
              SHOP
            </NavLink>
            <NavLink
              activeClassName="ActiveLink"
              className="SideBarOptions"
              to="/contact"
            >
              CONTACT
            </NavLink>
            {currentUser ? (
              <div
                className="SideBarOptions"
                onClick={() => {
                  console.log("hello from logout");
                  auth.signOut();
                  history.push(`${match.url}`);
                }}
              >
                SIGN OUT
              </div>
            ) : (
              <NavLink
                activeClassName="ActiveLink"
                className="SideBarOptions"
                to="/signin"
              >
                SIGN IN
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
