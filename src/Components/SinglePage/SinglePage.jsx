import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../NavigateButtons/NavigateButtons";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function SinglePage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const { id } = useParams();
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-xl font-inter font-bold font-tracking-normal leading-none pb-4">
                    50% OFF
                  </p>
                  <p className="text-black-700 text-xl font-inter font-bold font-tracking-normal leading-none pb-4">
                    {item.price}$
                  </p>
                  <p className="text-gray-600 text-xl font-inter font-bold font-tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>

                        <select
                          id="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          name="size"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>

                    <select
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      name="color"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    className="my_button"
                    onClick={() => dispatch(addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      size: size,
                      color: color,
                      amount: 1,
                      totalPrice: item.price,
                    }))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
