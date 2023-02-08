import React from "react";
import Categories from "./Category";

const Menu = () => {
  return (
    <>
      <div className="menu-btn-box" style={{ display: "flex", width: "100%" }}>
        {Categories()}
      </div>
      <div></div>
    </>
  );
};

export default Menu;
