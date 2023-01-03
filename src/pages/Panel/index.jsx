import React from 'react';
import { createRoot } from 'react-dom/client';

import Panel from './Panel';
import './index.css';

createRoot(window.document.querySelector('#app-container')).render(<Panel />);

if (module.hot) module.hot.accept();
