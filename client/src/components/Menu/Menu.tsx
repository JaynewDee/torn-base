import Categories from "./Category";

const Menu = () => {
  return (
    <>
      <div className="menu-btn-box" style={{ display: "flex", width: "100%" }}>
        {Categories()}
      </div>
    </>
  );
};

export default Menu;
