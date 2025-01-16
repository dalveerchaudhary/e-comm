

const Customer = () => {
const data = [
  {
    img:`Shruti_Mahajan.avif`,
    CustomerName:`shruti mahajan`,
    para:  `"I recently bought the Baggit tote bag, and I absolutely love it! The quality is outstanding, and it's the perfect size for my daily needs. Plus, the stylish design gets me compliments everywhere I go. Highly recommend!"`

  },

  {
    img:`Leena_Madan.avif`,
    CustomerName:`leena madan`,
    para:  `"Baggit never disappoints. This is my third purchase from their website, and once again, I’m impressed with the durability and chic look of their bags. The customer service is also top-notch – very helpful and responsive."`

  },
  {
    img:`Nilam_Agarwal.avif`,
    CustomerName:`nilam agarwal`,
    para:  `"The Baggit clutch I bought is simply elegant. Perfect for evening outings and has enough space for all my essentials. The attention to detail is evident, and it feels luxurious without the high price tag."`

  },


]

  return (
    <>
      <h1 className="text-center my-6  text-3xl uppercase text-slate-950 font-semibold  ">customer testlmonials</h1>


    <div className="flex justify-around w-full h-auto">

        { data.map((d , idx)=>(
              <div key={idx} className="text-center w-[374px] h-auto border p-5 py-6">
                  <img src={d.img} alt="" className="w-[90px] h-[90px] rounded-2xl m-auto"/>
                  <p className="py-3 uppercase">{d.CustomerName}</p>
                  <p>{d.para}</p>
              </div>
          ))}
          </div>
    </>
  )
}

export default Customer
