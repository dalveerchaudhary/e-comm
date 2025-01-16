// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

const Cart = () => {
  const { cartItems, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className='flex  flex-wrap justify-center gap-4'>
          {cartItems.map(item => (
            <div key={item.id} className=" p-4 mb-2 border rounded-md shadow-md  w-[300px]">
              <div className='w-auto '>
              <img src={item.image} alt="" className="w-[296px] h-[296px]"/>
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
                <p>  Category - {item.category}</p>
                <p>Quantity: {item.quantity}</p>

                <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500  text-white px-5 py-2 mt-4"
              >
                Remove
              </button>
              </div>
              

             
            </div>
            
          ))}
           
        </div>
       
      )}
      <div className=' w-full p-6 h-52 bg-slate-700 text-center '>
      <h3 className="mt-4 font-bold">Total: ${totalAmount}</h3>
      <button className='bg-red-500 px-6 py-2 rounded mt-20 text-white'>
        place order
      </button>
      </div>
      
    </div>
  );
};

export default Cart;
//  export const {cartItems.length}  = ;
