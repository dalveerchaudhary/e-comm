// import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      img:`Handbag.webp`, 
      name:`HANDBAG`,
      link:`/Handbag`,
    },
    {
      img:`Sling.webp`,
      name:`SLINGS`,
      link:`/Sling`,
    },

    {
      img:`Wallet.webp`,
      name:`WALLET`,
      link:`/Wallet`
    },

    {
      img:`Tote.webp`,
      name:`TOTE`,
      link:`/Tote`
    },

    {
      img:`Laptop.webp`,
      name:`LAPTOP`,
      link:`/Laptop`
    },

    {
      img:`Backpack.webp`,
      name:`BACKPACK`,
      link:`/Backpack`

    },

    {
      img:`Combo.webp`,
      name:`COMBO`,
      link:`/Combo`
    },

   

    {
      img:`Men_s.webp`,
      name:`Men`,
      link:`/Men`
    },

    {
      img:`Sale.webp`,
      name:`SALE`,
      link:`/Sale`

    },


   ]
  
   
   
   
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      cssEase: "linear"
    };

   
  return (
     <>
      <h1 className="text-center text-3xl mt-12 uppercase">Shop by categories</h1>
    

     
      <div className=" mt-8 ">
      
      <Slider {...settings}>

       {data.map((d,idx)=>(
        <div key={idx} className="flex slider-container ">
           <div  className="text-center w-[237px] h-[270px]" > 
          <Link to={d.link}>
          <img src={d.img} alt=""/>
          </Link>
           

            <p className="mt-2 uppercase ">{d.name }</p>
           </div>
           </div>
       ))}
 
 </Slider>
        
      </div>
   
      </>
  )
}



export default Categories
