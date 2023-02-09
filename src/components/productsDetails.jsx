import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { selectedProduct } from "../redux/actions/ProductsAction";
const ProductsDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts();
  }, [params.Id]);
  const fetchProducts = () => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.Id}`)
      .then((res) => {
        dispatch(selectedProduct(res.data));
      })
      .catch((err) => console.log(err));
  };
  const product = useSelector((state) => state.product);
  const { images, title, price, description } = product;
  console.log(product)
  return (
    <div style={{position:'relative', top:'70px'}} className='ui'>
        <h2><Link to = '/' className="ui brown tag label">Back</Link></h2>
      {Object.keys(product).length === 0 ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">
              AND
            </div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={images[0]} alt="image" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2><a  className="ui teal tag label">${price}</a></h2>
                <h3 className="ui brown block header">{product.category.name}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex={'0'}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
