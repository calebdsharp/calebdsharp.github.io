import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './style/App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render([
    <App key="1" />, <Footer key="3" />],
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
