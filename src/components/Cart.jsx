import React from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";

const Cart = () => {
  const cart = useLoaderData();
  let total = 0;
  if (cart.length > 0) {
    console.log(cart);
    for (const product of cart) {
      total = total + product.quantity * product.price;
    }
  }
  console.log(cart);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-4xl font-semibold">
          {cart.length ? "Review Cart Item" : "Cart is Empty"}
        </h2>

        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total}$</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="btn-outlined">Clear Cart</button>
          <button className="btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
