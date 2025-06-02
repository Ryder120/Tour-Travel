import React from 'react'
import Card from './Card' 

const categories = [
    { name: "Public Transportations", color: "text-purple-600 bg-purple-50", icon: "🚍" },
    { name: "Nature & Adventure", color: "text-teal-600 bg-teal-50", icon: "🌲" },
    { name: "Private Transportations", color: "text-yellow-600 bg-yellow-50", icon: "🚗" },
    { name: "Business Tours", color: "text-red-600 bg-red-50", icon: "💼" },
    { name: "Local Visit", color: "text-blue-600 bg-blue-50", icon: "📍" },
];

const cityList = [
    'New York',
    'California',
    'Alaska',
    'Sidney',
    'Dubai',
    'London',
    'Tokyo',
    'Delhi',
];

const Cities = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4  min-h-screen">
            <h2 className="text-5xl font-bold mt-25 drop-shadow-md text-black">Explore Popular Cities</h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto mt-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {cityList.map((city) => (
                    <button
                        key={city}
                        className={`py-3 px-10 text-base font-medium cursor-pointer bg-white rounded-full border border-gray-300 hover:bg-teal-400 hover:text-white transition-colors duration-200`}
                    >
                        {city}
                    </button>
                ))}
            </div>
            {/* City Image and Categories Section */}
            <div className="w-full flex justify-center mt-8">
                <div className="w-full max-w-7xl relative">
                    <img
                        src="src/Component/pic/Rectangle 156.png"
                        alt="Alaska"
                        className="w-full h-[400px] object-cover rounded-none shadow-lg"
                    />
                    <div className="absolute left-0 right-0 shadow-lg -bottom-23 bg-[#F9FDFF] mx-auto w-[95%]">
                        <div className="flex flex-col md:flex-row bg-white rounded-[4px] shadow-sm px-8 py-6 border border-blue-100 items-start md:items-center">
                            <div className=" w-4/8  text-left">
                                <h1 className="font-bold text-3xl md:text-4xl mb-2 text-black">Alaska</h1>
                                <p className="text-gray-500 text-base md:text-sm">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-4 md:mt-0 md:ml-10">
                                {categories.map((cat) => (
                                    <span
                                        key={cat.name}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm shadow-sm border ${cat.color}`}
                                    >
                                        <span>{cat.icon}</span>
                                        {cat.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cards Section */}
            <div className="w-full max-w-7xl mx-auto mt-32 flex flex-wrap justify-center gap-5">
                <Card
                    image="src/Component/pic/rectangle 129.png"
                    title="Alaska: Westminster to Greenwich River Thames"
                    duration="2 hours"
                    reviews={584}
                    price={35}
                    rating={5}
                />
                <Card
                    image="src/Component/pic/rectangle 130.png"
                    title="Alaska: Vintage Double Decker Bus Tour & Thames"
                    duration="2 hours"
                    reviews={584}
                    price={35}
                    rating={4}
                />
                <Card
                    image="src/Component/pic/rectangle 131.png"
                    title="Alaska: Magic of London Tour with Afternoon Tea at"
                    duration="2 hours"
                    reviews={584}
                    price={35}
                    rating={4}
                />
                <Card
                    image="src/Component/pic/rectangle 132.png"
                    title="Alaska: Magic of London Tour with Afternoon Tea at"
                    duration="2 hours"
                    reviews={584}
                    price={35}
                    rating={3}
                />
            </div>
        </div>
    )
}

export default Cities