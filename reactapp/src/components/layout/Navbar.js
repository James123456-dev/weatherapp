import React from "react";
import PropTypes from "prop-types";

export default function Navbar({ title, icon }) {
  return (
    <header className="navbar">
      <h1 className="header-text">icon{title}</h1>
    </header>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Weather",
  icon: "fa fa-weather",
};
