import React from "react";
import Button from "../Button/Button";

function ImageSlider({ btnName }) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full px-20">
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Romotic"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg relative row-span-2">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Development"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Machanical"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Electronic"} />
        </div>
      </div>
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img
          src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover"    
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 text-center">
          <Button btnName={"Electronic"} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
