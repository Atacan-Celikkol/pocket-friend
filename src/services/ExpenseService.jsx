import DateRange from '../models/date-range';
import { getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'Expenses';

export async function GetExpensesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
   const url = getApiUrl(tableName, dateRange, sortBy, sortType);
   return fetch(url).then(res => res.json());
}

export async function DeleteExpenseAsync(id) {
   const url = getApiUrlById(tableName, id);
   return fetch(url, { method: 'delete' }).then(res => res.json());
}


export async function UpdateExpenseAsync(obj, id) {
   const url = getApiUrlById(tableName, id);
   return fetch(url, {
      method: 'put',
      body: JSON.stringify(obj)
   }).then(res => res.json());
}

export async function CreateExpenseAsync(obj) {
   const url = getApiUrlSimple(tableName);
   return fetch(url, {
      method: 'post',
      body: JSON.stringify(obj)
   }).then(res => res.json());
}