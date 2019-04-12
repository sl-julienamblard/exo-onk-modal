import React from 'react';
import { Button } from '@ornikar/kitt';

import classes from './index.module.css';

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.modalContainer}>
        <div className={props.title ? classes.titleContainerWithText : classes.titleContainer}>
          <div className={classes.title}>{props.title}</div>
          <Button icon="cross" onClick={props.onClose} />
        </div>
        <div className={classes.body}>
          {props.children}
        </div>
        <div className={classes.footer}>
          {props.footer}
        </div>
      </div>
    </div>
  );
}