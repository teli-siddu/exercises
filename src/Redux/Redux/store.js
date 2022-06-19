import { createStore } from 'redux';
import reducer from './Reducers';
const store = createStore(reducer);
store.subscribe(()=>{
    console.log("store",store);
    console.log("store state",store.getState().counter);
 });
export default store;