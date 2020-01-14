import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {
   render() {
      return (
         <div className="header-container col-sm-12 col-lg-8 offset-lg-2">
            <div className="">
               <h1 className="text-success fixed-title">Pocket Friend</h1>
               <h1 className="text-transparent">Pocket Friend</h1>
               <span className="fixed-title">Your pocket's best friend! {'😊'}</span>
               <span className="text-transparent">Your pocket's best friend! {'😊'}</span>
            </div>
            {
               localStorage.getItem('UserToken') &&
               <Link to='/login' style={{ position: 'absolute', marginTop: '22px' }} onClick={() => localStorage.removeItem('UserToken')}>Logout</Link>
            }
         </div>
      );
   }
}

export default Header;