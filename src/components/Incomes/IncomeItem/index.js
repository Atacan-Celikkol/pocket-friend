import React from 'react';

class IncomeItem extends React.Component {
   constructor (props) {
      super(props);

      this.update = this.update.bind(this);
      this.delete = this.delete.bind(this);


   }

   update = (event) => {
      debugger;
      window.alert("update event triggered");
   }

   delete = (id) => {
      if(window.confirm("Are you sure ?"))
      {
         let items = [];
         const incomes = JSON.parse(localStorage.getItem('Incomes'));
         if (incomes) {
            items = incomes;
            items = items.filter(x => items.indexOf(x) !== id);
         }
         
         localStorage.removeItem('Incomes');
         localStorage.setItem('Incomes', JSON.stringify(items));

         window.location.reload();
      }
   }


   render() {
      return (
         <tr>
            <th>{ this.props.index + 1 }</th>
            <td>{ new Date(this.props.income.date).toDateString() }</td>
            <td>{ this.props.income.text }</td>
            <td>₺{ this.props.income.amount }</td>

            <td>
            <button type="button" className={ "btn btn-primary btn-sm btn-block" } onClick={ (e) => {if (e.target.value >= 0) this.update(e); }}>Update</button>
            <button type="button" className={ "btn btn-primary btn-sm btn-block" } onClick={ (e) => {if (e.target.value >= 0) this.delete(this.props.index); }}>Delete</button>
            </td>
         </tr>
      );
   }
}

export default IncomeItem;