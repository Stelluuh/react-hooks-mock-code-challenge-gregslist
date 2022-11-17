import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(listingsData => setListings(listingsData))
  }, [])

  function handleDeleteListing(id) {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings)
  }

  function handleSearch(text) {
    setSearch(text)
  }
  


  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer 
        listings={listings}
        onDeleteListing = {handleDeleteListing}
        search={search}
      />
    </div>
  );
}

export default App;
