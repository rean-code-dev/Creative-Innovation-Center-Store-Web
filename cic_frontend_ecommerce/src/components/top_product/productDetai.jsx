import React, { useState } from "react";
import { FaPhone, FaFacebookF, FaPinterestP, FaHeart, FaShareAlt } from "react-icons/fa";
import { Button } from "antd"; // Assuming Ant Design for buttons

const ProductDetail = () => {
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Product details
  const product = {
    name: "UNO R3 Board ATmega328P ATmega16U2 With USB Cable for Arduino",
    originalPrice: 9.00,
    discountedPrice: 7.50,
    discountPercentage: 17,
    availability: "Out of Stock",
    stockLeft: 0,
    sku: "3119",
    imageUrl: "https://via.placeholder.com/300x300.png?text=Arduino+UNO+R3", // Replace with actual image URL
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Additional Images (Placeholder) */}
          <div className="flex gap-2 mt-4">
            <img
              src={product.imageUrl}
              alt={`${product.name} Thumbnail 1`}
              className="w-20 h-20 rounded-lg shadow-md"
            />
            <img
              src={product.imageUrl}
              alt={`${product.name} Thumbnail 2`}
              className="w-20 h-20 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-baseline mb-4">
            <span className="text-xl font-semibold text-red-600">${product.discountedPrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            <span className="text-red-600 ml-2">-{product.discountPercentage}%</span>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <p className="text-gray-700">Availability: <span className="text-red-600">{product.availability}</span></p>
            {product.stockLeft === 0 && (
              <p className="text-red-600 font-medium mt-1">
                Unfortunately {product.stockLeft} products left in stock!
              </p>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quantity:</label>
            <div className="flex items-center border rounded-md w-24">
              <button
                className="w-1/3 py-2 text-center text-gray-700 hover:bg-gray-200"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-1/3 py-2 text-center">{quantity}</span>
              <button
                className="w-1/3 py-2 text-center text-gray-700 hover:bg-gray-200"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-4">
            <Button
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={product.stockLeft === 0}
            >
              Add to Cart
            </Button>
            <Button
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={product.stockLeft === 0}
            >
              Buy Now
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mb-4">
            <p className="text-gray-700">SKU: #{product.sku}</p>
          </div>

          {/* Wishlist and Share */}
          <div className="flex items-center gap-4 mb-4">
            <button className="flex items-center text-gray-700 hover:text-red-600">
              <FaHeart className="mr-2" /> Wishlist
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600">
              <FaShareAlt className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Contact and Social Links */}
      <div className="mt-8 p-4 bg-blue-600 text-white flex justify-between items-center rounded-md">
        <div className="flex items-center gap-2">
          <FaPhone className="text-white" />
          <a href="tel:089603311" className="hover:underline">089 603 311</a>
          <a href="https://facebook.com/letstore.io" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
            <FaFacebookF className="mr-1" /> facebook.com/letstore.io
          </a>
        </div>
        <div>
          <span className="text-sm">letstore.io</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;