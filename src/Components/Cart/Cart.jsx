import React from "react";
import "./Cart.css";
import '../../Components/NavigateButtons/NavigateButtons.css'
import { useDispatch, useSelector } from "react-redux";
import { removeFromTheCart } from "../../features/slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length > 0 ? (
        <div className="dialog">
          <div className="dialogBody flex flex-col justify-center items-start">
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="dialogProdWrap grid grid-cols-2 py-4">
                    <div className="dialogProdImgWrap">
                      <img
                        className="h-[125px] rounded-md dialogProdImg"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <h4 className="text-black text-base text-bold font-inter tracking-normal leading-none py-4">{item.name}</h4>
                      <p className="text-black text-xs font-inter tracking-normal leading-none py-4">{item.text}</p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none py-4">Selected size: <span className="ml-2">{item.size}</span></p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none py-4">Selected color: <span style={{backgroundColor: item.color}} className="ml-2 rounded-full px-2"></span></p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none py-4">Amount: <span className="ml-2">{item.amount}</span></p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none py-4">Single Item Price: <span className="ml-2">{item.price}$</span></p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none py-4">Total Item Price: <span className="ml-2">{item.totalPrice}$</span></p>
                      <button className="my_button_remove" onClick={()=>dispatch(removeFromTheCart(item))}>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="dialogFooter">
            <p className="text-black text-base font-bold font-inter tracking-normal leading-none py-4">Total Price Of All Products: {totalPrice}$</p>
          </div>
        </div>
      ) : (
        <div className="dialog">
          <div className="dialogBody">
            <div>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base font-inter  tracking-normal leading-none">
                Add some products
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
