import React from 'react';
import Expense from '../../models/expense';
import ExpenseItem from './ExpenseItem';

let items = [];
let updateTriggeredId = -1;

class Expenses extends React.Component {
   constructor (props) {
      super(props);

      this.state = new Expense();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);

      // const expenses = JSON.parse(localStorage.getItem('Expenses'));
      // if (expenses) {
      //    items = expenses;
      // }
   }

   componentDidMount() {
      fetch('https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses')
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.setState(new Expense());
         })
         .catch(console.log)
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();

      fetch('https://api.backendless.com/1FF6847A-E791-15A3-FFEE-DDFB60C31600/F1C73522-DD64-3A93-FF4E-67CBDEDCDF00/data/expenses', {
         method: 'post',
         body: JSON.stringify(this.state)
      })
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.setState(new Expense());
         })
         .catch(console.log)


      localStorage.setItem('Expenses', JSON.stringify(items));
   }

   delete(id) {
      if (window.confirm("Are you sure ?")) {
         items = items.filter(x => items.indexOf(x) !== id);
         this.setState(this.state);
         localStorage.setItem('Expenses', JSON.stringify(items));
      }
   }

   update(indexAtObj, obj) {
      if (updateTriggeredId >= 0) {
         if (indexAtObj !== undefined) {
            items[indexAtObj] = obj;
            localStorage.setItem('Expenses', JSON.stringify(items));
         }
      }

      this.setState(this.state);
      updateTriggeredId = updateTriggeredId === -1 ? indexAtObj : -1;
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
                           <ExpenseItem key={ i } index={ i } expense={ item } delete={ () => this.delete(i) } update={ (i, j) => this.update(i, j) } updateTriggeredId={ updateTriggeredId } />
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
                           <input id="yr-date" type="number" className={ "form-control form-control-sm" } name="amount" value={ this.state.amount } onChange={ (e) => { if (e.target.value >= 0) this.handleChange(e); } } min="0" />
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