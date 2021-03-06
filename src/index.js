import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/HomePage/HomePage';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import peopleApp from './reducers/peopleApp'

let store = createStore(peopleApp);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
