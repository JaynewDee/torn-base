import Modularize from "../Modularize";
import Settings from "./Settings";
const index = () => {
  return <div>{Modularize({ compName: "settings", Component: Settings })}</div>;
};

export default index;
