import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Launches = () => {

  const data = [
      {
        img:`Aerolight_new.webp`,
        name:`aerolite`
      },
      {
        img:`modern_new.webp`,
        name:`modern muse`
      },
      {
        img:`Gloss_new.webp`,
        name:`gloss glam`
      },
      {
        img:`Cityscape_new.webp`,
        name:`city scape`
      },
      {
        img:`Future_new.webp`,
        name:`future classic`
      },
      {
        img:`Modern_Shapes_new.webp`,
        name:`modern shapes`
      },
      {
        img:`Sneak_Lazz_new.webp`,
        name:`luxe affair`
      },
      {
        img:`cellebration_new.webp`,
        name:`cellebration`
      },

    ]



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    
    <div className="text-center mt-7 uppercase text-3xl mb-8"> shop by launches</div>

    <div className=" mt-8 ">
      
      <Slider {...settings}>

       {data.map((d,idx)=>(
        <div key={idx} className="flex slider-container ">
           <div  className=" w-[237px] h-[237px]" > 
            <img src={d.img} alt=""/>
            <p className="uppercase text-center mt-2">{d.name }</p>
           </div>
           </div>
       ))}
 
 </Slider>
        
      </div>

    </>
  )
}

export default Launches