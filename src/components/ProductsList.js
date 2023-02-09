import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/ProductsAction'
const ProductsList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchProducts()
  },[])
  const fetchProducts = ()=>{
    axios.get('https://api.escuelajs.co/api/v1/products').then((res)=> dispatch(setProducts(res.data))).catch(err=>console.log(err))
  }
  return (
    <div className='ui grid container teste' id='teste'>
      <ProductComponent />
    </div>
  )

}

export default ProductsList