import React from 'react'
import { useSelector } from 'react-redux'
const ProductComponent = () => {
  const products = useSelector(state =>state.allProducts.products)
  const {id, title,}= products[0]
  return (
    <div className='four wide column '>
      <div className='ui link card'>
        <div className='card'>
          <div className='image'></div>
          <div className='header'>{title}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent