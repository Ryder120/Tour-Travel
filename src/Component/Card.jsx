import React from "react";
import { FaCarSide, FaUsers, FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";


const Card = ({
    image,
    title,
    duration = "2 hours",
    reviews = 584,
    price = 35,
    rating = 4,
}) => {
    return (
        <div className="w-[270px] bg-white rounded-[3px] shadow-md overflow-hidden flex flex-col m-4">
            <img src={image} alt={title} className="w-full h-[190px] object-cover" />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-start font-semibold mb-3">{title}</h3>
                <ul className="mb-4 space-y-1 text-gray-700">
                    <li className="flex items-center gap-2 text-sm">
                        <MdAccessTime /> Duration {duration}
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <FaCarSide /> Transport Facility
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                        <FaUsers /> Family Plan
                    </li>
                </ul>
                <div className="flex justify-between items-end  border-t  border-gray-100">
                    <div className="flex flex-col items-start text-sm">
                        <div className="flex flex-row">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    color={i < rating ? "#FFA500" : "#ddd"}
                                    size={16}
                                />
                            ))}
                        </div>
                        <span className="mt-1 text-gray-500 text-xs">{reviews} reviews</span>
                    </div>
                    <div className="text-right">
                        <span className="text-green-500 font-semibold text-lg">${price.toFixed(2)}</span>
                        <span className="block text-gray-500 text-xs">per person</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;