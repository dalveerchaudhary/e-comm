// import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from 'react-redux';
import { addToWiseList } from "../../features/wiseSlice";

const ComboProduct = () => {

  const Data = [
    {
      image:`tote1.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`1`,
    },

    {
      image:`tote2.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`2`,
    },

    {
      image:`tote3.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`3`,
    },

    {
      image:`tote4.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`4`,
    },

    {
      image:`tote5.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`5`,
    },

    {
      image:`tote6.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`6`,
    },

    {
      image:`tote7.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`7`,
    },
    {
      image:`tote8.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`8`,
    },
    {
      image:`tote9.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`9`,
    },
    {
      image:`tote10.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`10`,
    },
    {
      image:`tote11.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`11`,
    },
    {
      image:`tote12.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`12`,
    },
    {
      image:`tote13.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`13`,
    },
    {
      image:`tote14.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`14`,
    },

    {
      image:`tote15.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
      id:`15`,
    },

    {
      image:`tote16.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:999,
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
          <p className="mt-2">₹ {d.price}</p>
            <button onClick={() => dispatch(addToCart(d))}
             className="text-center w-[296px] h-[31px] bg-black text-white rounded-sm mt-2">ADD TO CART</button>
           </div>
         
     ))}

    </div>
    
     
    
    </>
  )
}

export default ComboProduct ;