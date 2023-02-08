import React from "react";

interface MenuState {
  name: string;
  options: [];
}

const menuState: MenuState[] = [
  {
    name: "file",
    options: []
  },
  {
    name: "edit",
    options: []
  },
  {
    name: "help",
    options: []
  }
];

const Category = ({ data }: { data: MenuState }) => {
  return (
    <button className="menu-cat-btn" style={{ margin: "0 1.33rem" }}>
      {data.name.toUpperCase()}
    </button>
  );
};

const Categories = () =>
  menuState.map((category: MenuState) => <>{Category({ data: category })}</>);

export default Categories;
