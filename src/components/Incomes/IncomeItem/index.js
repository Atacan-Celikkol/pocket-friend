import React from 'react';

class IncomeItem extends React.Component {
   render() {
      return (
         <tr>
            <th>{ this.props.index + 1 }</th>
            <td>{ new Date(this.props.income.date).toDateString() }</td>
            <td>{ this.props.income.text }</td>
            <td>₺{ this.props.income.amount }</td>
         </tr>
      );
   }
}

export default IncomeItem;