import DateRange from '../models/date-range';
import { FetchAsync, getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'Expenses';
export async function GetExpensesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
    const url = getApiUrl(tableName, dateRange, sortBy, sortType);
    return await FetchAsync(url, 'get');
}

export async function DeleteExpenseAsync(id) {
    const url = getApiUrlById(tableName, id);
    return FetchAsync(url, 'delete');
}


export async function UpdateExpenseAsync(obj, id) {
    const url = getApiUrlById(tableName, id);
    return FetchAsync(url, 'put', obj);
}

export async function CreateExpenseAsync(obj) {
    const url = getApiUrlSimple(tableName);
    return FetchAsync(url, 'post', obj);
}
