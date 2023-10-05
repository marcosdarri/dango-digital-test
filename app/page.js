"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";
import PageTitle from "./components/PageTitle/PageTitle";

import products from "./products";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [totalSum, setTotalSum] = useState(0);

  const notify = () =>
    toast.success("Producto agregado exitosamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sumQuantityWithReduce = () => {
    const sum = products.reduce(
      (totalQuantity, product) => totalQuantity + parseInt(product.quantity),
      0
    );
    setTotalSum(sum);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageTitle totalSum={totalSum}/>
      <Grid>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            sumQuantityWithReduce={sumQuantityWithReduce}
            notify={notify}
          />
        ))}
        <ToastContainer />
      </Grid>
    </main>
  );
}
