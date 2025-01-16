// import React from 'react'

import Home from "./Home"



import {createBrowserRouter ,  Route, createRoutesFromElements,RouterProvider} from "react-router-dom";
import Root from "./Root";
 import Newlaunches from "./components/new launches/Newlaunches";
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import PrimiumCollection from "./components/PrimiumCollection/PrimiumCollection";
import Handbag from "./components/HandBag/Handbag";
import Wallet from "./components/wallet/wallet";
import Sling from "./components/Sling/Sling";
import Tote from "./components/TOTE/Tote";
import Laptop from "./components/LAPTOP/Laptop";
import Backpack from "./components/BACKPACK/Backpack";
import Combo from "./components/COMBO/Combo";
import Sale from "./components/SALE/Sale";
import Wiselist from "./components/wiselist/Wiselist";
import Cart from "./components/Cart";
import BestSeller from "./components/BestSeller";
// import BestSeller from "./components/BestSeller";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Root/>} >
      <Route path="/" element = {<Home/>}/ >
      <Route path="/Newlaunches"element={<Newlaunches/>}/>
      <Route path="/Women"element={<Women/>}/>
      <Route path="/Men"element={<Men/>}/>
      <Route path="/PrimiumCollection"element={<PrimiumCollection/>}/>
      <Route path="/Handbag"element={<Handbag/>}/>
      <Route path="/Wallet"element={<Wallet/>}/>
      <Route path="/Sling"element={<Sling/>}/>
      <Route path="/Tote"element={<Tote/>}/>
      <Route path="/Laptop"element={<Laptop/>}/>
      <Route path="/Backpack"element={<Backpack/>}/>
      <Route path="/Combo"element={<Combo/>}/>
      <Route path="/Sale"element={<Sale/>}/>
      <Route path="/Cart"element={<Cart/>}/>
      <Route path="/Wiselist"element={<Wiselist/>}/>
      <Route path="/Wiselist"element={<Wiselist/>}/>
      <Route path="/BestSeller"element={<BestSeller/>}/>
    </Route>
  )

)



const App = () => {
  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App