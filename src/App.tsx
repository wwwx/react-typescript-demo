import './App.scss';

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';


const Login = lazy(() => import('./pages/user/login'));
const Dashboard = lazy(() => import('./components/layout/Dashboard'))

const App: React.FC = () => {
  return (
    <div className="App"> 
      <Suspense fallback={<div />}>
       <Switch>
        <Route path="/dashboard" render={({match}) => <Dashboard /> } />
        <Route path="/" render={({match}) => <Login />} exact />
       </Switch>
      </Suspense>
    </div>
  )
}
export default App;
