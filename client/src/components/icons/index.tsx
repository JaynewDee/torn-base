import React from "react";
import {
  GiArtificialHive,
  GiEdgedShield,
  GiCrossedSwords,
  GiFastArrow,
  GiMagicPortal,
  GiHandBag
} from "react-icons/gi";
import "./Icons.css";

export const icons = [
  GiCrossedSwords,
  GiEdgedShield,
  GiFastArrow,
  GiMagicPortal,
  GiHandBag
].map((icon) => icon({ className: "react-icon", size: "3rem" }));
