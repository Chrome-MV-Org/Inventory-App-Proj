import React from "react";
import {Item} from "./Item"

const ItemsList = ({items}) =>{
    console.log(items)
    return(
        <>
        {
          
            items.map((item,index)=>{
                return(
                <Item item={item} key={index}/>)
            })
        }
        </>
    )
}
export default ItemsList;

