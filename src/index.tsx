import * as serviceWorker from './serviceWorker';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

const App = lazy(() => import('./App'));

const element = (
  <Suspense fallback={<div />}>
    <Router>
      <App />
    </Router>
  </Suspense>
)
ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
