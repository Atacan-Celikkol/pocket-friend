import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateRange from '../../models/date-range';
import { getApiUrlById } from '../../services/ApiService';
import ExpenseItem from './ExpenseItem';

const table = 'Expenses';
class Expenses extends React.Component {
   constructor (props) {
      super(props);

      this.state = new DateRange();

      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);
   }

   delete(id) {
      if (window.confirm("Are you sure ?")) {
         fetch(getApiUrlById(table, id), {
            method: 'delete'
         })
            .then(res => res.json())
            .then((data) => {
               this.props.expenses = data;
               this.getExpenses();
            })
            .catch(console.log);
      }
   }

   update(obj) {
      fetch(getApiUrlById(table, obj.objectId), {
         method: 'put',
         body: JSON.stringify(obj)
      })
         .then(res => res.json())
         .then((data) => {
            this.props.expenses = data;
            this.getExpenses();
         })
         .catch(console.log);
   }

   render() {
      return (
         <div>
            <div>
               {
                  this.props.expenses.length > 0 ?
                     this.props.expenses.map((item, i) =>
                        <ExpenseItem key={ i } index={ i } expense={ item } delete={ () => this.delete(item.objectId) } update={ (expense) => this.update(expense) } />
                     ) : '- You have no expenses! 😁'
               }
               {/* <ExpenseCreate getExpenses={ this.getExpenses } /> */ }
            </div>
         </div>
      );
   }
}

export default Expenses;