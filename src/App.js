import "./App.css";
import "./RR.css";
import React from "react";
// import { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Menu from "./components/menu/Menu";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CardProvider } from "./components/menu/menu--categories/CardContext";
import Checkout from "./components/menu/Checkout";

function App() {
  return (
    <div className="App">
      <CardProvider>
        <BrowserRouter>
          <Nav></Nav>
          <NAVUNDER></NAVUNDER>
          <Routes>
            <Route index path="/product" element={<Product />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CardProvider>
    </div>
  );
}

export default App;

const NAVUNDER = styled.div`
  height: 4rem;
  width: 100%;
`;
