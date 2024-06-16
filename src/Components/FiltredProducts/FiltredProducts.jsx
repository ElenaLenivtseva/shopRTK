import React from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
const FiltredProducts = () => {
    const products = useSelector((state)=>state.products.filtredProducts)
    console.log(products)
    const params = useParams()
    console.log(params)
  return (
    <div>
      filtredProducts
    </div>
  )
}

export default FiltredProducts
