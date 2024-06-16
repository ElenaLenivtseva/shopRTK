import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./FiltredProducts.css";
const FiltredProducts = () => {
  const products = useSelector((state) => state.products.filtredProducts);
  console.log(products);
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
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
