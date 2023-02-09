import Modularize from "../Modularize";
import Settings from "./Modal";
import "./Settings.css";
const index = () => {
  return <div>{Modularize({ compName: "settings", Component: Settings })}</div>;
};

export default index;
