import React from "react";

const AddToCart = ({notifySuccess, notifyFailure, product}) => {
  const handleClick = () => {
    parseInt(product.quantity) === 0 ? notifyFailure() : notifySuccess();
  }
  return (
    <div className="flex justify-center px-6 pt-4 pb-2">
      <button className="btn btn-secondary border border-black text-black" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
