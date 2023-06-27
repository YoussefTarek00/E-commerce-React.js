import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componenet/NaveBar.jsx";
import "./App.css";
import Slider from "./componenet/Slider.jsx";
import ProductsList from "./componenet/ProductsList.jsx";

import ProductDetails from "./componenet/ProductDetails.jsx";
import About from "./componenet/About.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
