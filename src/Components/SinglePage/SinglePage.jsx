import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SinglePage() {
  const product = useSelector((state) => state.products.singleProduct);
  const {id} = useParams()
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
            return <div key={index} className='flex justify-center items-center py-10'>
              <div className="pl-44 grow-[2]">
                  <img className="h-[850px] rounded-lg" src={item.img} alt={item.name} />
              </div>
              <div className="grow-[3]">
                  <div className="max-w-lg">
                      <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>{item.name}</h5>
                      <p className='text-orange-700 text-xl font-inter font-bold font-tracking-normal leading-none pb-4'>50% OFF</p>
                      <p className='text-gray-600 text-xl font-inter font-bold font-tracking-normal leading-none pb-4'>{item.text}</p>
                <div className="pb-4">
                    <select></select>
                </div>
                  </div>
              </div>
            </div>;
          })}
    </div>
  );
}
