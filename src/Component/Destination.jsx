import React from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Destination = () => (
    <div className="bg-white py-16">
        <div className="w-full h-auto">
            {/* Flex container for heading, paragraph, and buttons */}
            <div className="flex items-center px-16 justify-between mb-5">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Featured Destinations</h2>
                    <p className="text-gray-600 max-w-xl">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                    </p>
                </div>
                <div className="flex gap-3 ml-6">
                    <button className="border border-gray-200 rounded-full w-10 h-10 bg-white shadow hover:bg-gray-100 flex items-center justify-center transition">
                        <FaChevronLeft />
                    </button>
                    <button className="border border-gray-200 rounded-full w-10 h-10 bg-gradient-to-br from-white via-white to-yellow-200 shadow hover:bg-yellow-100 flex items-center justify-center transition">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            {/* Cards Section */}
            <div className="w-full flex gap-5">
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
    </div>
);

export default Destination;