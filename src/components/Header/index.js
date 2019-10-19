import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
   render() {
      return (
         <div className={ 'jumbotron' }>
            <div className={ 'container' }>
               <h1 className={ 'display-4' }>Pocket Friend</h1>
               <p className={ 'lead' }>Your pocket's best friend!</p>
            </div>
         </div>
      );
   }
}

export default Header;