import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing, search }) {

  const filteredList = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  
  const card = filteredList.map(listing => (
    <ListingCard 
      key={listing.id}
      listing={listing}
      onDeleteListing = {onDeleteListing} 
    />
  ))



  return (
    <main> 
      <ul className="cards">
        {card}
      </ul>
    </main>
  );
}

export default ListingsContainer;
