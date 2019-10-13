import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import './responsive.css';

import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './store';

// ReactDOM.render(<Router history={browserHistory} routes={routes} />,<App />, document.getElementById('root'));


ReactDOM.render(
<Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
</Provider>
, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
