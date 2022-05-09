import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
// import { filterWith } from "./Search";



function App() {
  const [toFilter, setfilterBy] = useState('all')
  console.log(toFilter)

  function handleFilter(result){
     setfilterBy(result)
  }
  
  return (
    <div className="app">
      <Header onFilter = { handleFilter }/>
      <ListingsContainer filterWiths = { toFilter }/>
    </div>
  );
}

export default App;
