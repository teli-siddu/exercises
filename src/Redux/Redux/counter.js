import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {decreaseCount,increaseCount} from './Actions/CounterAction'
import '../redux.css'

const Counter = () => {
const [count,setCount]=useState(0);
const state = useSelector((state)=>state.counter);
const dispatch = useDispatch();
// setCount(useSelector(state=>state)) 



  return (
    <div className="redux-container">
      <div>
        <h1>{state.number}</h1>
      </div>
      <div>
        <button type="button" style={{width:"50px"}} onClick={(e)=>{dispatch(decreaseCount(count))}}>-</button>
        <button type="button" style={{width:"50px"}} onClick={()=>{dispatch(increaseCount(count))}}>+</button>
      </div>
    </div>
  )

}



export default Counter