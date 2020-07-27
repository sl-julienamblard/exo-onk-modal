import React from "react";
import { Button } from "@ornikar/kitt";
import styles from "./styles.module.css";

// <Button icon="cross"></Button>
// <Button type="subtle">toto</Button>
// <Button type="primary">toto</Button>
function Modal({ headerTitle, footerContent, onClose, display, children }) {
  const show = {
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  const hidden = { display: "none" };
  const handleCloseclick = () => {
    if (typeof onClose === "function") onClose();
  };
  return (
    <>
      <div className={styles.Modal} style={display ? show : hidden}>
        <div className={styles.ModalHeader}>
          <p className={styles.ModalHeaderTitle}>{headerTitle}</p>
          <div className={styles.ModalHeaderClose}>
            <Button icon="cross" onClick={handleCloseclick} />
          </div>
        </div>
        <div className={styles.ModalBody}>{children}</div>
        {footerContent && (
          <div className={styles.ModalFooter}>{footerContent}</div>
        )}
      </div>
    </>
  );
}

const Footer = () => <div>Toto my default footer</div>;

Modal.Footer = Footer;

export default Modal;
