import { CategoryIcons, SettingsIcon } from "../icons";
import Title from "../Title";

const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <Title />
      <div className="category-icons">{CategoryIcons}</div>
      {SettingsIcon}
    </div>
  );
};

export default Toolbar;
