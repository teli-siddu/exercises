import {handleResponse,handleError} from './apiUtil'

const url='https://my-json-server.typicode.com/teli-siddu/JsonServer/employees';

export function getEmployees(){
   return fetch(url)
   .then(handleResponse)
   .catch(handleError)
}