import Menu from "./Menu";
import Toolbar from "./Toolbar";
import Portal from "./Portal";

import { ACTIONS } from "../api/index";

const Layout = () => {
  //
  // Shared state held here?
  //
  return (
    <div className="layout-box">
      <Menu />
      <Toolbar />
      <Portal />
    </div>
  );
};

export default Layout;
