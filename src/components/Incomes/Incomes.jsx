import React from 'react';
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "../../assets/react-contextmenu.scss";
import DateRange from '../../models/date-range';
import { getApiUrlById } from '../../services/ApiService';

const table = 'Incomes';
const swal = withReactContent(Swal);

class Incomes extends React.Component {
   constructor (props) {
      super(props);
      this.state = new DateRange();
      this.update = this.update.bind(this);
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
      const table =
         <table className="table table-hover table-sm">
            <thead className="bg-success text-light">
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
               </tr>
            </thead>
            <tbody>
               {
                  this.props.incomes.length > 0 ?
                     this.props.incomes.map((item, i) =>
                        <ContextMenuTrigger renderTag={ 'tr' } id={ 'incomes-context' } key={ item.objectId } collect={ () => item }>
                           <th scope="row">{ i + 1 }</th>
                           <td>{ new Intl.DateTimeFormat('tr-TR').format(new Date(item.on_date)) }</td>
                           <td>{ item.description }</td>
                           <td className="text-success font-weight-bold">{ item.amount }TL</td>
                        </ContextMenuTrigger>
                     ) : '- You have no incomes. 😢'
               }
            </tbody>
         </table>;

      const context =
         <ContextMenu id={ 'incomes-context' }>
            <MenuItem onClick={ (e, data, f) => { console.log(e, data, f); } }><i className="icon-edit mr-1" /> Edit</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={ this.props.delete }><i className="icon-delete mr-1" /> Delete</MenuItem>
         </ContextMenu>;

      return (
         <div>
            { context }
            { this.props.incomes.length > 0 ? table : '- You have no incomes. 😢' }
         </div>
      );
   }
}

export default Incomes;