
import { useState, useRef, useEffect } from 'react';
import './dragdrop.css'


const DragDrop = function () {

    const [enableCopy, setEnableCopy] = useState(false);
    const [copyItem, setCopyItem] = useState({})
    useEffect(() => {
        console.log(items);
    })
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

    },
    {
        id: 4,
        section: "sec-4",

    }
    ]

    const [items, setItems] = useState([
        { name: "task 1", id: "1", sectionId: 1, order: 1 },
        { name: "task 2", id: "2", sectionId: 1, order: 2 },
        { name: "task 3", id: "3", sectionId: 1, order: 3 },
        { name: "task 4", id: "4", sectionId: 2, order: 4 },
        { name: "task 5", id: "5", sectionId: 2, order: 5 },
        { name: "task 6", id: "6", sectionId: 2, order: 6 },
        { name: "task 7", id: "7", sectionId: 2, order: 7 },
        { name: "task 8", id: "8", sectionId: 2, order: 8 },
        { name: "task 9", id: "9", sectionId: 3, order: 9 },
        { name: "task 10", id: "10", sectionId: 3, order: 10 },
        { name: "task 11", id: "11", sectionId: 3, order: 11 },
        { name: "task 12", id: "12", sectionId: 3, order: 12 },
        { name: "task 13", id: "13", sectionId: 3, order: 13 },
        { name: "task 14", id: "14", sectionId: 4, order: 13 }
    ])

    function dropHandler(e, target) {

        e.preventDefault();

        console.log(e);

        let id = e.dataTransfer.getData("itemId");
        let selectedItems = items.filter(x => x.id == id);
      
        if (enableCopy) {
            let existincurrentSection = selectedItems.filter(x => x.sectionId == target).length > 0
            if (!existincurrentSection) {
                if (selectedItems[0].sectionId !== target) {
                    var newObj = Object.assign({}, selectedItems[0]);
                    newObj.sectionId = target;
                    setItems([...items, newObj])
                }

            }



        }
        else {
            let itemExist = selectedItems.filter(x => x.sectionId === target).length > 0;
            if (!itemExist) {
                let newItems = items.map((item, index) => {
                    return (
                        id == (index + 1)
                            ? { ...item, sectionId: target }
                            : { ...item }
                    )
                })
                setItems(newItems);
            }

        }

        // console.log(newItems);


    }
    function dropOverHandler(e) {
        e.preventDefault()
        console.log("drop over handler")

    }

    function startDrag(e, id, index) {

        e.dataTransfer.setData("itemId", id);

        console.log("start  drag");
        console.log(e);
    }
    return (
        <>
        <div className='drag-options'>
        <div className='drag-type'>
                <label htmlFor='chk_dragtype'>
                    <input type="checkbox" id='chk_dragtype' onChange={(e) => setEnableCopy(!enableCopy)} /> Enable copy
                </label>
            </div>
        </div>
            

            <div className='dragdrop-container'>


                {
                    sections.map((section) => {
                        return (
                            <div className='section' onDrop={(e) => dropHandler(e, section.id)} onDragOver={(e) => dropOverHandler(e)}>
                                {
                                    items && items.filter(x => x.sectionId == section.id).map((item, index) => {
                                        return (
                                            <div key={index} className='item' draggable onDragStart={(e) => startDrag(e, item.id, item.order)} >
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
        </>
    )

}

export default DragDrop;