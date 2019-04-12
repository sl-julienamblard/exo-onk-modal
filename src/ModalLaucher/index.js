import React from 'react';
import { Button } from '@ornikar/kitt';

import Modal from '../Modal';

export default function ModalLaucher() {
  const [isOpen, toggleModal] = React.useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => toggleModal(false)}>
        <div>
          Lorem
        </div>
      </Modal>
      <Button type="primary" onClick={() => toggleModal(true)}>
        Show Modal{' '}
        <span role="img" aria-label="so cool">😎</span>
      </Button>
    </>
  );
}