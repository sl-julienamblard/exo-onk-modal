import React, {useState} from 'react';
import { Button } from '@ornikar/kitt';
import Modal from './../Modal';

export default function ModalLaucher() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      { visible && <Modal header="test" footer="test"/> }
      <Button type="primary" onClick={() => setVisible(true)}>
      Show Modal{' '}
      <span role="img" aria-label="so cool">😎</span>
    </Button>
    </div>
  );
}