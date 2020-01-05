import { api_url } from './ApiService';

const tableName = 'users';

export async function LoginAsync(obj) {
   const url = api_url + '/' + tableName + '/login';
   return fetch(url, {
      method: 'post',
      body: JSON.stringify(obj)
   }).then(res => res.json());
}

export async function RegisterAsync(obj) {
   const url = api_url + '/' + tableName + '/register';
   return fetch(url, {
      method: 'post',
      body: JSON.stringify(obj)
   }).then(res => res.json());
}