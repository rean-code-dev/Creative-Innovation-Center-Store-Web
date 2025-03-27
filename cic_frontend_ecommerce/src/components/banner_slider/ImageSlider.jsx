import React from "react";
import Button from "../Button/Button";

function ImageSlider({ btnName }) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full px-20 ">
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
        <img
          src="https://thinkrobotics.com/cdn/shop/collections/Robotics_banner_1200x600_3f549524-2efe-4025-ad04-507362c2f2de.jpg?v=1688651929"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Romotic"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg relative row-span-2 hover:scale-105 transition-transform duration-300">
        <img
          src="https://preview.redd.it/we-made-a-diy-mobile-robot-which-can-map-entire-areas-with-v0-4d3os6shhpba1.jpg?width=1080&crop=smart&auto=webp&s=6b981d6d70aa353abdd643fa8b9853c467715318"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Development"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20241210/pngtree-intricate-close-up-of-a-robots-head-with-advanced-sensors-and-image_16724140.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center hover:scale-105 transition-transform duration-300">
          <Button btnName={"Machanical"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
        <img
          src="https://www.agsdevices.com/wp-content/uploads/2024/05/electronic_components_hero_image.jpg.webp"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Electronic"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative hover:scale-105 transition-transform duration-300">
        <img
          src="https://knowledge-hub.com/wp-content/uploads/2022/02/Robotify_banner.jpg"
          alt=""
          className="w-full h-full object-cover"    
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Education"} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
