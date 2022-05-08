import React from "react";
// import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import ListingCard from "./ListingCard";



function ListingsContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then( res => {
      setItems(res)
    })
  }, [])

  const itemToPost = items.map(item => (
    <ListingCard id = {item.id}
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
