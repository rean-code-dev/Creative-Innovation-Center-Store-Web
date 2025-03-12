import React from "react";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const bannerImages = [
  "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1539.jpg?t=st=1739082940~exp=1739086540~hmac=d5d6a2c4cb77f8f40dc7bb8cc1ecb97a6f11e0e1d6b3d1d322d70d08805aca18&w=1380",
  "https://img.freepik.com/free-psd/sale-banner-template_23-2148809136.jpg?w=1380",
  "https://img.freepik.com/free-psd/mega-sale-facebook-cover-web-banner-template_106176-1437.jpg?w=1380",
];

const Banner = () => {
  const sliderRef = React.useRef();

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Carousel */}
      <Carousel
        ref={sliderRef}
        autoplay
        autoplaySpeed={3000}
        effect="scrollx"
        dots={{ className: "custom-dots" }}
        className="h-full"
        infinite
      >
        {bannerImages.map((img, index) => (
          <div key={index} className="h-[80vh] flex items-center justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform scale-100 hover:scale-105"
            />
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-500"
        onClick={() => sliderRef.current.prev()}
      >
        <LeftOutlined />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-blue-500"
        onClick={() => sliderRef.current.next()}
      >
        <RightOutlined />
      </button>

      {/* Custom Dots */}
      <style jsx>{`
        .custom-dots .slick-dots li {
          width: 20px;
          height: 5px;
          background: gray;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-dots .slick-dots li.slick-active {
          background: red;
          width: 40px;
        }

        .custom-dots .slick-dots {
          bottom: 20px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default Banner;
