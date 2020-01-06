import DateRange from '../models/date-range';
import { FetchAsync, getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'Incomes';
export async function GetIncomesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
    const url = getApiUrl(tableName, dateRange, sortBy, sortType);
    return await FetchAsync(url, 'get');
}

export async function DeleteIncomeAsync(id) {
    const url = getApiUrlById(tableName, id);
    return FetchAsync(url, 'delete');
}


export async function UpdateIncomeAsync(obj, id) {
    const url = getApiUrlById(tableName, id);
    return FetchAsync(url, 'put', obj);
}

export async function CreateIncomeAsync(obj) {
    const url = getApiUrlSimple(tableName);
    return FetchAsync(url, 'post', obj);
}
