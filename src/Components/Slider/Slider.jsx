import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import "./slider.css";

const Slider = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slider.value);
  console.log(slideIndex);
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="slideImg h-[850px] w-full" src={item.img} alt="shoes" />
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4 text-wrap">
                <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dots flex absolute bottom-10 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
              
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer w-30 h-30 active_dot"
                    : "bg-white rounded-full p-4 cursor-pointer w-30 h-30"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="absolute top-[50%] right-4 button bg-white rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(nextSlide(slideIndex + 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

        </button>
        <button className='absolute top-[50%] left-4 button bg-white rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(prevSlide(slideIndex - 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

        </button>
      </div>
    </div>
  );
};

export default Slider;
