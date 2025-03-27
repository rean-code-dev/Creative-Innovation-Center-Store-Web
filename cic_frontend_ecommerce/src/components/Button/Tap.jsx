// import React, { useState } from 'react';

// function Tap() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [quantities, setQuantities] = useState(Array(10).fill(0));

//   const tabs = ["TOOL", "ROBOTIC", "WIRELESS MODULES", "ELECTRONIC", "MECHANICAL", "ELECTRONIC KITS"];

//   const products = [
//     { id: 1, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Hammer", price: 5.0, category: 0 },
//     { id: 2, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Screwdriver", price: 4.5, category: 0 },
//     { id: 3, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Wrench", price: 3.0, category: 0 },
//     { id: 4, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Arduino Robot", price: 4.4, category: 1 },
//     { id: 5, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Raspberry Pi Bot", price: 4.4, category: 1 },
//     { id: 6, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "WiFi Module", price: 4.4, category: 2 },
//     { id: 7, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Bluetooth Module", price: 4.4, category: 2 },
//     { id: 8, img: "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg", title: "Bluetooth Module", price: 4.4, category: 2 },
//   ];

//   const filteredProducts = products.filter((product) => product.category === activeTab);

//   const increaseQuantity = (index) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] += 1;
//     setQuantities(newQuantities);
//   };

//   const decreaseQuantity = (index) => {
//     const newQuantities = [...quantities];
//     if (newQuantities[index] > 0) {
//       newQuantities[index] -= 1;
//     }
//     setQuantities(newQuantities);
//   };

//   return (
//     <div className="w-full h-full px-20">
//       <ul className="flex justify-center items-center gap-5 pb-5">
//         {tabs.map((tab, index) => (
//           <li key={index}>
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab(index);
//               }}
//               className={`px-6 py-2 rounded-md transition-all duration-300 text-decoration-none ${
//                 activeTab === index ? 'bg-gray-200 text-red-500' : 'text-gray-50 hover:bg-gray-100 hover:text-red-500'
//               }`}
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <div className="grid grid-cols-4 gap-5 w-full rounded-md pt-3">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item, index) => (
//             <div key={item.id} className="w-[310px] h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full object-cover h-[70%] rounded-t-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
//               />
//               <div className="h-[30%] flex flex-col justify-center items-start p-2">
//                 <p className="text-sm font-semibold truncate overflow-hidden whitespace-nowrap w-full">{item.title}</p>
//                 <p className="text-green-600 text-lg">$ {item.price} each</p>
//                 <div className="flex items-center justify-center space-x-10">
//                   <div className="flex items-center space-x-2">
//                     <button onClick={() => decreaseQuantity(index)} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">-</button>
//                     <span className="text-xk text-gray-900">{quantities[index]}</span>
//                     <button onClick={() => increaseQuantity(index)} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">+</button>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">View</button>
//                     <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">Buy</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-100 text-md">No products available for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Tap;
import React, { useState } from "react";

function Tap() {
  const [activeTab, setActiveTab] = useState(0);
  const [quantities, setQuantities] = useState(Array(10).fill(0));

  const tabs = [
    "TOOL",
    "ROBOTIC",
    "WIRELESS MODULES",
    "ELECTRONIC",
    "MECHANICAL",
    "ELECTRONIC KITS",
  ];

  const products = [
    { id: 1, img: "https://cdn2.botland.store/73485/radio-module-nrf24l01-24ghz-tht-transceiver-black.jpg", title: "NRF25L01", price: 5.0, category: 0 },
    { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGRycQ0jZgaYSHBkdSFVJofi_XIaxwIbj0g&s", title: "Bluetooth HC05 Modual", price: 4.5, category: 0 },
    { id: 3, img: "https://www.robotistan.com/1-way-5v-relay-module-23680-56-B.jpg", title: "5VDC module relay 1 way", price: 3.0, category: 0 },
    { id: 4, img: "https://electrobes.com/wp-content/uploads/2021/08/for-Smart-car-acrylic-plate-4-wheel-car-floor-4WD-single-piece-price-DIY-car-chassis.jpg_Q90.jpg_.jpg", title: "4WD smart car acrylic", price: 4.4, category: 0 },
    { id: 5, img: "https://s.alicdn.com/@sc04/kf/H421a6132b9394307baaaa92c32852461K.jpg_720x720q50.jpg", title: "Breadboard 400 points solderless 8.5cm x 5.5cm", price: 4.4, category: 0 },
    { id: 6, img: "https://ae01.alicdn.com/kf/S9c0332f03c704f1e9fde67c8f398c213t.jpg", title: "TT reducer motor fixing bracket", price: 4.4, category: 2 },
    { id: 7, img: "https://store.arrowdot.io/wp-content/uploads/2021/09/Adapter-12V-1A.jpg", title: "Adapter 12V 1A", price: 4.4, category: 2 },
    { id: 8, img: "https://m.media-amazon.com/images/I/617nTdhk2DL._AC_UF894,1000_QL80_.jpg", title: "LDR 5528 light dependent resistor", price: 4.4, category: 2 },
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
    <div className="w-full h-full px-10">
      {/* Tabs Section */}
      <div className="flex justify-center space-x-4 bg-gray-100 p-3 rounded-md shadow-md ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 shadow-md 
            ${activeTab === index 
              ? "bg-red-500 text-white scale-105 " 
              : "bg-white text-gray-600 hover:bg-red-100 hover:text-red-500 hover:scale-105 transition-transform duration-300"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pt-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div key={item.id} className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover h-56 rounded-t-lg p-2"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                <p className="text-green-600 text-md font-semibold">$ {item.price}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <button onClick={() => decreaseQuantity(index)} className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400">-</button>
                    <span className="px-3 text-md text-gray-900">{quantities[index]}</span>
                    <button onClick={() => increaseQuantity(index)} className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400">+</button>
                  </div>

                  <div className="space-x-2">
                    <button className="px-4 py-1 bg-gray-100 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">View</button>
                    <button className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg text-center col-span-full mt-5">No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Tap;
