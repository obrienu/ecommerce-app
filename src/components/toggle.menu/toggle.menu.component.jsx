import React from "react";
import "./toggle.menu.style.scss";
import { connect } from "react-redux";

const ToggleMenu = ({ showMenu }) => {
  return (
    <div className={showMenu ? "menu-btn close" : "menu-btn"}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};

const mapStateToProps = state => ({
  showMenu: state.header.showMenu
});

export default connect(mapStateToProps)(ToggleMenu);
