import React from 'react'

const CalcScreen = ({calc}) => {
  const {num,res,sign,prev}=calc;
  return (
    <div className='calc-screen'>
     <div className='output'>
          <div className={`input-operands ${sign!=="="?"large":""}`}>
           {num}
          </div>
          {/* <br /> */}
          <div className={`input-result ${sign==="="?"large":""}`}>
              <div className={`input-digits` } > {res && res>0?'= '+res:res}</div>        
          </div>
      </div>

    </div>
  )
}

export default CalcScreen