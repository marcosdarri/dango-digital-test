import React from "react";

const AddToCart = ({notify}) => {
  return (
    <div className="flex justify-center px-6 pt-4 pb-2">
      <button className="btn btn-primary" onClick={notify}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
