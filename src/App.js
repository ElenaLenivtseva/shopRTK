import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltredProducts from "./Components/FiltredProducts/FiltredProducts";
import SingleProduct from "./Components/SinglePage/SinglePage";
import { useSelector } from "react-redux";
import Login from "./Components/Login/Login";

function App() {
  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />

          <Route
            path="/filtredProducts/:type/:id"
            element={<SingleProduct />}
          />
          <Route path="/filtredProducts/:type" element={<FiltredProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
