import React from "react";
import Search from "./Search";
// import { useState } from "react";
function Header({ onFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilter = { onFilter }/>
    </header>
  );
}

export default Header;
