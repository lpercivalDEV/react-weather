import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importing component from App.js
import registerServiceWorker from './registerServiceWorker';

//renders our component that we imported
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
