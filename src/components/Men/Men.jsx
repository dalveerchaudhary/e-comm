// import React from "react";
// import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSeller from "../BestSeller";

const Men = () => {
  const data = [
    {
      img:`men_bags.webp`, 
      name:`BAGS`
    },
  

    {
      img:`men_wallet.webp`,
      name:`WALLET`
    },

   

    {
      img:`laptop_bags.webp`,
      name:`LAPTOP BAGS`
    },

    
   


   ]
  
   
   
   
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   autoplay: false,
    //   speed: 2000,
    //   autoplaySpeed: 2000,
    //   cssEase: "linear"
    // };

   
  return (
     <>
      <h1 className="text-center text-3xl mt-12 uppercase">bags for men</h1>
    

     
      <div className=" mt-4 mb-8 flex  justify-around ">
      
    

       {data.map((d,idx)=>(
        <div key={idx} className="flex slider-container ">
           <div  className="text-center w-[220px] h-[220px]" > 
            <img src={d.img} alt="" className="rounded-full"/>
            <p className="mt-2 uppercase ">{d.name }</p>
           </div>
           </div>
       ))}
 
 
      </div>

        <BestSeller/>
      
   
      </>
  )
}



export default Men
