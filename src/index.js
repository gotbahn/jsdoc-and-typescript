import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './home';
import './index.css';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
