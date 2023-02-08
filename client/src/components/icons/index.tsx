import React from "react";
import {
  GiEdgedShield,
  GiCrossedSwords,
  GiFire,
  GiTigerHead,
  GiHandBag,
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
