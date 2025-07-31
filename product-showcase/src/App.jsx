import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { GlobalProvider } from "./context/GlobalContext";
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <ProductList />
      </div>
    </GlobalProvider>
  );
}

export default App;
