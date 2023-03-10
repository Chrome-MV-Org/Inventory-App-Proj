import React,{useState} from 'react';

import apiURL from '../api';

import { UpdForm } from './UpdForm';


export const Item = (props) => {
  const [item, setItem] = useState(undefined)
  const handleClick = async()=>{
    //console.log('it works')
    const res = await fetch(`${apiURL}/items/${props.item.id}`)
    //console.log(props)
    const data = await res.json();
    setItem(data);
    console.log(item)
    
  }
  const handleDelete = async()=>{
    const res = await fetch(`${apiURL}/items/${props.item.id}`,
    {method : "DELETE"}
    )
    
    const data = await res.json();
    setItem(null);

  }
  return <>
  
    <h3>{props.item.title}</h3>
    
    {
      item &&
      <div>
        <h4>{`Description: ${item.description}`}</h4>
        <h4>{`Price: ${item.price}`}</h4>
      </div>

    }
    {item &&
      <div><button onClick={handleDelete}>
      DELETE ITEM
    </button>
    <button onClick={() => props.setUpdateItem(!props.updateItem)}>EDIT ITEM</button></div>}
    {props.updateItem ? <UpdForm item={props.item}/>: null}
    <img src={props.item.image} alt={props.item.title} onClick={handleClick}/>
  </>
} 