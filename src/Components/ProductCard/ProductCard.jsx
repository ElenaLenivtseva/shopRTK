import React from "react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, img, name, text, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filtredProducts/${type}/${id}`}>
      <div className="card" onClick={() => dispatch(singleProduct(id))}>
        <div color="blue-gray" className="cardHeader">
          <img src={img} className="cardHeader__img" alt="card-image" />
        </div>
        <div className="cardBody">
          <h5 className="mb-2">{name}</h5>
          <p>{text}</p>
        </div>
        <div className="cardFooter">
          <p>{price}$</p>
          <p>
            {colors.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                >
                  {" "}
                </i>
              );
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
