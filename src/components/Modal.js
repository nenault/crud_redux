import React from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  return ReactDom.createPortal(
    <div>
      {props.content}<br />
      {props.actions}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
