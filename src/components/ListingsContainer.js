import React from "react";
import { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filterWiths, handleDelete }) {
  const [items, setItems] = useState([])
  console.log(`Filter Width : ${ filterWiths }`)
  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then(res => res.json())
    .then( res => {
      setItems(res)
    })
  }, [])

  const filteredItems = items.filter(data => {
    if(filterWiths === "all"){
      return true
    } else {
      return data.description.toLowerCase().search(filterWiths) >= 0
    }
  })

  const itemToPost = filteredItems.map(item => (
    <ListingCard 
      handleDelete = { handleDelete }
      id = {item.id}
      key = {item.id}
      description = {item.description} 
      image = {item.image} 
      location = {item.location} 
    />
  ))

  return (
    <main>
      <ul className="cards">
        {itemToPost}
      </ul>
    </main>
  );
}

export default ListingsContainer;
