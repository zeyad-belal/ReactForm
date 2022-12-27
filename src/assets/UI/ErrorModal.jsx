import React from "react";
import ReactDom from "react-dom";
import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.action}></div>;
}

function Modal(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.content}>{props.content}</div>
      <div className={styles.actions}>
        <button onClick={props.action}>Okay</button>
      </div>
    </div>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop 
        action={props.action} 
        />,
        document.getElementById("back-drop-root")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          content={props.content}
          action={props.action}
        />,
        document.getElementById("error-modal-root")
      )}
    </>
  );
}

export default ErrorModal;
