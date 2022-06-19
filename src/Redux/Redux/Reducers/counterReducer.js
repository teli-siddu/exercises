import { ADD_ONE, MINUS_ONE } from '../Actions/actionTypes';
import initialState from './initialState'

  function CounterReducer(state = initialState.counter, action) {
    console.log(initialState.counter);
    switch(action.type) {
      case ADD_ONE:
        return {
          number: state.number + 1
        };
      case MINUS_ONE:
        return {
          number: state.number - 1
        };
      default:
        return state;
      }
    }
    export default CounterReducer;