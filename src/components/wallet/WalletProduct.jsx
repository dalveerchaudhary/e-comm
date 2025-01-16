// import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";
import { useEffect, useState } from "react";
import { addToWiseList } from "../../features/wiseSlice";


const WalletProduct = () => {

  const dispatch = useDispatch();
 



  const Data = [
    {
      image:`wallet_1.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`1`,
    },

    {
      image:`wallet_2.jpg`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`2`,
    },

    {
      image:`wallet_3.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`3`,
    },

    {
      image:`wallet_4.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`4`,
    },

    {
      image:`wallet_5.jpg`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`5`,

    },

    {
      image:`wallet_6.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`6`,

    },

    {
      image:`wallet_7.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`7`,
    },
    {
      image:`wallet_8.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`8`,
    },
    {
      image:`wallet_9.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`9`,
    },
    {
      image:`wallet_10.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`10`,
    },
    {
      image:`wallet_11.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`11`,
    },
    {
      image:`wallet_12.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`12`,
    },
    {
      image:`wallet_13.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`13`,
    },
    {
      image:`wallet_14.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`14`,
    },

    {
      image:`wallet_15.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`15`,
    },

    {
      image:`wallet_16.webp`,
      title:`Tibi White Xs Duffel Bags Sale`,
      price:899,
      id:`16`,
    },
  ]
  const [products, setProducts] =  useState(Data)

  useEffect(()=>{
    setProducts(products)
  },[products])



  
  return (
    <>
    

    <div className=" w-full flex-wrap gap-8 flex  justify-center mb-6 mt-20">
     {products.map((d )=>(
        <div key={d.id} className=" h-auto w-[296px] text-center mb-4  relative ">
          
          <img src={d.image} alt="" className="w-[296px] h-[296px]"/>
            <button onClick={() => dispatch(addToWiseList(d))}  
             className=" absolute top-1 right-1 text-2xl text-red-500">
              <FaRegHeart/>   </button>
          <p className="mt-2">{d.title}</p>
          <p className="mt-2">₹ {d.price}</p>
            <button    onClick={() => dispatch(addToCart(d))}
             className="text-center w-[296px] h-[31px] bg-black text-white rounded-sm mt-2">ADD TO CART</button>
           </div>
         
     ))}

    </div>
    
      
    
    </>
  )
}

export default WalletProduct