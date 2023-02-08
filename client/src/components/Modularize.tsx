import { Dispatch, SetStateAction, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

const Modularize = ({
  compName,
  Component
}: {
  compName: string;
  Component: () => JSX.Element;
}) => {
  return createPortal(
    <div className={compName + "-root"}>{Component()}</div>,
    document.getElementById(`${compName}-root`) as HTMLElement
  );
};

export default Modularize;
