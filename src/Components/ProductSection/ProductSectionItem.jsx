import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import "../NavigateButtons/NavigateButtons.css";

const ProductSectionItem = ({
  totalPrice,
  id,
  img,
  name,
  text,
  price,
  color,
  size,
}) => {
  const defaultSize = size[0];
  const defaultColor = color[0];
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div color="blue-gray" className="cardHeader">
        <img src={img} className="cardHeader__img" alt="card-image" />
      </div>
      <div className="cardBody">
        <h5 className="mb-2">{name}</h5>
        <p>{price}$</p>
        <p>{text}</p>
        <p>Size left{defaultSize}</p>
        <p>
          Color{" "}
          <span
            className="px-2 ml-2 rounded-full"
            style={{ backgroundColor: defaultColor }}
          ></span>
        </p>
      </div>
      <div className="cardFooter">
        <button
          className="my_button"
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                name: name,
                img: img,
                text: text,
                price: price,
                size: defaultSize,
                color: defaultColor,
                amount: 1,
                totalPrice: totalPrice,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSectionItem;
