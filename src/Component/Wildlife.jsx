import React from "react";
import { FaStar, FaHeart, FaShareAlt } from "react-icons/fa";

const Wildlife = () => {
    return (
        <div
            className="relative flex items-center justify-center min-h-[500px] overflow-hidden mt-15"
            style={{
                background: "linear-gradient(104deg, rgba(20, 0, 40, 0.92) -2%, rgba(5, 50, 60, 0.92) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
            }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: "url('src/Component/pic/rectangle 158.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.2,
                }}
            />
            {/* Custom shaped image */}
            <div className="relative z-10 w-[350px] h-[350px] flex items-center justify-center">
                {/* Outer blue blob */}
                <svg
                    className="absolute w-full h-full z-0"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M320,60 Q400,200 250,350 Q100,400 60,250 Q0,100 150,60 Q250,0 320,60 Z"
                        fill="#C6FCFF"
                    />
                </svg>
                {/* Middle yellow blob */}
                <svg
                    className="absolute w-[320px] h-[320px] z-10"
                    style={{ left: 20, top: 40 }}
                    viewBox="0 0 320 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M220,40 Q320,160 180,300 Q60,320 40,180 Q0,60 120,40 Q180,0 220,40 Z"
                        fill="#FFF9C6"
                    />
                </svg>
                {/* Main image clipped with blob */}
                <svg
                    className="absolute w-[300px] h-[300px] z-20"
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id="blobClip">
                            <path
                                d="M210,40 Q300,150 170,270 Q60,300 40,170 Q0,60 120,40 Q170,0 210,40 Z"
                            />
                        </clipPath>
                    </defs>
                    <image
                        href="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                        width="300"
                        height="300"
                        clipPath="url(#blobClip)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </svg>
            </div>
            {/* Content */}
            <div className="relative z-20 ml-30 max-w-xl bg-transparent">
                <span className="inline-block px-4 py-1 mb-3 text-xs font-semibold bg-cyan-100 text-cyan-800 rounded-full">
                    TRENDING NOW
                </span>
                <h1 className="text-5xl font-bold text-white drop-shadow mb-2">Wilderlife of Alaska</h1>
                <div className="flex items-center text-gray-200 text-sm mb-2">
                    <span className="mr-2">Alaska, USA</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} color="#FFA500" className="mr-1" />
                        ))}
                        <FaStar color="#ddd" className="mr-1" />
                        <span className="ml-2 font-semibold text-white">4.3</span>
                        <span className="ml-1 text-neutral-200">(300 reviews)</span>
                    </span>
                </div>
                <p className="text-white/90 mb-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="flex items-center gap-4">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-7 py-2 rounded-full shadow transition">
                        Book Now
                    </button>
                    <button className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition">
                        <FaHeart />
                    </button>
                    <button className="bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition">
                        <FaShareAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Wildlife;