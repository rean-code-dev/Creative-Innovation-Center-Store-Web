import React, { useState } from 'react';

function Tap() {
  const [activeTab, setActiveTab] = useState(0);
  const [quantities, setQuantities] = useState(Array(10).fill(0));

  const tabs = ["TOOL", "ROBOTIC", "WIRELESS MODULES", "ELECTRONIC", "MECHANICAL", "ELECTRONIC KITS"];

  const products = [
    { id: 1, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Hammer", price: 5.0, category: 0 },
    { id: 2, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Screwdriver", price: 4.5, category: 0 },
    { id: 3, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Wrench", price: 3.0, category: 0 },
    { id: 4, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Arduino Robot", price: 4.4, category: 1 },
    { id: 5, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Raspberry Pi Bot", price: 4.4, category: 1 },
    { id: 6, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "WiFi Module", price: 4.4, category: 2 },
    { id: 7, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Bluetooth Module", price: 4.4, category: 2 },
    { id: 8, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Bluetooth Module", price: 4.4, category: 2 },
  ];

  const filteredProducts = products.filter((product) => product.category === activeTab);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <div className="w-full h-full px-20">
      <ul className="flex justify-center items-center gap-5 pb-5">
        {tabs.map((tab, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(index);
              }}
              className={`px-6 py-2 rounded-md transition-all duration-300 text-decoration-none ${
                activeTab === index ? 'bg-gray-200 text-red-500' : 'text-gray-50 hover:bg-gray-100 hover:text-red-500'
              }`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-4 gap-5 w-full rounded-md pt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div key={item.id} className="w-[310px] h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover h-[70%] rounded-t-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
              <div className="h-[30%] flex flex-col justify-center items-start p-2">
                <p className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap w-full">{item.title}</p>
                <p className="text-green-600 text-lg">$ {item.price} each</p>
                <div className="flex items-center justify-center space-x-10">
                  <div className="flex items-center space-x-2">
                    <button onClick={() => decreaseQuantity(index)} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">-</button>
                    <span className="text-xk text-gray-900">{quantities[index]}</span>
                    <button onClick={() => increaseQuantity(index)} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">+</button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">View</button>
                    <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-100 text-md">No products available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Tap;
