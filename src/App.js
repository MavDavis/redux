import React from "react";
import productsDetails from "./components/productsDetails";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsList />} />
      </Routes>
    </div>
  );
};

export default App;
