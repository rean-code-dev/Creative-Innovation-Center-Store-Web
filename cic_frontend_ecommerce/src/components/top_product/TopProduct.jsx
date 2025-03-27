import React from "react";
import { useState } from "react";

const product = [
  {
    id: 1,
    img: "https://witblox.com/cdn/shop/files/products_2Farduino-uno-r3-development-board---clone-model---high-quality-with-cable_2FzUNnagehwB.jpg?v=1717492395",
    title: "Arduino UNO R3",
    price: 5.0,
    afterDiscount: 4.0,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKAyNhRfIKzDBWbTGRRtqIrehwGy3aH8RZg&s",
    title: "Arduino Nano",
    price: 4.5,
    afterDiscount: 3.5,
  },
  {
    id: 3,
    img: "https://www.az-delivery.de/cdn/shop/products/jumper-wire-kabel-40-stk-je-20-cm-f2m-female-to-male-kompatibel-mit-arduino-und-raspberry-pi-breadboard-276894.jpg?v=1679398749",
    title: "Wire Jumper",
    price: 3.0,
    afterDiscount: 2.5,
    discount: "10%",
  },
  {
    id: 4,
    img: "https://anuelectronics.com/cdn/shop/files/ultrasonic-sensor_v1.png?v=1703697229",
    title: "Ultrasonic Sensor",
    price: 4.4,
    afterDiscount: 3.5,
    discount: "10%",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71zsG6FkRfL.jpg",
    title: "Batery 18650 12v 3000mah",
    price: 4.4,
    afterDiscount: 3.5,
    discount: "10%",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbSRlSlWPQ8yB40McYghaaaStfnrpdUzsxVQAzEPHeurwKrISi14_eZ7Sa6k9tIJnCw&usqp=CAU",
    title: "Keypad 4x4",
    price: 4.4,
    afterDiscount: 3.5,
    discount: "10%",
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCvmKoj8KsmiqobCOg0PB71D2lHBODuUQpQ&s",
    title: "Arduino Mega 2560",
    price: 4.4,
    afterDiscount: 3.5,
    discount: "10%",
  },
  {
    id: 8,
    img: "https://probots.co.in/pub/media/catalog/product/cache/d8ddd0f9b0cd008b57085cd218b48832/l/2/l298-motor-driver-module.jpg",
    title: "Motor Driver",
    price: 4.4,
    afterDiscount: 3.5,
    discount: "10%",
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
  

  // return (
  //   <div className="grid grid-cols-4 gap-5 w-full px-20">
  //     {product.map((item, index) => (
  //       <div
  //         key={item.id}
  //         className="w-[310px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden relative"
  //       >
  //         {/* Discount Label */}
  //         {item.discount && (
  //           <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
  //             {item.discount}
  //           </div>
  //         )}

  //         <img
  //           src={item.img}
  //           alt={item.title}
  //           className="w-full object-cover h-[70%] rounded-t-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
  //         />
  //         <div className="h-[30%] flex flex-col justify-center items-start p-4">
  //           <p className="font-semibold text-black">
  //             {item.title}
  //           </p>
  //           <p className="text-green-600 text-lg font-semibold">$ {item.price} each</p>
  //           <div className="flex items-center justify-between space-x-4 ">
  //             <div className="flex items-center space-x-2">
  //               <button
  //                 onClick={() => decreaseQuantity(index)}
  //                 className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
  //               >
  //                 -
  //               </button>
  //               <span className="text-xl text-gray-900">{quantities[index]}</span>
  //               <button
  //                 onClick={() => increaseQuantity(index)}
  //                 className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
  //               >
  //                 +
  //               </button>
  //             </div>
  //             <div className="flex items-center space-x-2">
  //               <button
  //                 //onClick={() => handleViewProduct(item.id)} // Navigate to product detail
  //                 className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors"
  //               >
  //                 View
  //               </button>
  //               <button className="px-6 py-1 text-gray-900 rounded-lg hover:bg-red-500 hover:text-white border-2 border-red-500 transition-colors">
  //                 Buys
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

}

export default Product;
