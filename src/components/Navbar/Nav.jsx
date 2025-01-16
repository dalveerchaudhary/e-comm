// import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
  const { loginWithRedirect,isAuthenticated, logout} = useAuth0();
  return (
    <nav className="w-full top-0 left-0 sticky bg-[#ffffff] text-black px-10 py-3 z-20">

  
    <div className="flex justify-between items-center ">  
     <Link to="/">
     <img src="logoimg.avif" className="h-14 items-center"/>
     </Link>
     


      <div className="flex gap-10 uppercase text-[15px] ">
         <NavLink
         to={"/"} 
         >
          Home</NavLink>
        <NavLink
        to={"/Newlaunches"}
        >New Launches</NavLink>

      <NavLink
        to={"/Women"}
        >women</NavLink>


        <NavLink
        to={"/Men"}
        >men</NavLink>
       <NavLink
        to={"/PrimiumCollection"}
        >primium collection</NavLink>

        <NavLink to={'/BestSeller'}>
        Sale</NavLink>
        
      </div>
      <div className="flex gap-6 text-xl items-center">
    



   {
        isAuthenticated ? (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          <FaUserLarge />
        </button>
       
      
        ) :(
          <button className=" bg-gray-500 px-2 py-1 text-sm rounded-sm"  onClick={() => loginWithRedirect()}> Log in </button>
        )
    }
  

   
     <IoSearchOutline /> 
   

    
     <NavLink to={"/Wiselist"}>
      <FaRegHeart />
      </NavLink>
 
    
     

     
      <NavLink to={"/Cart"}>
         {/* <span>  {cartItems.ength}</span> */}
      <IoCartOutline /> 
      </NavLink>
        
  
      </div>
    </div>
    </nav>
  )
}

export default Nav
