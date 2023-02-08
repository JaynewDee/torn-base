import React from "react";
import {
  GiEdgedShield,
  GiCrossedSwords,
  GiFire,
  GiTigerHead,
  GiHandBag
} from "react-icons/gi";
import "./Icons.css";

export const icons = [
  GiCrossedSwords,
  GiEdgedShield,
  GiFire,
  GiTigerHead,
  GiHandBag
].map((icon) => icon({ className: "react-icon", size: "2rem" }));
