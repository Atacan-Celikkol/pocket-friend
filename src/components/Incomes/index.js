import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { getApiUrlById } from '../../config';
import DateRange from '../../models/date-range';
import IncomeItem from './IncomeItem';

let totalIncomes = 0;
const table = 'Incomes';

class Incomes extends React.Component {
   constructor(props) {
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
               this.props.incomes = data;
               this.getIncomes();
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
            this.props.incomes = data;
            this.getIncomes();
         })
         .catch(console.log);
   }

   render() {
      return (
         <div>
            <div className={'d-flex'}>
               <h3 className={"text-success"}>Incomes</h3>
            </div>

            <div>
               {
                  this.props.incomes.length > 0 ?
                  this.props.incomes.map((item, i) =>
                     <IncomeItem key={i} index={i} income={item} delete={() => this.delete(item.objectId)} update={(income) => this.update(income)} />
                  ) : '- You have no incomes. 😢'
               }
               {/* <IncomeCreate getIncomes={ this.getIncomes } /> */}
            </div>
         </div>
      );
   }
}

export default Incomes;