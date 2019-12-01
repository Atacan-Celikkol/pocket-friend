import DateRange from "./models/date-range";

const api_base_url = 'https://api.backendless.com/';
const api_key = '1FF6847A-E791-15A3-FFEE-DDFB60C31600';
const api_app_key = 'F1C73522-DD64-3A93-FF4E-67CBDEDCDF00';
const api_data_url = `${api_base_url}${api_key}/${api_app_key}/data/`;

export const sortTypes = {
   Ascending: ' asc',
   Descending: ' desc'
}

export function getApiUrlSimple(tableName, query = null) {
   return query ? `${api_data_url + tableName}?${query}` : api_data_url + tableName;
}

export function getApiUrl(tableName, dateRange = new DateRange(), sortBy, sortType = sortTypes.Ascending) {
   return `${api_data_url + tableName}?pageSize=100&sortBy=${sortBy + sortType}&where=on_date>=${dateRange.startDate.valueOf()}%26%26on_date<=${dateRange.endDate.valueOf()}`;
}

export function getApiUrlById(tableName, id) {
   return `${api_data_url + tableName}/${id}`;
}