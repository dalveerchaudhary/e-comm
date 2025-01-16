// import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from 'react-redux';
import { addToWiseList } from "../../features/wiseSlice";
const HandbagProduct = () => {

  const Data = [
    {
      image:`handbag_1.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`1`,
    },

    {
      image:`handbag_2.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`2`,
    },

    {
      image:`handbag_3.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`3`,
    },

    {
      image:`handbag_4.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`4`,
    },

    {
      image:`handbag_5.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`5`,
    },

    {
      image:`handbag_6.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`6`,
    },

    {
      image:`handbag_7.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`7`,
    },
    {
      image:`handbag_8.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`8`,
    },
    {
      image:`handbag_9.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`9`,
    },
    {
      image:`handbag_10.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`10`,
    },
    {
      image:`handbag_11.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`11`,
    },
    {
      image:`handbag_12.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`12`,
    },
    {
      image:`handbag_13.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`13`,
    },
    {
      image:`handbag_14.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`14`,
    },

    {
      image:`handbag_15.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`15`,
    },

    {
      image:`handbag_16.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:1199,
      id:`16`,
    },
  ]
  const dispatch = useDispatch();

  const [products, setProducts] =  useState(Data)
  
    useEffect(()=>{
      setProducts(products)
    },[products])
  return (
    <>
   

    <div className=" w-full flex-wrap gap-8 flex  justify-center mb-6 mt-20">
     {products.map((d)=>(
        <div key={d.id} className=" h-auto w-[296px] text-center mb-4  relative ">
          
          <img src={d.image} alt="" className="w-[296px] h-[296px]"/>
            <button onClick={() => dispatch(addToWiseList(d))} 
             className=" absolute top-1 right-1 text-2xl text-red-500"><FaRegHeart />  </button>
          <p className="mt-2">{d.title}</p>
          <p className="mt-2"> ₹ {d.price}</p>
            <button   onClick={() => dispatch(addToCart(d))}
            className="text-center w-[296px] h-[31px] bg-black text-white rounded-sm mt-2">ADD TO CART</button>
           </div>
         
     ))}

    </div>
    
   

    
    </>
  )
}

export default HandbagProduct