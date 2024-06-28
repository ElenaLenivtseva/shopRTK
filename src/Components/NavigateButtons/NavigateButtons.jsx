import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productsSlice";
import './NavigateButtons.css'
import clothes from '../../assets/images/clothes.jpg'


export default function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
                <Link to={'/filtredProducts/' + button}>
              <button className="my_button"
              onClick={()=>{dispatch(filterProducts(button))}}
              >
                {button}
              </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="wrap bg-green-300 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">SALES UP TO 50%</h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img className="img-clothes h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt='clothes'/>
      </div>
    </div>
  );
}
