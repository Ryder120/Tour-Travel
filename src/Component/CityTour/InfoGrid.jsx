import React from 'react';
import { FaMobileAlt, FaClock, FaUserCheck, FaGlobe, FaTimesCircle, FaShieldAlt } from 'react-icons/fa';

const InfoGrid = () => {
  return (
    <div className="bg-gray-50  flex  rounded-md w-full max-w-4xl  ml-14 p-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 h-full">
        {/* Free Cancellation */}
        <div className="flex items-start space-x-3">
          <FaTimesCircle className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Free Cancellation</h4>
            <p className="text-sm text-gray-600">Cancel up to 24 hours in advance to receive a full refund</p>
          </div>
        </div>

        {/* Health Precautions */}
        <div className="flex items-start space-x-3">
          <FaShieldAlt className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Health Precautions</h4>
            <p className="text-sm text-gray-600">Special health and safety measures apply. Learn more</p>
          </div>
        </div>

        {/* Mobile Ticketing */}
        <div className="flex items-start space-x-3">
          <FaMobileAlt className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Mobile Ticketing</h4>
            <p className="text-sm text-gray-600">Use your phone or print your voucher</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-start space-x-3">
          <FaClock className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Duration 3.5 Hours</h4>
            <p className="text-sm text-gray-600">Check availability to see starting times.</p>
          </div>
        </div>

        {/* Instant Confirmation */}
        <div className="flex items-start space-x-3">
          <FaUserCheck className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Instant Confirmation</h4>
            <p className="text-sm text-gray-600">Don’t wait for the confirmation!</p>
          </div>
        </div>

        {/* Live Tour Guide */}
        <div className="flex items-start space-x-3">
          <FaGlobe className="text-teal-600 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-800">Live Tour Guide In English</h4>
            <p className="text-sm text-gray-600">English</p>
          </div>
        </div>

        
      </div>
      
      
    </div>
    
  );
};

export default InfoGrid;