import React from "react";
import { useState } from "react";

const product = [
  {
    id: 1,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Women Ethnic",
    price: 5.0,
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Women western",
    price: 4.5,
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Goggles",
    price: 3.0,
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid",
    title: "Printed T-Shirt",
    price: 4.4,
  },
];

function Product() {
  const [quantities, setQuantities] = useState(product.map(() => 1));

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] =
      newQuantities[index] > 1 ? newQuantities[index] - 1 : 1;
    setQuantities(newQuantities);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-5 w-full px-20">
        {product.map((item, index) => (
          <div
            key={item.id}
            className="w-[310px] h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover h-[70%] rounded-t-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div className="h-[30%] flex flex-col justify-center items-start p-2">
              <p className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap w-full">
                {item.title}
              </p>
              <p className="text-green-600 text-lg">$ {item.price} each</p>
              <div className="flex items-center justify-center space-x-10">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-xk text-gray-900">{quantities[index]}</span>
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
    </>
  );
}

export default Product;
