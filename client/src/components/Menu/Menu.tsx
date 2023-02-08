import React from "react";
import Categories from "./Category";

const Menu = () => {
  return <div style={{ display: "flex", width: "100%" }}>{Categories()}</div>;
};

export default Menu;
