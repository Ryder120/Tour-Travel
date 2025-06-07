import React from 'react'
import Navbar from '../Navbar'
import { MdDoNotDisturb } from "react-icons/md";

const VintageDouble = () => {
  return (
    <div className="relative z-10 h-full flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center px-12 py-4">
          <h1 className="text-2xl font-bold text-black font-serif">tour guide</h1>
          <div className="flex items-center space-x-6">
            <a href="/home" className="hover:text-yellow-500 text-black">Home</a>
            <a href="/about" className="hover:text-yellow-500 text-black">About Us</a>
            <a href="/popular destination" className="hover:text-yellow-500 text-black">Popular Destinations</a>
            <a href="/tours" className="hover:text-yellow-500 text-black">Our Packages</a>
            <a href="/help" className="hover:text-yellow-500 text-black">Help</a>
            <button className="bg-[#FFDA32] hover:bg-yellow-400 cursor-pointer text-black font-bold py-2 px-6 rounded ml-4">Sign In</button>
          </div>
        </div>



        {/*Vintage*/}
        <div className=" bg-gray-200 mx-6  md:block w-mx h-0.5 flex w-full" />
        <div className='mx-w-9xl mx-auto mt-8 p-12'>
            <div className="bg-white w-9/12 rounded-lg  p-8">
                <h2 className="text-4xl font-semibold mb-6">Vintage Double Decker  Bus Tour & Thames River Cruise </h2>
                <p className="text-gray-700 mb-6">Explore the charm of vintage double-decker buses as you embark on a unique city tour. Experience the sights and sounds of the city from a different perspective.</p>
              <div className="flex items-center mb-6 mx-w-900 ">
                <img src="src/Component/pic/Rectangle 171.png" alt="Vintage Double Decker Bus" className=" h-130 object-cover   mb-3" />
                <div className="bg-white w-3/12 rounded-lg p-8 flex justify-center items-center ml-4">
  <form className="flex flex-col items-center shadow-md h-auto rounded-lg w-500 ">
    <h1 className="text-xl font-bold mb-4">Booking</h1>
    <div className=" bg-gray-400 mx-6  md:block w-mx h-0.5 flex" />
    <label htmlFor="from" className=" text-black self-start mb-1 ml-5 text-sm">From</label>
    <input
      id="from"
      type="date"
      className="border border-gray-300 rounded-md p-2 mb-2 w-60 bg-gray-200"
    />
    <label htmlFor="to" className="text-black self-start mb-1 ml-5 text-sm">To</label>
    <input
      id="to"
      type="date"
      className="border border-gray-300 rounded-md p-2 mb-2  w-60 bg-gray-200"
    />
    <label htmlFor="guests" className="text-black self-start mb-1 ml-5 text-sm ">No. of Guests</label>
    <input
      id="guests"
      type="text"
      className="border border-gray-300 rounded-md p-2 mb-4  w-60 bg-gray-200"
      placeholder="Enter number"
    />
    <p className='text-gray-500'>Subtotal</p>
    <p className='text-3xl text-teal-500'>$78.90</p><br></br>
    <button type="button" className="border border-gray-300 w-60 hover:bg-teal-400 rounded-md p-2  mb-2">Confirm Booking</button>
    <button type="button" className="border border-gray-300 w-60 hover:bg-teal-400 rounded-md p-2  mb-2">Save To Wishlist</button>
    <button type="button" className="border border-gray-300 w-60 hover:bg-teal-400 rounded-md p-2">Share The Activity</button>
  </form>
</div>
              </div>
            <div className='flex gap-4 px-1   '>
<img src="src/Component/pic/Rectangle 148.png" alt="Vintage Double Decker Bus" className=" h-auto object-cover w-33" />
                <img src="src/Component/pic/Rectangle 149.png" alt="Thames River Cruise" className=" h-auto object-cover w-33" />
            <img src="src/Component/pic/Rectangle 150.png" alt="Vintage Double Decker Bus" className=" h-auto object-cover w-33  " />
                <img src="src/Component/pic/Rectangle 151.png" alt="Thames River Cruise" className=" h-auto object-cover w-33" />
            <img src="src/Component/pic/Rectangle 152.png" alt="Vintage Double Decker Bus" className=" h-auto object-cover w-33" />
                <img src="src/Component/pic/Rectangle 153.png" alt="Thames River Cruise" className="h-auto object-cover w-33" />
            </div>
            
            </div>
            </div>


        </div>
        
  )
}

export default VintageDouble