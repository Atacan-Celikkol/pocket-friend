import React from 'react';
import Expenses from '../Expenses';
import Header from '../Header/index';
import Incomes from '../Incomes/';
import './style.scss';

function App() {
  return (
    <div id="main" className={ 'container' }>
      <Header />

      <div className={ 'col-lg-12' }>
        <Incomes />
        <Expenses />
      </div>

    </div >
  );
}

export default App;
