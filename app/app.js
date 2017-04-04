import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './components/assets/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './components/Routes';


ReactDOM.render(<Routes/>, document.querySelector('#root'));

