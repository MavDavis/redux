import React from 'react'
import {useParams} from 'react-router-dom';

const ProductsDetails = () => {
  const params = useParams();

  return (
    <div><h1>products Details</h1>
    <h2>Users: {params.Id}</h2>
    </div>
  )
}

export default ProductsDetails

