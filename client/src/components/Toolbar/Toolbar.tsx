import React from "react";
import { CategoryIcons } from "../icons";
import Title from "../Title/Title";

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <Title />
      <div className="toolbar-icons">{CategoryIcons}</div>
    </div>
  );
};

export default Toolbar;
