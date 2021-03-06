import React from 'react';
import { render } from 'react-dom';

import store from './store/store';
import Root from './Containers/Root.jsx';

render(
  <Root store={store} />,
  document.getElementById('app')
);
