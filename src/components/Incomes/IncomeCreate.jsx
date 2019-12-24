import React from 'react';
import Income from '../../models/income';
import { getApiUrlSimple } from '../../services/ApiService';

const table = 'Incomes';
class IncomeCreate extends React.Component {
   constructor (props) {
      super(props);

      this.state = new Income();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
            this.setState(new Income());
            this.props.getIncomes();
         })
         .catch(console.log)
   }

   render() {
      return (
         <tr>
            <td className={ "text-center" }>
               <button type="submit" className={ "btn btn-success btn-sm btn-block" } onClick={ this.handleSubmit } disabled={ this.state.amount <= 0 || this.state.on_date === '' || this.state.description.length < 3 }>+</button>
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
      )
   }
}

export default IncomeCreate;