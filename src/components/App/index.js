import React from 'react';
import "../../assets/react-contextmenu.scss";
import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';

const themeColor = 'light';
function App() {

  if (themeColor === 'light') {
    console.log('light');
    require('./themes/light.scss');
    require('./style.scss');
  }

  return (
    <div id="main" className={'container'}>
      <Header />

      <div className={'col-sm-12 col-lg-6 offset-lg-3'}>
        <Transactions />
      </div>

    </div >
  );
}

export default App;
