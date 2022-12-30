import React,{useState} from 'react';
import apiURL from '../api';


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
  return <>
  
    <h3 onClick={handleClick}>{props.item.title}</h3>
    
    {
      item &&
      <div>
        <h4>{`Description: ${item.description}`}</h4>
        <h4>{`Price: ${item.price}`}</h4>
      </div>

    }
    <img src={props.item.image} alt={props.item.title} />
  </>
} 