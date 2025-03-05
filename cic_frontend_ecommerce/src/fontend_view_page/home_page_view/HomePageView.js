
import React from "react";

import Img1 from '../../components/assets/images/logo_page.png'
import Img2 from '../../components/assets/images/logo_page.png'
import Img3 from '../../components/assets/images/logo_page.png'
import Img4 from '../../components/assets/images/logo_page.png'
import Banner from "../../components/banner/Banner";
import Product from "../../components/top_product/TopProduct";
import Button from "../../components/Button/Button";
import ImageSlider from "../../components/banner_slider/ImageSlider";
import Tap from "../../components/Button/Tap";
import InfCard from "../../components/our_team/InfCard";
import ProductNew from "../../components/top_product/ProductNew";
import "../../homeStyle/container.css";
import Footer from "../../components/footer/Footer";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 8,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];
function HomePageView() {
    return (
      <div className="w-full h-auto">
        {/* Header */}
        <header className="w-full px-20 bg-blue-300 h-12 flex items-center justify-between pt-3">
          <div className="flex items-center">
            <p className="mr-5 text-black cursor-pointer">090 000 0000 / 090 000 0000</p>
            <p className="text-black cursor-pointer">hello@gmail.com</p>
          </div>
          <div>
            <ul>
              <li className="relative group">
                <span className="text-black cursor-pointer py-3 transition-all duration-500">
                  My Account
                </span>
                <ul className="hidden group-hover:block absolute bg-gray-100 shadow-lg px-5 py-2 right-0 top-9 min-w-[120px]">
                  <li className="pb-2">
                    <a href="#" className="text-sm text-black block">Login</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-black block">Register</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
        
        {/* Navigation Bar dfghjkfghjkhjk*/}
        <nav className="dark:text-white px-20 bg-red-500 h-20 flex justify-between items-center">
          <h2 className="text-4xl cursor-pointer">C-I-C</h2>
          <ul className="flex items-center space-x-6 pt-3">
            {['Development', 'Electronics', 'Mechanical', 'Robotic', 'Tool'].map((menu, index) => (
              <li key={index} className="group hover:text-gray-600 px-3 py-5 cursor-pointer relative">
                {menu}
                {index < 3 && (
                  <ul className="absolute hidden group-hover:block bg-gray-200 w-56 shadow-lg px-3 py-2 top-[100px] min-w-[120px]">
                    {Array(9).fill("Test").map((item, idx) => (
                      <li key={idx} className="py-2">
                        <a href="#" className="no-underline text-black">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 pt-3">
            <p className="cursor-pointer">icon</p>
            <p className="cursor-pointer">icon</p>
          </div>
        </nav>
        
        {/* Slider */}
        <section>
          <Banner />
        </section>
  
        {/* Features */}
        <section className="grid grid-cols-4 gap-4 w-full px-20 h-20 pt-2">
          {['Shipping', 'Gift Voucher', 'Money Back', 'Safe Payment'].map((feature, index) => (
            <div key={index} className="flex items-center justify-center">
              <p className="pr-4">Icon</p>
              <h4 className="text-xl text-white">{feature}</h4>
            </div>
          ))}
        </section>
  
        {/* Trending Products */}
        <section className="pb-10 w-full text-white text-center">
          <h1 className="pt-10 pb-20 text-4xl">Trending Products</h1>
          <div className="flex justify-center items-center">
            <Product />
          </div>
          <div className="flex justify-center pt-20 h-20 pb-5">
            <Button btnName="See more" />
          </div>
        </section>
        
        {/* New Products */}
        <section className="pb-20 text-white text-center">
          <h1 className="pt-16 pb-20 text-4xl">New Products</h1>
          <ProductNew />
          <div className="flex justify-center pt-20 h-20 pb-10">
            <Button btnName="See more" />
          </div>
        </section>
        
        {/* Image Slider */}
        <section className="pb-10 h-[100vh] pt-16">
          <ImageSlider />
        </section>
        
        {/* Our Products */}
        <section className="pb-20 text-white text-center">
          <h1 className="pt-10 text-4xl">Our Product</h1>
          <div className="flex justify-center pt-10">
            <Tap />
          </div>
          <div className="flex justify-center pt-20 h-20 pb-5">
            <Button btnName="See more" />
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="pb-10 text-white text-center">
          <h1 className="text-4xl">Testimonial</h1>
          <p className="py-3 text-lg font-sans">Let’s hear from our loyal customers.</p>
          <div className="flex justify-center pt-10">
            <InfCard />
          </div>
        </section>
        {/* Footer */}
        <section className="bg-black text-white text-center">
          <Footer />
        </section>

      </div>
    );
  };

export default HomePageView



