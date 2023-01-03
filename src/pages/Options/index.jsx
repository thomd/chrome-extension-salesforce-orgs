import React from 'react';
import { createRoot } from 'react-dom/client';

import Options from './Options';
import './index.css';

createRoot(window.document.querySelector('#app-container')).render(
  <Options title={'Settings'} />
);

if (module.hot) module.hot.accept();
