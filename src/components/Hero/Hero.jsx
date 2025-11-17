import React from "react";
import { FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="sticky top-0 bg-white flex justify-between items-center px-4 py-3 shadow-md z-10">
      {/* Logo */}
      <Link to={'/wallet'}> 
      <p className="flex-shrink-0">
        <img
          src="https://minswap.org/_next/static/media/minswap-v2-logo.25f219f1.svg"
          alt="Minswap v2"
          className="w-6 h-6"
        />
      </p>
      </Link>


       <div className="hidden md:flex space-x-6">
        <Link
          to="/wallet"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Trade
        </Link>
        <Link
          to="/wallet"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Market
        </Link>
        <Link
          to="/wallet"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Earn
        </Link>
        <Link
          to="/wallet"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Launch
        </Link>
      </div>



  <div className="flex items-center space-x-4">
        {/* Search Button */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
          </svg>
        </button>

        {/* Price Badge */}
        <div className="flex items-center space-x-1 bg-gray-200 rounded-full px-2 py-1">
          <img
            src="https://minswap.org/_next/static/media/minswap-v2-logo.25f219f1.svg"
            alt="Cardano"
            className="w-4 h-4 rounded-full"
          />
          <span className="text-sm font-medium">$0.494</span>
          <span className="text-sm text-green-600 ml-1">+1.81%</span>
        </div>
 <div className="flex items-center space-x-4">
        {/* Connect Wallet Button */}
        <Link to={'/wallet'}> <button className="flex items-center px-3 py-1 rounded-full bg-[#89aaff] text-black hover:bg-blue-700">
          <FaWallet className="mr-2" /> Connect
        </button></Link>
       
      </div>
      </div>
    </div>
   
  );
};

export default Hero;
