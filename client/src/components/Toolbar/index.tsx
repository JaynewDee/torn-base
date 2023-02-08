import React from "react";
import Toolbar from "./Toolbar";
import Modularize from "../Modularize";
import "./Toolbar.css";

const index = () => {
  return <div>{Modularize({ compName: "toolbar", Component: Toolbar })}</div>;
};

export default index;
