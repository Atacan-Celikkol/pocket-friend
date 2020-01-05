import DateRange from '../models/date-range';
import { getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'Incomes';
const userToken = localStorage.getItem('UserToken');

export async function GetIncomesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
    const url = getApiUrl(tableName, dateRange, sortBy, sortType);
    return fetch(url, { headers: { 'user-token': userToken } }).then(res => res.json());
}

export async function DeleteIncomeAsync(id) {
    const url = getApiUrlById(tableName, id);
    return fetch(url, { headers: { 'user-token': userToken }, method: 'delete' }).then(res => res.json());
}


export async function UpdateIncomeAsync(obj, id) {
    const url = getApiUrlById(tableName, id);
    return fetch(url, {
        headers: { 'user-token': userToken },
        method: 'put',
        body: JSON.stringify(obj)
    }).then(res => res.json());
}

export async function CreateIncomeAsync(obj) {
    const url = getApiUrlSimple(tableName);
    return fetch(url, {
        headers: { 'user-token': userToken },
        method: 'post',
        body: JSON.stringify(obj)
    }).then(res => res.json());
}