import React from "react";
import "./toggle.menu.style.scss";
import { connect } from "react-redux";

const ToggleMenu = ({ showMenu }) => {
  return (
    <div class={showMenu ? "menu-btn close" : "menu-btn"}>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>
  );
};

const mapStateToProps = state => ({
  showMenu: state.header.showMenu
});

export default connect(mapStateToProps)(ToggleMenu);
