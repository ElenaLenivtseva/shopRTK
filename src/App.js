import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltredProducts from "./Components/FiltredProducts/FiltredProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/filtredProducts/:type' element={<FiltredProducts />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
