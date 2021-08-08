import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { component: Component, ...restProps } = props;
  let isLogin = sessionStorage.getItem('isLogin');
  return <Route {...restProps} render={(props) => (isLogin ? <Component {...restProps} {...props} /> : <Redirect to='/login' />)} />;
};

export default ProtectedRoute;
