import React, {useState} from "react";
import apiURL from "../api";



export const Form = () =>{
    const [title,setTitle]= useState('');
    const [price,setPrice]= useState('');
    const [description,setDescription]= useState('');
    const [category,setCategory]= useState('');
    const [image,setImage]= useState(''); 

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const newItem = {
            title: title,
            category: category,
            price: price,
            image: image, 
            description: description
        }
        const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                newItem
            )
        }
        );
        const data = await response.json();
        setTitle("")
        setPrice("")
        setDescription("")
        setCategory("")
        setImage("")

    }
    
  return (
    <>
    <h1> Thanks Hugo </h1>
    <form onSubmit={handleSubmit}>
    <input type='text'name="title" placeholder="title"
    value={title} onChange={(e) => setTitle(e.target.value)}
    ></input> 
    <br/>
    <input type='text'name="price" placeholder="price"
    value={price} onChange={(e) => setPrice(e.target.value)}
    ></input> 
    <br/>
    <input type='text'name="description" placeholder="description"
    value={description} onChange={(e) => setDescription(e.target.value)}
    ></input> 
    <br/>
    <input type='text'name="category" placeholder="category"
    value={category} onChange={(e) => setCategory(e.target.value)}
    ></input> 
    <br/>
    <input type='text'name="image" placeholder="image"
    value={image} onChange={(e) => setImage(e.target.value)}
    ></input> 
    <br/>
    <button type="Submit">Add Item</button>
    </form>
    </>
  )

}