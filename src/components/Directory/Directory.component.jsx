import React from "react";
import MenuItem from "../MenuItem/Menu-Item.component";
import "./Directory.style.scss";
import { connect } from "react-redux";
import { sectionSelector } from "../../redux/directory/directory.selector";

const Directory = ({ section }) => {
  const menuItem = section.map(a => (
    <MenuItem
      key={a.id}
      title={a.title}
      subtitle={a.subtitle}
      image={a.image}
    />
  ));
  return <div className="Directory">{menuItem}</div>;
};

const mapStateToProps = state => ({
  section: sectionSelector(state)
});

export default connect(mapStateToProps)(Directory);
