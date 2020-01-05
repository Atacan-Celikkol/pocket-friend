import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "../../assets/react-contextmenu.scss";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Transactions from '../Transactions/Transactions';
import './style.scss';


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
    <div id="main" className={'container'}>
      <Header />

      <div className={'col-sm-12 col-lg-6 offset-lg-3'}>


        <Router>
          <div>

            <Switch>
              <PrivateRoute path="/transactions">
                <Transactions />
              </PrivateRoute>
              <Route path="*">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>

    </div >
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