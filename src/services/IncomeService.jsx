import DateRange from '../models/date-range';
import { getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'incomes'

export async function GetIncomesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
    const url = getApiUrl(tableName, dateRange, sortBy, sortType);
    fetch(url)
        .then(res => res.json())
        .then((data) => { return data; })
        .catch(console.log)
}

export async function DeleteIncomeAsync(id) {
    const url = getApiUrlById(tableName, id);

    fetch(url, { method: 'delete' })
        .then(res => res.json())
        .then((data) => { return data; })
        .catch(console.log);
}


export async function UpdateIncomeAsync(obj, id) {
    const url = getApiUrlById(tableName, id);
    fetch(url, {
        method: 'put',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(console.log);
}

export async function CreateIncomeAsync(obj) {
    fetch(getApiUrlSimple(tableName), {
        method: 'post',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(console.log)
}