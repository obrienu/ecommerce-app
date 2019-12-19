import React, { Component } from "react";
import "./header.style.scss";
import ToggleMenu from "../toggle.menu/toggle.menu.component";
import CartIcon from "../cart.icon/cart.icon.component";
import CartDropdown from "../cart.dropdown/cart.dropdown.component";
import logo from "../../assets/logo.png";
import { NavLink, Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/header/header.action";
import { toggleCart } from "../../redux/cart/cart.action";
import { selectShowCart } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHeaderMenu } from "../../redux/header/header.selector";
import { createStructuredSelector } from "reselect";

class Header extends Component {
  render() {
    const { history, match, currentUser } = this.props;
    return (
      <div className="container-fluid">
        <div className="Header">
          <Link className="LogoContainer" to="/">
            <img src={logo} alt="logo" className="logo" />
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
            <div onClick={this.props.toggleCart} className="Option Cart">
              <CartIcon />
            </div>
            <span onClick={this.props.toggleMenu} className="Option MenuToggle">
              <ToggleMenu />
            </span>
            {this.props.showCart && <CartDropdown />}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showMenu: selectHeaderMenu,
  showCart: selectShowCart
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
