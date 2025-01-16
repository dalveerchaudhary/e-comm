// import React from 'react'
import AboutUs from "./components/About/AboutUs"
import Artical from "./components/Artical/Artical"
import BagAdd from "./components/BagAdd/BagAdd"
import BaggitStore from "./components/Baggitstore/BaggitStore"
import BestSeller from "./components/BestSeller"
import Collection from "./components/Collection/Collection"
// import Nav from "./components/Navbar/nav"
import Categories from "./components/categories/Categories"
import Customer from "./components/customer/Customer"
// import Footer from "./components/footer/Footer"
import Launches from "./components/new launches/Launches"
// import Newlaunches from "./components/new launches/Newlaunches"
import Patner from "./components/patner/Patner"
import Primium from "./components/primium/Primium"
import Warranty from "./components/warranty/Warranty"



const Home = () => {
  return (
    <div>
<BagAdd/>
<Categories/>
<Collection/>
<Launches/>
<Primium/>
<BestSeller/>
<Warranty/>
<Customer/>
<Patner/>
<BaggitStore/>
<AboutUs/>
<Artical/>
    </div>
  )
}

export default Home