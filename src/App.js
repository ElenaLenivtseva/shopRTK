import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltredProducts from "./Components/FiltredProducts/FiltredProducts";
import SingleProduct from './Components/SinglePage/SinglePage'
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state)=>state.cart.cart)
  const totalAmount = useSelector((state)=>state.cart.totalAmount)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)

  console.log('cart', cart)
  console.log('totalAmount', totalAmount)
  console.log('totalPrice', totalPrice)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/filtredProducts/:type/:id' element={<SingleProduct/>}/>
          <Route path='/filtredProducts/:type' element={<FiltredProducts />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
