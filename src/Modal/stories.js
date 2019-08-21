import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';
import { Button } from '@ornikar/kitt';

storiesOf('Modal', module)
  .add('Default', () => (<div style={{width:"400px"}}><Modal footer={<Button type='primary'>Appliquer</Button>} header={"Titre"} content={"Loremipsum"}/></div>));