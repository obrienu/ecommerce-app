import React, { Component } from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavLink, Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/header/header.action";

class Header extends Component {
  render() {
    const { history, match, currentUser } = this.props;
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
            <span onClick={this.props.toggleMenu} className="Option MenuToggle">
              X
            </span>
          </div>
          <div className={this.props.showMenu ? "SideBar Show" : "SideBar"}>
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
                onClick={async () => {
                  await auth.signOut();
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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  showMenu: state.header.showMenu
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
