import { configure, addDecorator } from '@storybook/react';
import { GlobalDecorator } from '@ornikar/react-storybook';

import '../src/App.css';

// automatically import all files named stories.js
const req = require.context('../src', true, /.*\/stories\.js$/);
req.keys().forEach(filename => console.log(filename));

function loadStories() {
  require('./base.css');
  req.keys().forEach(filename => req(filename));
}

addDecorator(GlobalDecorator);

configure(loadStories, module);