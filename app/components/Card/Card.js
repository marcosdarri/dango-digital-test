"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import Edit from "./Edit/Edit";
import AddToCart from "./AddToCart/AddToCart";
import LearnMore from "./LearnMore/LearnMore";
import CardTitle from "./CardTitle/CardTitle";

const Card = ({
  product,
  sumQuantityWithReduce,
  notifySuccess,
  notifyFailure,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [edit, setEdit] = useState(false);

  const addQuantity = (value) => {
    const newValue = value === "" ? 0 : value;
    product.quantity = parseInt(newValue);
    sumQuantityWithReduce();
  };
  return (
    <div className="relative max-w-300px shadow-xl rounded-xl border border-black">
      <ToggleButton edit={edit} setEdit={setEdit} />
      <Image
        width="300"
        height="200"
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          display: "block",
          objectFit: "cover",
          height: "200px",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      />
      <div className="px-6 py-4">
        <CardTitle fontSize={fontSize} product={product} newTitle={newTitle} />

        <div className="flex mt-4 items-center max-h-36">
          <p className="text-black text-xl font-bold">${product.price}</p>
          <input
            type="number"
            className="text-gray-600 w-20 ml-5 input input-bordered w-full max-w-xs"
            min="0"
            defaultValue="0"
            onChange={(e) => addQuantity(e.target.value)}
            pattern="[0-9]+"
          />
        </div>
        <p className="text-gray-600 text-base mt-4">{product.description}</p>
        <Edit
          edit={edit}
          setNewTitle={setNewTitle}
          setFontSize={setFontSize}
          fontSize={fontSize}
        />
      </div>
      <AddToCart
        notifySuccess={notifySuccess}
        notifyFailure={notifyFailure}
        product={product}
      />
      <LearnMore learnMoreUrl={product.learnMoreUrl} />
    </div>
  );
};

export default Card;
