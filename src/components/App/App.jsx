import React from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Transactions from '../Transactions/Transactions';
import './App.scss';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
export default function App() {
  return (
    <HashRouter basename='/'>
      <div id="main" className={'container dark'}>
        <Header />

        <div className={'col-sm-12 col-lg-6 offset-lg-3'}>


          <Switch>
            <PrivateRoute path="/transactions">
              <Transactions />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Redirect to='/transactions' />
            </Route>
          </Switch>

        </div>

      </div >
    </HashRouter>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('UserToken') ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}