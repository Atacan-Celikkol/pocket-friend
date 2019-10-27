import React from 'react';
import Income from '../../models/income';
import IncomeItem from './IncomeItem';

let items = [];
let updateTriggeredId = -1;

class Incomes extends React.Component {
   constructor(props) {
      super(props);

      this.state = new Income();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.delete = this.delete.bind(this);
      this.update = this.update.bind(this);

      const incomes = JSON.parse(localStorage.getItem('Incomes'));
      if (incomes) {
         items = incomes;
      }
   }

   handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      items.push(this.state);
      this.setState(new Income());
      localStorage.setItem('Incomes', JSON.stringify(items));
   }

   delete(id) {
      if (window.confirm("Are you sure ?")) {
         items = items.filter(x => items.indexOf(x) !== id);
         this.setState(this.state);
         localStorage.setItem('Incomes', JSON.stringify(items));
      }
   }

    update(indexAtObj, obj) {
        if (updateTriggeredId >= 0) {
            if (indexAtObj !== undefined) {
                items[indexAtObj] = obj;
                localStorage.setItem('Incomes', JSON.stringify(items));
            }
        }
    
    this.setState(this.state);
    updateTriggeredId = updateTriggeredId === -1 ? indexAtObj : -1;
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>

            <h3 className={"text-success"}>
               Incomes
            </h3>
            <div className={'table-responsive'}>
               <table className={"table table-hover table-bordered"}>
                  <thead className={"bg-success text-light"}>
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
                           <IncomeItem key={i} index={i} income={item} delete={() => this.delete(i)} update={(i,j) => this.update(i,j)} updateTriggeredId={updateTriggeredId} />
                        )
                     }
                  </tbody>
                  <tfoot>
                     <tr>
                        <td className={"text-center"}>
                           <button type="submit" className={"btn btn-success btn-sm btn-block"} disabled={this.state.amount <= 0 || this.state.date === '' || this.state.text.length < 3}>+</button>
                        </td>
                        <td>
                           <input type="date" className={"form-control form-control-sm"} name="date" onChange={this.handleChange} defaultValue={this.state.date} />
                        </td>
                        <td>
                           <input type="text" className={"form-control form-control-sm"} name="text" placeholder="Please write a description" value={this.state.text} onChange={this.handleChange} />
                        </td>
                        <td>
                           <input id="yr-date" type="number" className={"form-control form-control-sm"} name="amount" value={this.state.amount} onChange={(e) => { if (e.target.value >= 0) this.handleChange(e); }} min="0" />
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