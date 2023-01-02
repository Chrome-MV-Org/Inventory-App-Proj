import React from "react";
import {Item} from "./Item"

const ItemsList = ({items,setUpdateItem,updateItem}) =>{
    console.log(items)
    return(
        <>
        {
          
            items.map((item,index)=>{
                return(
                <Item item={item} key={index} setUpdateItem={setUpdateItem} updateItem={updateItem}/>)
            
            })
        }
        </>
    )
}
export default ItemsList;

