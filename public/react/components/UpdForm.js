import React, { useState } from "react";
import apiURL from "../api";

export const UpdForm = (props) => {
    const [title, setTitle] = useState(props.item.title);
    const [price, setPrice] = useState(props.item.price);
    const [description, setDescription] = useState(props.item.description);
    const [image, setImage] = useState(props.item.image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)
        const response = await fetch(`${apiURL}/items/${props.item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, price, description, image }),
                }
                );
                const data = await response.json();
                console.log(data);
                // props.setUpdateItem(!props.updateItem);
                }
    
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type='text' name="title"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                ></input>
                <br />
                <input type='text' name="price" placeholder="price"
                    value={price} onChange={(e) => setPrice(e.target.value)}
                ></input>
                <br />
                <input type='text' name="description" placeholder="description"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                ></input>
                <br />
                <input type='text' name="image" placeholder="image"
                    value={image} onChange={(e) => setImage(e.target.value)}
                ></input>
                <br />
                <button type="Submit">Update Item</button>
            </form>
        </>
    )
    }

