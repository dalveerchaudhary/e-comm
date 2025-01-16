
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
   
    <div className="w-full h-[400px] bg-black text-white flex justify-between p-7">

      <div>
      <img src="logo_white.avif" className="h-14 "/>
      <p className="mb-3"> Baggit India Pvt. Ltd.</p>
      <p className="mb-3"> Address: 218, 2nd Floor, Narayan </p>
       <p className="mb-3"> Udyog Bhavan, Lal Baug, Parel, </p>
      <p className="mb-3"> Mumbai, Maharashtra 400012</p>
    <p>Phone: 9967695334</p>
    <p>Email: <u>esupport@baggit.com</u></p>
    <p> Support - 10am to 6pm Mon-Fri</p>
      </div>
       <ul className="leading-9  ">
        <li>Women</li>
        <li>Men</li>
          <li>Sale</li>
          <li>Store Locator</li>
       
       </ul>

       <ul className="leading-9  ">
        <li>Our Story</li>
        <li>Wash Care    </li>
          <li>FAQs</li>
          <li>Sitemap</li>
    
       </ul>

       <ul className="leading-9  ">
        <li>Track Order</li>
        <li>Return Order </li>
          <li>Privacy Policy</li>
          <li>Returns Policy</li>
      
       </ul>

       <div>
        <p className="mb-6 mt-1">Newsletter</p>
        <p className="mb-4">Sign up to our newsletter to receive<br></br> exclusive offers.</p>
        <input placeholder="E-mail" className="bg-black text-white border px-4 py-2 w-[288px] block mb-6"/>
        <button className="uppercase text-white  bg-[rgb(255,158,27)] py-2 px-6  hover:bg-black  " >subscribe</button>

       </div> 
    </div>
         <div className="flex justify-center gap-10 bg-black text-white py-10">
         <FaFacebook />
         <FaLinkedin />
         <FaInstagram />
         <FaTwitter />
         <FaYoutube />

         </div>

    </>
  )
}

export default Footer
