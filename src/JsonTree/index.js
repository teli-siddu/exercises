import { useState } from "react"
import './jsontree.css'
const menuItems=[
    {
        Title:"Menu 1",
        Children:[
            {
                Title:"Menu 5",
                Children:[
                    {
                        Title:"Menu 12",
                        Children:[]
                    },
                    {
                        Title:"Menu 13",
                        Children:[]
             
                    },
                    {
                        Title:"Menu 14",
                        Children:[]
             
                    }
                ]
     
            },
            {
                Title:"Menu 6",
                Children:[
                    {
                        Title:"Menu 15",
                        Children:[]
                    },
                    {
                        Title:"Menu 16",
                        Children:[]
                    },
                    {
                        Title:"Menu 17",
                        Children:[]
                    }
                ]
     
            },
            {
                Title:"Menu 7",
                Children:[]
            }
        ]
    },
    {
        Title:"Menu 2",
        Children:[
            {
                Title:"Menu 8",
                Children:[]
            },
            {
                Title:"Menu 9",
                Children:[]
            },
            {
                Title:"Menu 10",
                Children:[]
            }
        ]
    },
    {
        Title:"Menu 3",
        Children:[
            {
                Title:"Menu 11",
                Children:[
                    {
                        Title:"Menu 20",
                        Children:[]
                    },
                    {
                        Title:"Menu 21",
                        Children:[]
                    },
                    {
                        Title:"Menu 22",
             
                    }
                ]
            },
            {
                Title:"Menu 12",
     
            },
            {
                Title:"Menu 13",
     
            }
        ]
    },
    {
        Title:"Menu 4"
    }
]



const RecursiveComponent = (props) => {
    let [activeMenu,setActiveMenu]=useState(false)
    const handleClick=()=>{
        setActiveMenu(
            activeMenu=!activeMenu
        )
    }
    console.log(props)
    const {menuitem,idx}=props;
    let title=menuitem.Title
    let childMenuItems=(menuitem.Children || []).map((menuItema,idxa)=>{
        return (
            <RecursiveComponent idx={`${idx}_${idxa}`} menuitem={menuItema} />
        )
    })
    return(
        <div>
            <div  className="nav-item  bg-primary" onClick={()=>handleClick()} >{menuitem.Title} {(!menuitem.Children || menuitem.Children.length==0)?"": activeMenu?<span className='toggle-icon'>-</span>:<span className='toggle-icon'>+</span>}</div>
            {
                 activeMenu && <div className="nav-sub-items"  style= {{paddingLeft:"10px" }} >{childMenuItems}</div>
            }
        </div>
    )
}



const MenuTree=()=>{
    
    return(
       <div className="menu-tree-container container">
           {
               menuItems.map((menuItem,idx)=>{
                   console.log(idx)
                   return <RecursiveComponent idx={idx}  menuitem={menuItem} />
               })
              
            }
       </div>
    )
  
}

export default MenuTree;