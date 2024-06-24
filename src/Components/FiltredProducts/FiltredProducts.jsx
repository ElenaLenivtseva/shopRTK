import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./FiltredProducts.css";
import '../NavigateButtons/NavigateButtons.css'
const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filtredProducts);
  const { type } = useParams();
  const genderButtons = ['male','female'];
  const colorButtons = ['red','green', 'purple', 'yellow', 'blue', 'black', 'brown'];
  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between">
          <div className="flex items-center">
            {genderButtons.map((item, index)=> {
              return (
                <div className="" key={index}>
                  <button className="my_button">{item}</button>
                </div>
              )
            })}
            <button className="my_button">High price</button>
            <div className="menu">
              <div className="menuHandler"></div><div className="menuList">
                {colorButtons.map((item, index)=>{
                  return (
                    <div className="menuItem" key={index} style={{color: item}}>
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="grid-products">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              console.log(product);
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
      </div>
    </>
  );
};

export default FiltredProducts;
