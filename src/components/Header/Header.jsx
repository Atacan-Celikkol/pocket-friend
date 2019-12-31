import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
   render() {
      return (
         <div className="header-container">
            <div className="">
               <h1 className="">Pocket Friend</h1>
               <span className="">Your pocket's best friend! {'😊'}</span>
            </div>
         </div>
      );
   }
}

export default Header;