import React from 'react';
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";

function Incomes(props) {
   const table =
      <table className="table table-sm">
         <thead className="bg-green text-light">
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
                     <td className={item.on_date > new Date().getTime() && 'incoming-income-date'}>{new Intl.DateTimeFormat('tr-TR').format(new Date(item.on_date))}</td>
                     <td>{item.description}</td>
                     <td className="green">{item.amount}TL</td>
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