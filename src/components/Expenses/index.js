import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { getApiUrl, getApiUrlById, sortTypes } from '../../config';
import DateRange from '../../models/date-range';
import ExpenseCreate from './ExpenseCreate';
import ExpenseItem from './ExpenseItem';

let items = [];
const table = 'Expenses';

class Expenses extends React.Component {
   constructor (props) {
      super(props);

      this.state = new DateRange();

      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);
      this.getExpenses = this.getExpenses.bind(this);
   }

   componentDidMount() {
      this.getExpenses();
   }

   getExpenses() {
      fetch(getApiUrl(table, this.state, 'on_date', sortTypes.Descending))
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.setState(this.state);
         })
         .catch(console.log)
   }

   delete(id) {
      if (window.confirm("Are you sure ?")) {
         fetch(getApiUrlById(table, id), {
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
      fetch(getApiUrlById(table, obj.objectId), {
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
         <div>
            <div className={ 'd-flex' }>
               <h3 className={ "text-danger" }>Expenses</h3>
               <div className={ 'w-100' }>
                  <div className={ 'float-right' }>
                     <DateRangePicker
                        startDate={ this.state.startDate } // momentPropTypes.momentObj or null,
                        startDateId="expense_startDate_id" // PropTypes.string.isRequired,
                        endDate={ this.state.endDate } // momentPropTypes.momentObj or null,
                        endDateId="expense_endDate_id" // PropTypes.string.isRequired,
                        onDatesChange={ ({ startDate, endDate }) => this.setState({ startDate, endDate }) } // PropTypes.func.isRequired,
                        focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={ focusedInput => this.setState({ focusedInput }) } // PropTypes.func.isRequired,
                        isOutsideRange={ () => false }                        
                        small={() => true}
                        withPortal={() => true}
                        numberOfMonths={1}
                        onClose={ () => setTimeout(() => this.getExpenses(), 100) }
                     />
                  </div>
               </div>
            </div>

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
                     <ExpenseCreate getExpenses={ this.getExpenses } />
                  </tfoot>
               </table>
            </div>
         </div>
      );
   }
}

export default Expenses;