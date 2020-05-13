import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'mobx-react';
import Mobx from './Components/mobx'; 

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

