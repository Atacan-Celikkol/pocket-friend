import React from 'react';
import Header from '../Header/index';
import Transactions from '../Transactions/Transactions';
import './style.scss';

function App() {
  return (
    <div id="main" className={'container'}>
      <Header />

      <div className={'row'}>
        <div className={'col-lg-6 offset-lg-3'}>
          <Transactions />
        </div>
      </div>

    </div >
  );
}

export default App;
