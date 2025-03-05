import React from "react";


const imgSlider = "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1539.jpg?t=st=1739082940~exp=1739086540~hmac=d5d6a2c4cb77f8f40dc7bb8cc1ecb97a6f11e0e1d6b3d1d322d70d08805aca18&w=1380";

const Banner = () => {
  return (
    <div className="h-[80vh]">
       <img src={imgSlider} alt="" className="w-full h-full object-cover"/>
    </div>
  );
};

export default Banner;