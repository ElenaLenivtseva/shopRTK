import React from 'react'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
const ProductCard = ({id, img, name, text, price, colors}) => {
  return (
    <div className="card">
    <div color="blue-gray" className="cardHeader">
      <img
        src={img}
        className='cardHeader__img'
        alt="card-image"
      />
    </div>
    <div className='cardBody'>
      <h5 className="mb-2">
        {name}
      </h5>
      <p>
        {text}
      </p>
    </div>
    <div className="cardFooter">
    <p>
        {price}$
      </p>
    <p>
        {colors.map((color, index)=>{
          return (
            <i className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4' key={index} style={{backgroundColor: color}}> </i>
          )
        })}
      </p>
      {/* <Button>Read More</Button> */}
    </div>
  </div>
  )
}

export default ProductCard
