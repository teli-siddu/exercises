import * as apiCall from './actionTypes'

export function beginApiCall(){

    return {type:apiCall.BEGIN_API_CALL}
    
}
export function apiCallError(){
    return {type:apiCall.API_CALL_ERROR}
}