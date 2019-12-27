import DateRange from '../models/date-range';
import { getApiUrl, getApiUrlById, getApiUrlSimple, sortTypes } from './ApiService';

const tableName = 'Incomes'

// export class IncomeService {
//     getIncomesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
//         const url = getApiUrl(tableName, dateRange, sortBy, sortType);
//         return fetch(url).then(res => res.json());
//     }

//     deleteIncomeAsync(id) {
//         const url = getApiUrlById(tableName, id);
//         return fetch(url, { method: 'delete' }).then(res => res.json());
//     }


//     updateIncomeAsync(obj, id) {
//         const url = getApiUrlById(tableName, id);
//         return fetch(url, {
//             method: 'put',
//             body: JSON.stringify(obj)
//         }).then(res => res.json())
//     }

//     createIncomeAsync(obj) {
//         const url = getApiUrlSimple(tableName);
//         return fetch(url, {
//             method: 'post',
//             body: JSON.stringify(obj)
//         }).then(res => res.json())
//     }
// }

// export default IncomeService;

export async function GetIncomesAsync(dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
    const url = getApiUrl(tableName, dateRange, sortBy, sortType);
    return fetch(url).then(res => res.json());
}

export async function DeleteIncomeAsync(id) {
    const url = getApiUrlById(tableName, id);
    return fetch(url, { method: 'delete' }).then(res => res.json());
}


export async function UpdateIncomeAsync(obj, id) {
    const url = getApiUrlById(tableName, id);
    return fetch(url, {
        method: 'put',
        body: JSON.stringify(obj)
    }).then(res => res.json())
}

export async function CreateIncomeAsync(obj) {
    const url = getApiUrlSimple(tableName);
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(obj)
    }).then(res => res.json())
}