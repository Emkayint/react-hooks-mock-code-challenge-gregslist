import React from "react";
import { useState } from "react";


function ListingCard({description, image, location, id }) {
  // console.log(id)
  const [star, setStar] = useState(true)
  const [attr, setAttr] = useState('card')


  function handleClick(){
    setStar(!star)
  }

  function handleDelete(){
    setAttr("card none")
    fetch(`http://localhost:3000/listings/${id}`, {
      method : "DELETE"
    })
  }

  return (
    <li className={attr}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <div onClick={ handleClick }>
          { star ? (
            <button className="emoji-button favorite active">★</button>
          ) : (
            <button className="emoji-button favorite">☆</button>
          )}
        </div>
        <strong>{description}</strong>
        <span> · { location }</span>
        <button className="emoji-button delete" onClick={ handleDelete }>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
