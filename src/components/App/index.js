import React from 'react';
import Header from '../Header/index';
import Expenses from './../Expenses/index';
import './style.scss';

function App() {
  return (
    <div id="main" class="container">
      <Header />

      <div class="col-lg-12">
        <h3 class="text-success">
          Incomes
        </h3>

        <table class="table table-hover table-bordered">
          <thead class="bg-success text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>01.10.2019</td>
              <td>Salary</td>
              <td>₺5000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>15.10.2019</td>
              <td>Rent Income</td>
              <td>₺1200</td>
            </tr>
          </tbody>
        </table>

        <Expenses />


      </div>
    </div >
  );
}

export default App;
