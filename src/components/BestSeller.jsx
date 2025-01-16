
 import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
 import axios from "axios";
import { useEffect, useState } from "react";
import { addToWiseList } from "../features/wiseSlice";


const BestSeller = () => {
  const dispatch = useDispatch();

  const [products, setProducts] =  useState([])

  const getdata = async ()=>{
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
  }

  useEffect(()=>{
    getdata()
  },[])

  return (
      <>
 
     <h1 className="text-center text-3xl mt-6 mb-2 uppercase">best sellers</h1>
 
     <div className=" w-full flex-wrap gap-8 flex  justify-center">
      {products.map((product) => (
         <div key={product.id} className=" h-auto w-[296px] text-center mb-4  relative ">
           
           <img src={product.image} alt="" className="w-[296px] h-[296px]"/>
         

              <FaRegHeart className=" absolute top-1 right-1 text-2xl text-red-500"    onClick={() => dispatch(addToWiseList(product))} />  
           
           <p className="mt-2">{product.title}</p>
           <p className="mt-2">₹ {product.price}</p>
           <p> {product.category}</p>
          
             <button
               onClick={() => dispatch(addToCart(product))}
              className="text-center w-[296px] h-[31px] bg-black text-white rounded-sm mt-2">ADD TO CART</button>
            </div>
          
      ))}
 
     </div>
     
        <div className="text-center mb-4">
        <button className="text-center bg-black text-white px-10 py-3 ">view all</button>
       </div>
 
     
   </>
      
  );
};

export default BestSeller;
