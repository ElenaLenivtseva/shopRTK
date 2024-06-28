import React from "react";
import ProductSectionItem from "./ProductSectionItem";
import { storeData } from "../../assets/data/dummyData";
import './ProductSection.css'

const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-700 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="tShirtsSale grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                img={product.img}
                name={product.name}
                text={product.text}
                price={product.price}
                color={product.color}
                size={product.size}
                totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
