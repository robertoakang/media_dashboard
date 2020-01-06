import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> d173227ac4b0c9ca197e739e01e7a23719f44c90
