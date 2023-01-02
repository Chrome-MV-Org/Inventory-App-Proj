import React, { useState, useEffect } from 'react';
import ItemsList from './ItemsList';
import {Form} from './Form';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	
	const [items, setItems] = useState([]);
	const [updateItem, setUpdateItem] = useState(false)


	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			console.log(itemsData)
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);
console.log(updateItem);
	return (
		<main>	
      <h1>Store</h1>
	  <Form/>
			<h2>All things 🔥</h2>
			{items.length>0 ? <ItemsList setUpdateItem={setUpdateItem} updateItem={updateItem} items={items} /> : ""}
		
		</main>
	)
}