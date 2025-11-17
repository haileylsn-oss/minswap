// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="space-y-4 pt-4 md:space-y-8 md:pt-8 bg-white p-8">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {/* Product */}
        <div className="space-y-4 p-2">
          <div className="font-interDisplay text-title-h6 text-itr-tentPri-df">Product</div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Trade</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Tokens</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Pools</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Zap In</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Farm</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Launch Bowl</Link></div>
        </div>

        {/* Learn */}
        <div className="space-y-4 p-2">
          <div className="font-interDisplay text-title-h6 text-itr-tentPri-df">Learn</div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Docs</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Whitepaper</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Blog</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Governance</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">DAO treasury</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">MIN farm rebalance</Link></div>
        </div>

        {/* About */}
        <div className="space-y-4 p-2">
          <div className="font-interDisplay text-title-h6 text-itr-tentPri-df">About</div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Brand kit</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">CoinMarketCap</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">CoinGecko</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">About us</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Contact us</Link></div>
        </div>

        {/* Join Us */}
        <div className="space-y-4 p-2">
          <div className="font-interDisplay text-title-h6 text-itr-tentPri-df">Join Us</div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">X</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Discord</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Reddit</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Telegram</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Github</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Medium</Link></div>
          <div><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Forum</Link></div>
        </div>
      </div>

      <div className="h-px bg-bd-pri-sub"></div>

      <div className="-ml-4 -mt-4 flex flex-wrap items-center p-2 text-p-sm text-itr-tentPri-sub md:ml-0 md:mt-0 md:justify-between md:space-x-2">
        <div className="ml-4 mt-4 md:ml-0 md:mt-0">© Minswap Labs</div>
        <div className="ml-4 mt-4 md:ml-0 md:mt-0"><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Terms of service</Link></div>
        <div className="ml-4 mt-4 md:ml-0 md:mt-0"><Link className="text-p-sm text-itr-tentPri-sub hover:text-itr-tentPri-df" to="/wallet">Privacy policy</Link></div>
        <div className="ml-4 mt-4 md:ml-0 md:mt-0">
          <div className="flex cursor-pointer items-center space-x-2 rounded-full bg-sf-pri-sub px-3 py-2 hover:bg-sf-pri-hv">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon size-4 shrink-0 text-itr-tentPri-df">
              <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"/>
            </svg>
            <span className="text-sm text-itr-tentPri-sub">Light</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
