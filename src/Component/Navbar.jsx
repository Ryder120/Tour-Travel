import React from 'react'
import SearchBar from './SeachBar';

const Navbar = () => {
  return (
    <div className="relative h-[650px] w-full">
      {/* Banner Image */}
      <img
        src="src/Component/pic/Rectangle 140.png"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center px-12 py-6">
          <h1 className="text-2xl font-bold text-white font-serif">tour guide</h1>
          <div className="flex items-center space-x-6">
            <a href="/home" className="hover:text-yellow-500 text-white">Home</a>
            <a href="/about" className="hover:text-yellow-500 text-white">About Us</a>
            <a href="/popular destination" className="hover:text-yellow-500 text-white">Popular Destinations</a>
            <a href="/tours" className="hover:text-yellow-500 text-white">Our Packages</a>
            <a href="/help" className="hover:text-yellow-500 text-white">Help</a>
            <button className="bg-[#FFDA32] hover:bg-yellow-400 cursor-pointer text-black font-bold py-2 px-6 rounded ml-4">Sign In</button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-md text-black">We Find The Best Tours For You</h2>
          <p className="text-lg drop-shadow-sm text-black max-w-2xl mx-auto mb-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet veniam consequat.
          </p>
          {/* Optional: Watch Video Button and Image */}
          <div className="flex flex-col items-center mt-6">
            <button className="flex items-center bg-white bg-opacity-70 rounded-full px-6 py-2 shadow mb-4">
              <svg className="w-8 h-8 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#E5F6F6" />
                <polygon points="10,8 16,12 10,16" fill="#38B2AC" />
              </svg>
              <span className="text-black font-semibold">Watch Video</span>
            </button>
            {/* <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80" alt="couple" className="w-32 h-32 object-cover rounded-full shadow-lg" /> */}
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute left-1/2 bottom-[-50px] transform -translate-x-1/2 z-20 w-full flex justify-center">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Navbar