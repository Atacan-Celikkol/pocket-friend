import React from 'react';
import { useHistory } from "react-router-dom";
import UserLogin from '../../models/UserLogin';
import UserRegister from '../../models/UserRegister';
import { LoginAsync, RegisterAsync } from '../../services/UserService';

export default class Login extends React.Component {
   constructor() {
      super();
      this.state = { isLogin: true };
      this.isLogin = this.isLogin.bind(this);
   }

   isLogin() {
      this.setState({ isLogin: !this.state.isLogin });
   }

   render() {
      return (
         <div>
            <div className="card">
               <div className="card-body">
                  {this.state.isLogin ? <LoginComponent isLogin={this.isLogin} /> : <RegisterComponent isLogin />}
               </div>
            </div>
         </div >
      );
   }
}

export function LoginComponent(props) {
   const user = new UserLogin();
   const history = useHistory();
   const login = (e) => {
      e.preventDefault();
      LoginAsync(user).then(x => {
         if (x.message) {
            alert(x.message);
            return;
         } else {
            localStorage.setItem('UserToken', x['user-token']);
            history.push('/transactions');
         };
      });
   };

   return (
      <form onSubmit={login}>
         <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => user.login = e.target.value} />
         </div>
         <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => user.password = e.target.value} />
         </div>
         <button type="submit" className="btn btn-primary">Login</button>
         <button type="button" className="btn btn-success ml-2" onClick={props.isLogin}>Register</button>
      </form>
   );
}

export function RegisterComponent() {
   const user = new UserRegister();
   const history = useHistory();
   const register = (e) => {
      e.preventDefault();
      RegisterAsync(user)
         .then(x => {
            if (x.message) {
               alert(x.message);
               return;
            } else {
               LoginAsync({ login: user.email, password: user.password }).then(x => { localStorage.setItem('UserToken', x['user-token']); history.push('/transactions'); });
            }
         });
   };

   return (
      <form onSubmit={register}>
         <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e) => user.name = e.target.value} />
         </div>
         <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => user.email = e.target.value} />
         </div>
         <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => user.password = e.target.value} />
         </div>
         <button type="submit" className="btn btn-success">Register</button>
      </form>
   );
}