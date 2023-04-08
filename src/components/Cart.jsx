import React from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  // load data
  const pData = useLoaderData();

  let cart = [];
  // get localStorage
  const savedCart = getStoredCart();

  // get localStorage object key by for in
  for (const id in savedCart) {
    // get match id product in pData
    const foundProduct = pData.find((product) => product.id === id);
    if (quantity) {
      // set quantity key and value
      foundProduct.quantity = savedCart[id];
      cart.push(foundProduct);
    }
  }
  console.log(cart);

  return <div>cart</div>;
};

export default Cart;
