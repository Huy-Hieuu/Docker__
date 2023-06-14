import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
      <NavLink to={"/"} className={{} ? "" : ""}>
        Home
      </NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
    </header>
  );
}

export default Header;
