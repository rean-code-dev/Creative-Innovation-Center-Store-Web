import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const product = [
  {
    id: 1,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Women Ethnic",
    price: 5.0,
    discount: "10%",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Women western",
    price: 4.5,
    discount: "$1",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Goggles",
    price: 3.0,
    discount: "15%",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
    discount: "$2",
  },
];

function ProductNew() {
  const [quantities, setQuantities] = useState(product.map(() => 1));
  const navigate = useNavigate(); // Hook for navigation

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantities[index] > 1 ? newQuantities[index] - 1 : 1;
    setQuantities(newQuantities);
  };

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`); // Navigate to /product/:id under Layouts
  };

  return (
    <div className="grid grid-cols-4 gap-5 w-full px-20">
      {product.map((item, index) => (
        <div
          key={item.id}
          className="w-[310px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden relative"
        >
          {/* Discount Label */}
          {item.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              {item.discount}
            </div>
          )}

          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover h-[70%] rounded-t-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <div className="h-[30%] flex flex-col justify-center items-start p-4">
            <p className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap w-full">
              {item.title}
            </p>
            <p className="text-green-600 text-lg font-semibold">$ {item.price} each</p>
            <div className="flex items-center justify-between space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-xl text-gray-900">{quantities[index]}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleViewProduct(item.id)} // Navigate to product detail
                  className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors"
                >
                  View
                </button>
                <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">
                  Buys
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductNew;