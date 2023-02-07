import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Header } from './components/Header';
import ProductsList from './components/ProductsList';
import ProductsDetails from './components/ProductsDetails';
import './css/App.css'
export default function App() {
  return (
    <Router>
      <div>
     <Header/>

        <Routes>
       
          <Route path="/products/:Id" element={<ProductsDetails />} />
          <Route path="/" element={<ProductsList/>} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}


