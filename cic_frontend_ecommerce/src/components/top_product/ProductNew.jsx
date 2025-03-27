import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const product = [
  {
    id: 1,
    img: "https://etechrobot.com/wp-content/uploads/2019/08/L293D-Motor-Driver.png",
    title: "Motor Driver L293D",
    price: 2.5,
    discount: "10%",
    afterDiscount: 2.0,
  },
  {
    id: 2,
    img: "https://allmartbd.com/wp-content/uploads/2024/02/BTS7960-Motor-Driver-1.jpeg",
    title: "Mortor Driver BTS7960",
    price: 4.5,
    discount: "$1",
    afterDiscount: 4.0,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DaQBrhLuKjsXTnmkzDnn0KhzSUXrRhbS2nnT3mWEgQBfPyfY3cqQFVz2s6jmu6n0LQw&usqp=CAU",
    title: "Wheel 65mm for TT Motor Yellow",
    price: 3.0,
    discount: "15%",
    afterDiscount: 2.5,
  },
  {
    id: 4,
    img: "https://cdn1.botland.store/71668-large_default/dc-motor-with-148-gear-3-6v-with-double-sided-shaft-200rpm.jpg",
    title: "DC Motor 3.6V Yellow",
    price: 1.5,
    discount: "15",
    afterDiscount: 1.3,
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
            <p className="font-semibold text-black">{item.title}</p>
  
            {/* Price Section */}
            <div className="flex items-center space-x-2">
              {item.discount ? (
                <>
                  <p className="text-green-600 text-lg font-semibold">
                    ${item.afterDiscount.toFixed(2)}
                  </p>
                  <p className="text-red-500 text-lg font-semibold line-through">
                    ${item.price.toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="text-green-600 text-lg font-semibold">${item.price.toFixed(2)}</p>
              )}
            </div>
  
            <div className="flex items-center justify-between space-x-4">
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
                <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">
                  View
                </button>
                <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">
                  Buy
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