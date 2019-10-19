import React from 'react';

class ExpenseItem extends React.Component {
   render() {
      return (
         <tr>
            <th>{ this.props.index + 1 }</th>
            <td>{ new Date(this.props.expense.date).toDateString() }</td>
            <td>{ this.props.expense.text }</td>
            <td>₺{ this.props.expense.amount }</td>
         </tr>
      );
   }
}

export default ExpenseItem;