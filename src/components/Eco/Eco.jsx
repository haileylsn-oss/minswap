import React from "react";
import { FaPlus, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import min from '../../assets/min.jpg';
import min2 from '../../assets/track.jpg';
import min3 from '../../assets/track2.jpg';
import { IoSwapHorizontal, IoStatsChart, IoLeaf, IoMenu } from "react-icons/io5";

const Eco = () => {
   const navigate = useNavigate();

  const navItems = [
    { name: "Trade", icon: <IoSwapHorizontal size={24} /> },
    { name: "Market", icon: <IoStatsChart size={24} /> },
    { name: "Farm", icon: <IoLeaf size={24} /> },
    { name: "Menu", icon: <IoMenu size={24} /> },
  ];

  return (
    <>
    <header className="bg-white space-y-6 pb-10 p-8 pt-6 md:pb-16 md:pt-10">
      {/* Hero Images */}
      <div className="-mx-4 flex justify-center md:mx-0 select-none">
        <img
          src="https://minswap.org/_next/static/media/hero-light.10274ec5.svg"
          alt="cardano's assets light"
          className="dark:hidden w-96 h-16"
        />
        <img
          src="https://minswap.org//_next/static/media/hero-dark.aa36376c.svg"
          alt="cardano's assets dark"
          className="hidden dark:block w-96 h-16"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:max-w-2xl mx-auto">
        Where the community trades on Cardano.
      </h1>

     {/* Trade Form */}
<div className="md:max-w-md mx-auto px-2 space-y-4"> {/* Added px-2 for small screens */}
  {/* You Pay Section */}
  <div className="w-full p-4 border rounded-2xl shadow hover:border-2 hover:p-5 space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">You pay</span>
      <div className="flex space-x-1 text-xs text-gray-500">
        <button className="px-1 rounded hover:bg-gray-200">Half</button>
        <button className="px-1 rounded hover:bg-gray-200">Max</button>
      </div>
    </div>
    <div className="flex items-center gap-2 flex-wrap"> {/* flex-wrap added */}
      <input
        type="text"
        placeholder="0.0"
        className="flex-1 text-2xl p-2 rounded-full border focus:outline-none min-w-0" 
      />
      <button className="flex items-center space-x-1 px-2 py-2 rounded-full bg-gray-200 hover:bg-gray-300 min-w-0">
        <img
          src="https://minswap.org/images/assets/cardano.png"
          alt="Cardano"
          className="w-6 h-6 rounded-full"
        />
        <span className="truncate">ADA</span> {/* prevent overflow text */}
        <FaChevronDown />
      </button>
    </div>
  </div>

  {/* Switch Button */}
  <div className="flex justify-center -my-5">
    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
      <FaPlus className="text-lg" />
    </button>
  </div>

  {/* You Receive Section */}
  <div className="w-full p-4 border rounded-2xl shadow hover:border-2 hover:p-5 space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">You receive</span>
    </div>
    <div className="flex items-center gap-2 flex-wrap">
      <input
        type="text"
        placeholder="0.0"
        className="flex-1 text-2xl p-2 rounded-full border focus:outline-none min-w-0"
      />
      <button className="flex items-center space-x-1 px-2 py-2 rounded-full bg-gray-200 hover:bg-gray-300 min-w-0">
        <FaPlus />
        <span className="truncate">Select token</span>
        <FaChevronDown />
      </button>
    </div>
  </div>

  {/* Connect Wallet Button */}
  <Link to={'/wallet'}>
    <button className="w-full px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
      Connect wallet
    </button>
  </Link>  <Link to={'/wallet'}>
    <button className="w-full px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
      Claim Airdrop
    </button>
  </Link>
</div>


<div className="flex flex-wrap gap-2 justify-center">
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
     Rectification
    </button>
  </Link> 
    <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
     Migration
    </button>
  </Link> 
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
     Missing Balance
    </button>
  </Link> 
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
     Stalking issues
    </button>
  </Link> 
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
     Assets Recovery
    </button>
  </Link> 
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
    Buy
    </button>
  </Link> 
   <Link to={'/wallet'}>
    <button className=" px-6 mt-4 py-4 rounded-full bg-[#89aaff] text-white text-lg hover:bg-purple-900">
    Sell
    </button>
  </Link> 
</div>


      {/* Description */}
      <div className="text-center text-gray-500 text-md md:max-w-sm mx-auto">
        Trade your favorite Cardano tokens with low fees, earn yields and stake
        for real yield.
      </div>
    </header>
    <section className="space-y-4 bg-white p-8 py-6 md:space-y-6 md:py-16">
      {/* Heading */}
      <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
        DeFi Beats Here: Our Numbers
      </h4>

      {/* Subheading */}
      <p className="text-md text-gray-500 md:max-w-xl">
        See Minswap's impact on Cardano DeFi with real-time data.
      </p>

      {/* Numbers Grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
        {/* Traded on Minswap */}
        <div className="space-y-1 rounded-2xl bg-blue-100 p-5 md:p-6">
          <div className="text-xl md:text-2xl font-bold text-gray-900">$4.16B</div>
          <p className="text-sm text-gray-500">Traded on Minswap</p>
        </div>

        {/* Successful trades */}
        <div className="space-y-1 rounded-2xl bg-blue-100 p-5 md:p-6">
          <div className="text-xl md:text-2xl font-bold text-gray-900">6,053,411</div>
          <p className="text-sm text-gray-500">Successful trades</p>
        </div>

        {/* TVL */}
        <div className="space-y-1 rounded-2xl bg-blue-100 p-5 md:p-6">
          <div className="text-xl md:text-2xl font-bold text-gray-900">$52.87M</div>
          <p className="text-sm text-gray-500">TVL</p>
        </div>

        {/* Active traders */}
        <div className="space-y-1 rounded-2xl bg-blue-100 p-5 md:p-6">
          <div className="text-xl md:text-2xl font-bold text-gray-900">258,204</div>
          <p className="text-sm text-gray-500">Active traders</p>
        </div>
      </div>
    </section>
    <section className="space-y-4 bg-white p-8 py-6 md:space-y-6 md:py-16">
      <div className="font-interDisplay text-2xl font-bold ">
        Trade Smarter, Not Harder
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">

        {/* Swap Card */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl bg-[#CEDBFF] px-4 py-6 dark:bg-[#A4B7EA] md:space-y-10 md:rounded-3xl md:p-8">
          <div className="font-interDisplay text-title-h5 text-cpn-tent md:text-title-h4 text-2xl mb-6 font-bold">
            Swap thousands of tokens on Cardano and access the deepest liquidity on chain.
          </div>

          <div className="select-none space-y-2 bg-gray-100 rounded-full">

            {/* Token Item */}
            <a
              className="flex items-center justify-between space-x-2 overflow-hidden rounded-2xl bg-itr-tone-tent hover:opacity-90 px-4 md:rounded-full cursor-pointer"
              href="/wallet"
            >
              <div className="flex items-center truncate py-4">
                <div className="shrink-0 flex items-center">
                  <span className="relative block rounded-full w-8 h-8 shrink-0">
                    <img
                      alt="USDM"
                      loading="lazy"
                      width="64"
                      height="64"
                      className="rounded-full w-8 h-8 shrink-0"
                      src="https://asset-logos.minswap.org/c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad0014df105553444d"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 shrink-0 rounded-full border border-sf-pri-sub bg-base-bg p-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="text-itr-tone-hl w-3 h-3"
                      >
                        <path d="M10.007 2.10377C8.60544 ... L6.75977 11.7573Z" />
                      </svg>
                    </div>
                  </span>
                  <div className="ml-2 truncate font-bold text-label-lg-sec text-itr-tentPri-df">USDM</div>
                </div>
                <div className="ml-1 truncate text-gray-500 text-label-lg-sec text-itr-tentPri-sub">USDM</div>
              </div>
              <div className="flex flex-row items-end py-4 md:flex-row md:items-center md:gap-x-2">
                <div className="truncate text-label-md-sec text-itr-tentPri-df md:text-label-lg-sec">
                  <span>$1.0272</span>
                </div>
                <div className="flex items-center text-base-sc text-green-600">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 8L18 14H6L12 8Z" />
                  </svg>
                  <div className="text-label-sm-sec md:text-label-md-sec ">1.61%</div>
                </div>
              </div>
            </a>

            {/* Add other tokens in same pattern */}
          </div>
          <div className="select-none space-y-2 bg-gray-100 rounded-full">

            {/* Token Item */}
            <a
              className="flex items-center justify-between space-x-
            overflow-hidden rounded-2xl bg-itr-tone-tent hover:opacity-90 px-4 md:rounded-full cursor-pointer"
              href="/wallet"
            >
              <div className="flex items-center truncate py-4">
                <div className="shrink-0 flex items-center">
                  <span className="relative block rounded-full w-8 h-8 shrink-0">
                    <img
                      alt="USDM"
                      loading="lazy"
                      width="64"
                      height="64"
                      className="rounded-full w-8 h-8 shrink-0"
                      src="https://asset-logos.minswap.org/fe7c786ab321f41c654ef6c1af7b3250a613c24e4213e0425a7ae45655534441"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 shrink-0 rounded-full border border-sf-pri-sub bg-base-bg p-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="text-itr-tone-hl w-3 h-3"
                      >
                        <path d="M10.007 2.10377C8.60544 ... L6.75977 11.7573Z" />
                      </svg>
                    </div>
                  </span>
                  <div className="ml-2 truncate font-bold text-label-lg-sec text-itr-tentPri-df">USDA</div>
                </div>
                <div className="ml-1 truncate text-gray-500 text-label-lg-sec text-itr-tentPri-sub">USDA</div>
              </div>
              <div className="flex flex-row items-end py-4 md:flex-row md:items-center md:gap-x-2">
                <div className="truncate text-label-md-sec text-itr-tentPri-df md:text-label-lg-sec">
                  <span>$1.037</span>
                </div>
                <div className="flex items-center text-base-sc text-green-600">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 8L18 14H6L12 8Z" />
                  </svg>
                  <div className="text-label-sm-sec md:text-label-md-sec ">2.94%</div>
                </div>
              </div>
            </a>

            {/* Add other tokens in same pattern */}
          </div>
          <div className="select-none space-y-2 bg-gray-100 rounded-full">

            {/* Token Item */}
            <a
              className="flex items-center justify-between space-x-2 overflow-hidden rounded-2xl bg-itr-tone-tent hover:opacity-90 px-4 md:rounded-full cursor-pointer"
              href="/wallet"
            >
              <div className="flex items-center truncate py-4">
                <div className="shrink-0 flex items-center">
                  <span className="relative block rounded-full w-8 h-8 shrink-0">
                    <img
                      alt="USDM"
                      loading="lazy"
                      width="64"
                      height="64"
                      className="rounded-full w-8 h-8 shrink-0"
                      src="https://asset-logos.minswap.org/f6099832f9563e4cf59602b3351c3c5a8a7dda2d44575ef69b82cf8d"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 shrink-0 rounded-full border border-sf-pri-sub bg-base-bg p-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="text-itr-tone-hl w-3 h-3"
                      >
                        <path d="M10.007 2.10377C8.60544 ... L6.75977 11.7573Z" />
                      </svg>
                    </div>
                  </span>
                  <div className="ml-2 truncate font-bold text-label-lg-sec text-itr-tentPri-df">OADA</div>
                </div>
                <div className="ml-1 truncate text-gray-500 text-label-lg-sec text-itr-tentPri-sub">OADA</div>
              </div>
              <div className="flex flex-row items-end py-4 md:flex-row md:items-center md:gap-x-2">
                <div className="truncate text-label-md-sec text-itr-tentPri-df md:text-label-lg-sec">
                  <span>$0.4953</span>
                </div>
                <div className="flex items-center text-base-sc text-red-600">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 8L18 14H6L12 8Z" />
                  </svg>
                  <div className="text-label-sm-sec md:text-label-md-sec ">2.49%</div>
                </div>
              </div>
            </a>

            {/* Add other tokens in same pattern */}
          </div>
          <div className="select-none space-y-2 bg-gray-100 rounded-full">

            {/* Token Item */}
            <a
              className="flex items-center justify-between space-x-2 overflow-hidden rounded-2xl bg-itr-tone-tent hover:opacity-90 px-4 md:rounded-full cursor-pointer"
              href="/wallet"
            >
              <div className="flex items-center truncate py-4">
                <div className="shrink-0 flex items-center">
                  <span className="relative block rounded-full w-8 h-8 shrink-0">
                    <img
                      alt="USDM"
                      loading="lazy"
                      width="64"
                      height="64"
                      className="rounded-full w-8 h-8 shrink-0"
                      src="https://minswap.org/images/assets/min.png"
                    />
                    <div className="absolute -bottom-1.5 -right-1.5 shrink-0 rounded-full border border-sf-pri-sub bg-base-bg p-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="text-itr-tone-hl w-3 h-3"
                      >
                        <path d="M10.007 2.10377C8.60544 ... L6.75977 11.7573Z" />
                      </svg>
                    </div>
                  </span>
                  <div className="ml-2 truncate font-bold text-label-lg-sec text-itr-tentPri-df">MIN</div>
                </div>
                <div className="ml-1 truncate text-gray-500 text-label-lg-sec text-itr-tentPri-sub">Minswap</div>
              </div>
              <div className="flex flex-row items-end py-4 md:flex-row md:items-center md:gap-x-2">
                <div className="truncate text-label-md-sec text-itr-tentPri-df md:text-label-lg-sec">
                  <span>$0.0111</span>
                </div>
                <div className="flex items-center text-base-sc text-red-600">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 8L18 14H6L12 8Z" />
                  </svg>
                  <div className="text-label-sm-sec md:text-label-md-sec ">2.29%</div>
                </div>
              </div>
            </a>

            {/* Add other tokens in same pattern */}
          </div>
        </div>

        {/* Staking Card */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl bg-[#C8C2F1] px-4 pb-6 dark:bg-[#AFACC9] md:space-y-10 md:rounded-3xl md:px-8 md:pb-8">
        
        <Link to={'/wallet'}>  <img src={min} alt="" />
        </Link>
        
      
          <div className="font-interDisplay text-title-h5 text-cpn-tent md:text-title-h4 text-2xl p-3 font-bold">
            Soft stake your MIN today to start earning rewards and boosting your portfolio.
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 rounded-2xl bg-[#ABD7DF] px-4 pb-6 dark:bg-[#ABD7DF] md:space-y-10 md:rounded-3xl md:px-8 md:pb-8">
        
        <Link to={'/wallet'}>  <img src={min2} alt="" />
        </Link>
        
      
          <div className="font-interDisplay text-title-h5 text-cpn-tent md:text-title-h4 text-2xl p-3 font-bold">
            Track your investment performance, Customize your profile, add multiple wallets and more.
  
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-4 rounded-2xl bg-[#F1DBE1] px-4 pb-6 dark:bg-[#F1DBE1] md:space-y-10 md:rounded-3xl md:px-8 md:pb-8">
           <div className="font-interDisplay text-title-h5 text-cpn-tent md:text-title-h4 text-2xl p-3 font-bold">
          Add tokens to liquidity pools and earn fees while other people trade.
          </div>
        <Link to={'/wallet'}>  <img src={min3} alt="" />
        </Link>
        
      
       
        </div>

       
      </div>
    </section>
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate("/wallet")}
            className="flex flex-col items-center justify-center py-2 cursor-pointer text-gray-700 hover:text-purple-600"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
    
    </>
  );
};

export default Eco;
