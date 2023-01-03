import React from 'react';
import { createRoot } from 'react-dom/client';

import Newtab from './Newtab';
import './index.css';

createRoot(window.document.querySelector('#app-container')).render(<Newtab />);

if (module.hot) module.hot.accept();
