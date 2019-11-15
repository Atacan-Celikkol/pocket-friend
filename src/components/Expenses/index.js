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
      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);
   }

   componentDidMount() {
      this.getExpenses();
   }

   getExpenses() {
      fetch('https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses')
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.setState(new Expense());
         })
         .catch(console.log)
   }

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.name === 'amount' ? parseFloat(e.target.value) : e.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      this.create();
   }

   create() {
      fetch('https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses', {
         method: 'post',
         body: JSON.stringify(this.state)
      })
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.getExpenses();
         })
         .catch(console.log)
   }

   delete(id) {
      if (window.confirm("Are you sure ?")) {
         fetch(`https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses/${id}`, {
            method: 'delete'
         })
            .then(res => res.json())
            .then((data) => {
               items = data;
               this.getExpenses();
            })
            .catch(console.log)
      }
   }

   update(obj) {
      fetch(`https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses/${obj.objectId}`, {
         method: 'put',
         body: JSON.stringify(obj)
      })
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.getExpenses();
         })
         .catch(console.log)
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
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        items.map((item, i) =>
                           <ExpenseItem key={ i } index={ i } expense={ item } delete={ () => this.delete(item.objectId) } update={ (expense) => this.update(expense) } />
                        )
                     }
                  </tbody>
                  <tfoot>
                     <tr>
                        <td className={ "text-center" }>
                           <button type="submit" className={ "btn btn-danger btn-sm btn-block" } disabled={ this.state.amount <= 0 || this.state.on_date === '' || this.state.description.length < 3 }>+</button>
                        </td>
                        <td>
                           <input type="date" className={ "form-control form-control-sm" } name="on_date" onChange={ this.handleChange } defaultValue={ this.state.on_date } />
                        </td>
                        <td>
                           <input type="text" className={ "form-control form-control-sm" } name="description" placeholder="Please write a description" value={ this.state.description } onChange={ this.handleChange } />
                        </td>
                        <td>
                           <input id="amount" type="number" className={ "form-control form-control-sm" } name="amount" value={ this.state.amount } onChange={ (e) => { if (e.target.value >= 0) this.handleChange(e); } } step="0.01" min="1.0" />
                        </td>
                        <td>
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