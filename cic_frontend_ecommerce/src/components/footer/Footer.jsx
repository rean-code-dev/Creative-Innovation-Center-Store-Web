import React from "react";
import footerLogo from '../../components/assets/images/logo_page.png';
import Banner  from '../../components/assets/images/banner_footer.jpg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
  
    <footer className="bg-gray-100 py-10 px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold flex items-center space-x-2">
            <img src="https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg" alt="Pagedone Logo" className="h-8" />
            <span className="text-purple-600">Pagedone</span>
          </h2>
          <p className="mt-2 text-gray-600 text-left">
            Trusted in more than 100 countries & 5 million customers. Have any query?
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
            Contact us
          </button>
        </div>

        {/* Links */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-800">Pagedone</h3>
          <ul className="mt-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-800">Products</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Figma UI System</li>
            <li>Icons Assets</li>
            <li>Responsive Blocks</li>
          </ul>
        </div>

        <div className="text-right">
          <h3 className="font-semibold text-gray-800">Support</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center border-t pt-6 px-6 md:px-16">
        <p className="text-gray-600">©pagedone 2024, All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedin className="text-xl text-blue-500 cursor-pointer" />
          <FaInstagram className="text-xl text-pink-500 cursor-pointer" />
          <FaFacebook className="text-xl text-blue-600 cursor-pointer" />
          <FaYoutube className="text-xl text-red-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;