import { useEffect } from 'react';
import  { useState } from 'react';

const images = [
  'https://baggit.com/cdn/shop/files/Sale_Banner_Desktop.png?v=1727703736&width=1400',
  'https://baggit.com/cdn/shop/files/Maati_Banner_Desktop.png?v=1729491766&width=1400',
  'https://baggit.com/cdn/shop/files/AW_24_D.png?v=1733307059&width=1400',
  'https://baggit.com/cdn/shop/files/Modern_Muse_Desktop_Banner.png?v=1727788410&width=1400'
]
       

const BagAdd = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Pre = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const Next = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      
    
    }, 2000);
  });

  return (
    <div className="w-full  mx-auto  relative ">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={images[currentIndex]} 
          className="w-full h-full object-cover" 
        />
      </div>

    
      <button 
        onClick={Pre} 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10094;
      </button>

     
      <button 
        onClick={Next} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &#10095;
      </button>

    
      <div className="flex justify-center mt-[-20px] ">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`w-3 h-3 mx-1 rounded-full  ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BagAdd;
