import { CategoryIcons, SettingsIcon } from "../icons";
import SettingsBtn from "../Settings/SettingsBtn";
import Title from "../Title";

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <Title />
      <div className="category-icons">{CategoryIcons}</div>
      <SettingsBtn />
    </div>
  );
};

export default Toolbar;
