import React from "react";
// import "../layout/Layout.css";
import { useNavigate } from "react-router-dom";
// import Banner from "../banner/Banner";
// import "../../homeStyle/container.css";
// import Product from "../top_product/Product";
// import Button from "../Button/Button";
// import ProductNew from "../top_product/ProductNew";
// import ImageSlider from "../banner_slider/ImageSlider";
// import Tap from "../Button/Tap";
// import InfCard from "../our_team/InfCard";
import HomePageView from "../../fontend_view_page/home_page_view/HomePageView";

function Layout({}) {
  const Img =
    "https://img.freepik.com/free-vector/abstract-logo-template_23-2147503137.jpg?ga=GA1.1.1322610982.1696675268&semt=ais_hybrid";
  const navigate = useNavigate();

  const onClickMenu = (routeName) => {
    navigate(routeName);
  };

  return (
    <>
      <HomePageView />
    </>
  );
}

export default Layout;
