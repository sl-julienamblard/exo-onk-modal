import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';

storiesOf('Modal', module)
  .add('Default', () => (
  <Modal isOpen={true} footer={<div>Lorem</div>}>
    <div>
      Lorem
    </div>
    <div>
      Lorem
    </div>
    <div>
      Lorem
    </div>
    v
    <div>
      Lorem
    </div><div>
      Lorem
    </div>
    <div>
      Lorem
    </div>
    <div>
      Lorem
    </div><div>
      Lorem
    </div>
    <div>
      Lorem
    </div>v<div>
      Lorem
    </div>vv<div>
      Lorem
    </div>
    <div>
      Lorem
    </div>
    <div>
      Lorem
    </div>







  </Modal>))
  .add('With Title', () => (
  <Modal title="Titre" isOpen={true} footer={<div>Lorem</div>}>
    <div>
      Lorem
    </div>
  </Modal>));