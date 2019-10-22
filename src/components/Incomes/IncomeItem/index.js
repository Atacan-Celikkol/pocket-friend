import React from 'react';

class IncomeItem extends React.Component {
   constructor(props) {
      super(props);
      this.update = this.update.bind(this);
   }

   update = (event) => {
      debugger;
      window.alert("update event triggered");
   }

   render() {
      return (
         <tr>
            <th>{this.props.index + 1}</th>
            <td>{new Date(this.props.income.date).toDateString()}</td>
            <td>{this.props.income.text}</td>
            <td>₺{this.props.income.amount}</td>

            <td>
               <div className={"btn-group btn-group-sm d-flex"}>
                  <button type="button" className={"btn btn-warning"} onClick={(e) => { this.update(e); }}>Update</button>
                  <button type="button" className={"btn btn-danger"} onClick={(e) => { this.props.delete(); }}>Delete</button>
               </div>
            </td>
         </tr>
      );
   }
}

export default IncomeItem;