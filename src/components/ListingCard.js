import React from "react";
import { useState } from "react";


function ListingCard({ id, description, image, location }) {
  const [star, setStar] = useState(true)

  function handleClick(){
    setStar(!star)
  }

  return (
    <li className="card" key={id}>
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
