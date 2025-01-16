

const BaggitStore = () => {
  return (
    <div className="flex">
      <div className="w-[50%]">
           <img src="baggit-store.webp "alt=""/>
      </div>
      <div className="w-[50%] bg-black">
        <h3 className="text-white text-2xl uppercase left-20 top-32 relative">find a store near you</h3>
       < h3 className="text-white text-xl  left-20 top-36 relative">Come Visit Us</h3>
       <button className="uppercase text-white  bg-[rgb(255,158,27)] py-2 px-4 left-20 top-40 relative hover:bg-black" >get store directions</button>

      </div>
    </div>
  )
}

export default BaggitStore
