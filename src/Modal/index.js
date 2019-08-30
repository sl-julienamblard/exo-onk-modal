import React from "react";
import { Button } from "@ornikar/kitt";
import styles from "./styles.module.css";

function Header({ title, onClose }) {
  return (
    <div className={styles.ModalHeader}>
      <p className={styles.ModalHeaderTitle}>{title}</p>
      <Button icon="cross" onClick={onClose} />
    </div>
  );
}

function Content({ children }) {
  return <div className={styles.ModalContent}>{children}</div>;
}

function Footer({ onApply }) {
  return (
    <div className={styles.ModalFooter}>
      <Button type="primary" onClick={onApply}>
        Appliquer
      </Button>
    </div>
  );
}

export default function Modal({ isOpen, title, onClose, children }) {
  if (isOpen)
    return (
      <div className={styles.Modal}>
        <Header title={title} onClose={onClose} />
        <Content>{children}</Content>
        <Footer onApply={onClose} />
      </div>
    );
  return null;
}
