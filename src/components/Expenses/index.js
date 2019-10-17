import React from 'react';

let items = [];

class Expenses extends React.Component {
   constructor (props) {
      super(props);
      this.state = {
         date: this.getInputDate(),
         text: '',
         amount: 0
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      const expenses = JSON.parse(localStorage.getItem('Expenses'));
      if (expenses) {
         items = expenses;
      }
   }

   getInputDate() {
      return new Date().toISOString().split('T')[0];
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state);
   }

   handleSubmit(event) {
      event.preventDefault();
      items.push(this.state);
      this.setState({
         date: this.getInputDate(),
         text: '',
         amount: 0
      });
      localStorage.setItem('Expenses', JSON.stringify(items));
   }

   render() {
      return (
         <form onSubmit={ this.handleSubmit }>

            <h3 class="text-danger">
               Expenses
            </h3>
            <table class="table table-hover table-bordered">
               <thead class="bg-danger text-light">
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
                        <tr>
                           <th>{ i + 1 }</th>
                           <td>{ new Date(item.date).toDateString() }</td>
                           <td>{ item.text }</td>
                           <td>₺{ item.amount }</td>
                        </tr>
                     )
                  }
               </tbody>
               <tfoot>
                  <tr>
                     <td class="text-center">
                        <button type="submit" class="btn btn-danger btn-block" disabled={ this.state.amount <= 0 || this.state.date === '' || this.state.text.length < 3 }>+</button>
                     </td>
                     <td>
                        <input type="date" class="form-control" name="date" onChange={ this.handleChange } defaultValue={ this.state.date } />
                     </td>
                     <td>
                        <input type="text" class="form-control" name="text" placeholder="Please write a description" value={ this.state.text } onChange={ this.handleChange } />
                     </td>
                     <td>
                        <input id="yr-date" type="number" class="form-control" name="amount" value={ this.state.amount } onChange={ (e) => { if (e.target.value > -1) this.handleChange(e); } } />
                     </td>
                  </tr>
               </tfoot>
            </table>
         </form>
      );
   }
}

export default Expenses;