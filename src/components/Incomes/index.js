import React from 'react';
import { getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from '../../config';
import Income from '../../models/income';
import IncomeItem from './IncomeItem';

let items = [];
const table = 'Incomes';

class Incomes extends React.Component {
   constructor (props) {
      super(props);

      this.state = new Income();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);
   }

   componentDidMount() {
      this.getIncomes();
   }

   getIncomes() {
      fetch(getApiUrl(table, 'on_date', sortTypes.Descending))
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.setState(new Income());
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
      fetch(getApiUrlSimple(table), {
         method: 'post',
         body: JSON.stringify(this.state)
      })
         .then(res => res.json())
         .then((data) => {
            items = data;
            this.getIncomes();
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
               this.getIncomes();
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
            this.getIncomes();
         })
         .catch(console.log)
   }

   render() {
      return (
         <form onSubmit={ this.handleSubmit }>

            <h3 className={ "text-success" }>
               Incomes
            </h3>
            <div className={ 'table-responsive' }>
               <table className={ "table table-hover table-bordered" }>
                  <thead className={ "bg-success text-light" }>
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
                           <IncomeItem key={ i } index={ i } income={ item } delete={ () => this.delete(item.objectId) } update={ (income) => this.update(income) } />
                        )
                     }
                  </tbody>
                  <tfoot>
                     <tr>
                        <td className={ "text-center" }>
                           <button type="submit" className={ "btn btn-success btn-sm btn-block" } disabled={ this.state.amount <= 0 || this.state.on_date === '' || this.state.description.length < 3 }>+</button>
                        </td>
                        <td>
                           <input type="date" className={ "form-control form-control-sm" } name="on_date" onChange={ this.handleChange } defaultValue={ this.state.on_date } />
                        </td>
                        <td>
                           <input type="text" className={ "form-control form-control-sm" } name="description" placeholder="Please write a description" value={ this.state.description } onChange={ this.handleChange } />
                        </td>
                        <td>
                           <input type="number" className={ "form-control form-control-sm" } name="amount" value={ this.state.amount } onChange={ (e) => { if (e.target.value >= 0) this.handleChange(e); } } step="0.01" min="0.01" />
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

export default Incomes;