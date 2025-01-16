import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collection = () => {

  const data = [
      {
        img:`AW_24.webp`

      },
      {
        img:`Soft_Bags.webp`

      },
      {
        img:`Modern_Muse.webp`

      },
      {
        img:`Aerolite.webp`

      },
      {
        img:`Floral_charm.webp`

      },
      {
        img:`Daily_Casual.webp`

      },
      {
        img:`Work.webp`

      },
      {
        img:`Midnight_black.webp`

      },

      {
        img:`Maatii_bag.webp`

      }
  ]



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    
    <div className="text-center mt-7 uppercase text-3xl mb-8"> shop by Collection</div>

    <div className=" mt-8 ">
      
      <Slider {...settings}>

       {data.map((d,idx)=>(
        <div key={idx} className="flex slider-container ">
           <div  className=" w-[400px] h-[500px]" > 
            <img src={d.img} alt=""/>
         
           </div>
           </div>
       ))}
 
 </Slider>
        
      </div>

    </>
  )
}

export default Collection