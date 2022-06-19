import {ADD_ONE,MINUS_ONE} from './actionTypes'

export const increaseCount=(count)=>({
    type:ADD_ONE,
    payload:{
        counter:count+1
    }
})
export const decreaseCount=(count)=>({
    type:MINUS_ONE,
    payload:{
        count:count-1
    }
})
