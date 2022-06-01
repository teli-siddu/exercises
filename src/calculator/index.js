import React, { useEffect, useState } from 'react'
import './calculator.css'
import CalcScreen from '../calculator/components/CalcScreen'
const Calculator = () => {

  useEffect(()=>{
    console.log(calc)
  })
let [calc,setCalc]=useState({
  sign:"",
  prev:"",
  prevText:"",
  num:'',
  res:0
});
const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
const ops=["+","-","*","/","%",'.']
const btnValues=[
  ["C", "⌫", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const math=(a,b,sign)=>{
  a=Number(a);
  b=Number(b);
  return(
    sign==="+"
    ? a+b
    :sign==="-"
    ?a-b
    :sign==="*"
    ?a*b
    :a/b
  );
}
  const clickHandler=(e)=>{
  
  e.preventDefault();
  const value=e.target.innerHTML;
   if((ops.includes(value) && calc.num==="" )||
     (ops.includes(value) && ops.includes(calc.num.slice(-1))) || (value==="." && calc.prev.includes("."))
     ){
      return; 
     }
     
   
  if(calc.num.toString().length<16){
    setCalc({
      ...calc,
       num:calc.num+value,
       prev:ops.includes(value) && value!=="."?'':calc.prev+value,
       sign:value,
       res: !ops.includes(value) ?eval((calc.num+value).toString()).toString():calc.res,
    })
    
  }
};
const deleteClickHandler=(e)=>{

  let evalVal=calc.num.slice(0,-1);
  let value='';
  if(evalVal===''){
    value='0';
  }
  else if(ops.includes(evalVal.slice(-1))){
      value=eval(evalVal.slice(0,-1)).toString()
  }
  else{
    value=eval(evalVal).toString()
  }
  setCalc({
    ...calc,
    num: calc.num.slice(0,-1),
    res:value
  });

};
const resetClickHandler=(e)=>{
  setCalc({
    ...calc,
    num: '',
    res: 0,
  });

};
const equalsClickHandler=(e)=>{
  setCalc({
    ...calc,
    sign:"="
  });

};


  return (
    <div className='calculator-container'>
      <CalcScreen calc={calc} />
     
      <div className='digits-operators'>
      {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={
                  btn === "C"
                  ? resetClickHandler
                  :btn==="⌫"
                  ?deleteClickHandler
                  :btn==="="
                  ?equalsClickHandler
                  : clickHandler
                  
                }
              />
            );
          })
        }
      </div>
      </div>
  
  )
}

export default Calculator