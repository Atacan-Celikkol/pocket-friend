import React from 'react';
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import "../../assets/react-contextmenu.scss";

function Incomes(props) {
   const table =
      <table className="table table-sm">
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
               props.incomes.map((item, i) =>
                  <ContextMenuTrigger renderTag={'tr'} id={'incomes-context'} key={item.objectId} collect={() => item}>
                     <th scope="row">{i + 1}</th>
                     <td>{new Intl.DateTimeFormat('tr-TR').format(new Date(item.on_date))}</td>
                     <td>{item.description}</td>
                     <td className="text-success font-weight-bold">{item.amount}TL</td>
                  </ContextMenuTrigger>
               )
            }
         </tbody>
      </table>;

   const context =
      <ContextMenu id={'incomes-context'}>
         <MenuItem onClick={props.update}><i className="icon-edit mr-1" /> Edit</MenuItem>
         <MenuItem divider />
         <MenuItem onClick={props.delete}><i className="icon-delete mr-1" /> Delete</MenuItem>
      </ContextMenu>;

   return (
      <div>
         {context}
         {table}
      </div>
   );
}

export default Incomes;