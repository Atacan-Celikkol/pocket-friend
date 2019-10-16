import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
   render() {
      return (
         <div class="jumbotron">
            <div class="container">
               <h1 class="display-4">Pocket Friend</h1>
               <p class="lead">Your pocket's best friend!</p>
            </div>
         </div>
      );
   }
}

export default Header;