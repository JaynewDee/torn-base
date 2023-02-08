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
  return <button className="menu-cat-btn">{data.name.toUpperCase()}</button>;
};

const Categories = () =>
  menuState.map((category: MenuState) => (
    <div>{Category({ data: category })}</div>
  ));

export default Categories;
