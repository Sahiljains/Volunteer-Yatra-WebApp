import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DemandRespondRouter from '../containers/dr-portal/dr.routes';
import Dashboard from '../containers/common/Dashboard';
import Login from '../containers/common/Login';
import Register from '../containers/common/register';
import ProtectedRoute from './ProtectedRoute';

const MainRoutes = () => {
  let isLogin = sessionStorage.getItem('isLogin');
  return (
    <Switch>
      <Route exact path='/' render={(props) => (isLogin ? <Redirect to='/demand-response' /> : <Redirect to='/login' />)} />
      <Route exact path='/login' render={(props) => (isLogin ? <Redirect to='/dashboard' /> : <Login {...props} />)} />
      <Route exact path='/register' render={(props) => (isLogin ? <Redirect to='/dashboard' /> : <Register {...props} />)} />

      <ProtectedRoute path='/dashboard' component={Dashboard} />
      <ProtectedRoute path='/demand-response' component={DemandRespondRouter} />
    </Switch>
  );
};

export default MainRoutes;
