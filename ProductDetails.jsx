// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data'; // Assuming data is imported from the correct file

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: Rs.{product.price}</p>
    </div>
  );
};

export default ProductDetail;
