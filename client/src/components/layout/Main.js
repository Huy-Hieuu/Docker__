import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Main(props) {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      {/* Outlet de hien thi nhung cai nested route ben trong */}
    </Fragment>
  );
}

export default Main;
