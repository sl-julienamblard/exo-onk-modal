import React from "react";
import { Button } from "@ornikar/kitt";
import styles from "./styles.module.css";

export default function Modal({
  children,
  confirmationText,
  isOpen,
  onModalConfirmation,
  onModalClose,
  title
}) {
  return (
    isOpen && (
      <div className={styles.Container}>
        <div className={styles.Modal}>
          <header className={styles.Header}>
            <span>{title}</span>
            <Button icon="cross" onClick={onModalClose} />
          </header>
          {children}
          <footer className={styles.Footer}>
            <Button onClick={onModalConfirmation} type="primary">
              {confirmationText}
            </Button>
          </footer>
        </div>
      </div>
    )
  );
}
