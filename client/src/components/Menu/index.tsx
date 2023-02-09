import React from "react";
import Modularize from "../Modularize";
import Menu from "./Menu";
import "./Menu.css";

const index = () => {
  return <div>{Modularize({ compName: "menu", Component: Menu })}</div>;
};

export default index;
