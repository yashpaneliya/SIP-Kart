import { Fragment } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.25);

  @keyframes slide-down {
	from {
		opacity: 0;
		transform: translateY(-3rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
`;

const Modaloverlay = styled.div`
  position: fixed;
  top: 20vh;
  left:20%;
  width: 60%;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={props.onHide} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
