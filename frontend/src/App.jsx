import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";
import menBanner from './assets/banner_mens.png';
import womenBanner from './assets/banner_women.png';
import kidBanner from './assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" banner={menBanner} />}/>
        <Route path="/womens" element={<ShopCategory category="women" banner={womenBanner} />}/>
        <Route path="/kids" element={<ShopCategory category="kid" banner={kidBanner} />}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
