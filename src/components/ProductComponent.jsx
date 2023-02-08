import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products)

  const renderList = products.map((product, ind) => {
    const { id, title, images, price, category } = product
    return (

      <div className="four wide column" key={id }>
        <Link to = {`/products/:${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={Array.isArray(images) ? images[1] : images} alt="" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta-price">${price.toLocaleString()} <span>{price.length < 3 && '.00'}</span></div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return (<>{renderList}</>);
};

export default ProductComponent;
