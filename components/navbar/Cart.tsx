"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { ICartItem } from "@/app/types/CartItem";

const Cart = () => {
  const [items, setItems] = useState<ICartItem[]>([
    {
      id: 1,
      name: "Smooth Cotton Monogram Logo Polo Shirt",
      color: "Well Water",
      size: "S",
      price: 39000,
      originalPrice: 48250,
      image: "https://cdn.pixabay.com/photo/2025/02/14/00/16/jellyfish-9405431_1280.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Casual Fit Graphic T-Shirt",
      color: "Black",
      size: "M",
      price: 25000,
      originalPrice: 32000,
      image: "https://cdn.pixabay.com/photo/2025/02/14/00/16/jellyfish-9405431_1280.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      color: "Blue",
      size: "L",
      price: 50000,
      originalPrice: 60000,
      image: "https://cdn.pixabay.com/photo/2025/02/14/00/16/jellyfish-9405431_1280.jpg",
      quantity: 1,
    },
  ]);

  const handleIncrease = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      
      <div className="bg-white p-4 sm:p-6 w-full max-w-full flex-1 overflow-y-auto max-h-[60vh]">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start border-b pb-4 mb-4 last:border-b-0 relative"
            >
              {/* Image: Smaller on mobile, larger on big screens */}
              <img
  src={item.image}
  alt={item.name}
  className="w-24 h-24 sm:w-28 sm:h-28 max-w-[96px] max-h-[96px] sm:max-w-[120px] sm:max-h-[120px] object-cover rounded-lg flex-shrink-0"
/>
              <div className="ml-4 sm:ml-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-semibold text-xs sm:text-base text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.color} / {item.size}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-sm sm:text-lg font-bold text-red-500">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <p className="line-through text-gray-400 text-xs sm:text-sm">
                      ₦{item.originalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center bg-gray-200 rounded-lg px-1 sm:px-2 py-1">
                    <button
                      className="p-1 sm:p-2 text-gray-700 hover:text-gray-900"
                      onClick={() => handleDecrease(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-2 sm:px-4 text-sm sm:text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="p-1 sm:p-2 text-gray-700 hover:text-gray-900 mr-2 sm:mr-4"
                      onClick={() => handleIncrease(item.id)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 text-xs sm:text-lg"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm sm:text-lg">
            Your cart is empty.
          </p>
        )}
      </div>
      <div className="w-full text-center bg-white sticky bottom-0 p-3 sm:p-4">
        <div className="flex justify-between font-semibold text-gray-800 text-xs sm:text-base">
          <p>
            Subtotal{" "}
            <span className="text-gray-500 text-xs sm:text-sm">
              ({items.length} Items)
            </span>
          </p>
          <p>
            ₦
            {items
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toLocaleString()}
          </p>
        </div>
        <button className="w-full mt-2 sm:mt-4 bg-blue-600 text-white py-2 text-xs sm:text-base rounded-lg hover:bg-blue-700 transition">
          Review + Checkout
        </button>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Shipping and taxes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default Cart;
