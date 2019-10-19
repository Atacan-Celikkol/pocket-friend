import React from 'react';
import Expense from '../../models/expense';
import ExpenseItem from './ExpenseItem';

let items = [];

class Expenses extends React.Component {
   constructor (props) {
      super(props);

      this.state = new Expense();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      const expenses = JSON.parse(localStorage.getItem('Expenses'));
      if (expenses) {
         items = expenses;
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      items.push(this.state);
      this.setState(new Expense());
      localStorage.setItem('Expenses', JSON.stringify(items));
   }

   render() {
      return (
         <form onSubmit={ this.handleSubmit }>

            <h3 className={ "text-danger" }>
               Expenses
            </h3>
            <div className={ 'table-responsive' }>
               <table className={ "table table-hover table-bordered" }>
                  <thead className={ "bg-danger text-light" }>
                     <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        items.map((item, i) =>
                           <ExpenseItem key={ i } index={ i } expense={ item } />
                        )
                     }
                  </tbody>
                  <tfoot>
                     <tr>
                        <td className={ "text-center" }>
                           <button type="submit" className={ "btn btn-danger btn-sm btn-block" } disabled={ this.state.amount <= 0 || this.state.date === '' || this.state.text.length < 3 }>+</button>
                        </td>
                        <td>
                           <input type="date" className={ "form-control form-control-sm" } name="date" onChange={ this.handleChange } defaultValue={ this.state.date } />
                        </td>
                        <td>
                           <input type="text" className={ "form-control form-control-sm" } name="text" placeholder="Please write a description" value={ this.state.text } onChange={ this.handleChange } />
                        </td>
                        <td>
                           <input id="yr-date" type="number" className={ "form-control form-control-sm" } name="amount" value={ this.state.amount } onChange={ (e) => { if (e.target.value >= 0) this.handleChange(e); } } min="0" />
                        </td>
                     </tr>
                  </tfoot>
               </table>
            </div>
         </form>
      );
   }
}

export default Expenses;