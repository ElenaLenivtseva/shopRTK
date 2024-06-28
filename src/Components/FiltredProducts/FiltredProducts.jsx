import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";
import "./FiltredProducts.css";
import "../NavigateButtons/NavigateButtons.css";

const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filtredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const dispatch = useDispatch();
  const [colorMenuOpen, setColorMenuOpen] = useState(false);
  const [sizeMenuOpen, setSizeMenuOpen] = useState(false);
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {genderButtons.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <button
                      className="my_button"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
              <button
                className="my_button"
                onClick={() => dispatch(sortByPrice())}
              >
                High price
              </button>

              <div className="menu">
                <div className="menuHandler">
                  <button
                    className="menuOpenButton my_button"
                    onClick={() => setColorMenuOpen(!colorMenuOpen)}
                  >
                    Select color
                  </button>
                </div>
                {colorMenuOpen && (
                  <div className="menuList">
                    {colorButtons.map((item, index) => {
                      return (
                        <div
                          className="menuItem"
                          key={index}
                          style={{ color: item, cursor: "pointer" }}
                          onClick={() => dispatch(filterByColor(item))}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="menu">
                <div className="menuHandler">
                  <button
                    disabled={type === "Bags" || type === "Shoes"}
                    className="menuOpenButton my_button"
                    onClick={() => setSizeMenuOpen(!sizeMenuOpen)}
                  >
                    Select size
                  </button>
                </div>
                {sizeMenuOpen && (
                  <div className="menuList">
                    {sizeButtons.map((item, index) => {
                      return (
                        <div
                          className="menuItem"
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => dispatch(filterBySize(item))}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="pr-14">
              <button
                className="my_button"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear filter
              </button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid-products">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      price={product.price}
                      colors={product.color}
                      img={product.img}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default FiltredProducts;
