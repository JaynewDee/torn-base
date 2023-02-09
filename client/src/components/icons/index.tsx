import {
  GiEdgedShield,
  GiCrossedSwords,
  GiFire,
  GiTigerHead,
  GiBlackBook
} from "react-icons/gi";
import { RxGear } from "react-icons/rx";
import "./Icons.css";

export const CategoryIcons = [
  GiCrossedSwords,
  GiEdgedShield,
  GiFire,
  GiTigerHead,
  GiBlackBook
].map((icon) => icon({ className: "react-icon", size: "2rem" }));

export const SettingsIcon = RxGear({
  className: "settings-icon",
  size: "1.33rem"
});
