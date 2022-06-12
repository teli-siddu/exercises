
import { useState } from 'react';
import './dragdrop.css'


const DragDrop = function () {

    let sections = [{
        id: 1,
        section: "sec-1",
    },
    {
        id: 2,
        section: "sec-2",

    },
    {
        id: 3,
        section: "sec-3",

    }
    ]
   const[items,setItems]=useState( [
        { name: "task 1", id: "1",sectionId:1 },
        { name: "task 2", id: "2",sectionId:1 },
        { name: "task 3", id: "3",sectionId:1 },
        { name: "task 4", id: "4",sectionId:2 },
        { name: "task 5", id: "5",sectionId:2 },
        { name: "task 6", id: "6",sectionId:2 },
        { name: "task 7", id: "7",sectionId:2 },
        { name: "task 8", id: "8",sectionId:2 },
        { name: "task 9", id: "9",sectionId:3  },
        { name: "task 10", id: "10",sectionId:3  },
        { name: "task 11", id: "11" ,sectionId:3 },
        { name: "task 12", id: "12",sectionId:3  },
        { name: "task 13", id: "13",sectionId:3  }
    ])
    // let initSections = [
    //     {
    //         id:1,
    //         section: "sec-1",
    //         items: [
    //             { name: "task 1", id: "1",sectionId:1 },
    //             { name: "task 2", id: "2",sectionId:1 },
    //             { name: "task 3", id: "3",sectionId:1 }
    //         ]
    //     },
    //     {
    //         id:2,
    //         section: "sec-2",
    //         items: [
    //             { name: "task 4", id: "4",sectionId:2 },
    //             { name: "task 5", id: "5",sectionId:2 },
    //             { name: "task 6", id: "6",sectionId:2 },
    //             { name: "task 7", id: "7",sectionId:2 },
    //             { name: "task 8", id: "8",sectionId:2 }
    //         ]
    //     },
    //     {
    //         id:3,
    //         section: "sec-3",
    //         items: [
    //             { name: "task 9", id: "9",sectionId:3  },
    //             { name: "task 10", id: "10",sectionId:3  },
    //             { name: "task 11", id: "11" ,sectionId:3 },
    //             { name: "task 12", id: "12",sectionId:3  },
    //             { name: "task 13", id: "13",sectionId:3  }
    //         ]
    //     }
    // ]


    // const Drag = function (props) {

    //     function startDrag(e, id) {
    //         e.dataTransfer.setData("itemId", id);

    //     }
    //     return (

    //         <>
    //             {

    //                 items.filter(x => x.group === "g1").map((task) => {
    //                     return (
    //                         <div draggable onDragStart={(e) => startDrag(e, task.name)}>
    //                             <div className='task'> {task.name} </div>
    //                         </div>
    //                     )
    //                 })


    //             }
    //         </>



    //     );
    // }
    // const Drop = function (props) {

    //     function dropHandler(e) {
    //         e.preventDefault();
    //         console.log("drop handler");
    //         let id=e.dataTransfer.getData("itemId");
    //         var xxx=items.map((item)=>{
    //             if(item.group===id){
    //                 return {...item,status:1}
    //             }
    //             return item;
    //         })
    //         setItems(xxx);
    //         console.log();

    //     }
    //     function dropOverHandler(e) {
    //         e.preventDefault()
    //         console.log("drop over handler")

    //     }
    //     return (
    //         <div style={{ height: "inherit" }} onDrop={(e) => dropHandler(e)} onDragOver={(e) => dropOverHandler(e)}>
    //             {
    //                 items.filter(x => x.status == 1).map((task) => {
    //                     return <div className='task'> {task.name} </div>
    //                 })
    //             }
    //         </div>

    //     )
    // }

    function dropHandler(e,target) {
     
        e.preventDefault();
        console.log("drop handler");
        let id=e.dataTransfer.getData("itemId");
        
         setItems([...items, (items[id - 1].sectionId = target)]);
      
    }
    function dropOverHandler(e) {
        e.preventDefault()
        console.log("drop over handler")

    }

    function startDrag(e, id) {
        e.dataTransfer.setData("itemId", id);
        console.log(id);
    }

    return (
        <div className='dragdrop-container'>

            {
                sections.map((section) => {
                    return (
                        <div className='section' onDrop={(e)=>dropHandler(e,section.id)} onDragOver={(e) => dropOverHandler(e)}>
                            {
                                items && items.filter(x=>x.sectionId==section.id).map((item) => {
                                    return (
                                        <div key={item.id}  className='item' draggable onDragStart={(e) => startDrag(e, item.id) } >
                                                {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            {/* <div className='drag-box' >
                <Drag />
            </div>
            <div className='drop-box'>
                <Drop />
            </div> */}
        </div>
    )
}

export default DragDrop;