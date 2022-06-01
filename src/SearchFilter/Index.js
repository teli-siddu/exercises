import React, { useState } from 'react'
import './searchfilter.css'
const SearchFilter = () => {


    const handleChange=(e)=>{
        let value=e.target.value;
        console.log(value)
        if(value===''){
             setFilterList(list);
             return
        }
        const filterValues=list.filter((val)=>{
            return (
                val.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            )
        })
        setFilterList(filterValues)
    }
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
    const [filterList,setFilterList]=useState(list);

  return (

    <div className='searchfilter-container'>
        <div>
            Search: <input type="text" id="searchbox"  onChange={handleChange}  /> 
        </div>
        <div className='item-list'>
            {
                filterList&&filterList.map((val,idx)=>{
                    return(
                        <div key={idx}>{val}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SearchFilter