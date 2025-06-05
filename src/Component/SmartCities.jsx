import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";

const SmartCities = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[500px] px-6 py-12"
      style={{
        background: "linear-gradient(104deg, rgba(20, 0, 40, 0.92) -2%, rgba(5, 50, 60, 0.92) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1400&q=80')",
        }}
      />

      {/* Mobile UI Preview */}
      <div className="relative z-10 w-[300px] h-[600px] flex items-center justify-center mb-10 md:mb-0 md:mr-10">
        {/* SVG blobs background */}
        <svg
          className="absolute w-[350px] h-[350px] -top-10 -left-10"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
        </svg>
        <svg
          className="absolute w-[300px] h-[300px] top-10 left-10"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
        </svg>
        {/* WORKING Mobile UI Image */}
        <img
          src="src/Component/pic/group 243.png"
          alt="App UI Preview"
          className="relative z-20 rounded-xl shadow-xl w-[280px]"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 text-white max-w-lg text-center md:text-left">
        <span className="inline-block px-4 py-1 mb-3 text-xs font-semibold bg-cyan-100 text-cyan-800 rounded-full">
          NEW RELEASE
        </span>
        <h1 className="text-4xl font-bold mb-4 drop-shadow">
          Smart City Tour Mobile App
        </h1>
        <p className="text-white/90 mb-6">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow transition">
            <FaApple className="text-lg" />
            Download For iOS
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow transition">
            <FaAndroid className="text-lg" />
            Download For Android
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartCities;
