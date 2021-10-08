import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <div class="video">
    <iframe class="embed-responsive-item" 
    src="https://www.youtube.com/embed/ntT-N5f-Aks" allowfullscreen=""></iframe>
      </div>

  </React.StrictMode>,
  document.getElementById('root'),
);
