import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
   render() {
      return (
         <div className="header-container col-sm-12 col-lg-6 offset-lg-3">
            <div className="">
               <h1 className="">Pocket Friend</h1>
               <span className="">Your pocket's best friend! {'😊'}</span>
            </div>
            {
               localStorage.getItem('UserToken') &&
               <a href="/login" style={{ position: 'absolute', marginTop: '22px' }} onClick={() => localStorage.removeItem('UserToken')}>Logout</a>
            }
         </div>
      );
   }
}

export default Header;