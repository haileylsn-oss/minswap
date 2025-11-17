import React from "react";
import { Link } from "react-router-dom";

const ConnectorApp = () => {
  return (
    <section className="space-y-4 py-6 bg-white  md:space-y-6 md:py-16">
      {/* App Promo */}
      <div className="relative rounded-[20px] bg-sf-hl-df md:flex md:items-start md:justify-between">
        <div className="relative z-10 space-y-4 px-4 py-6 md:p-12">
          <div className="inline-flex items-center gap-x-2 rounded-full bg-itr-tone-tent p-2 pr-4 shadow-lightLg">
            <img
              alt="MIN"
              loading="lazy"
              width="64"
              height="64"
              className="size-6 shrink-0 rounded-full dark:hidden"
              src="https://minswap.org/images/assets/min.png"
            />
            <img
              alt="MIN"
              loading="lazy"
              width="64"
              height="64"
              className="hidden size-6 shrink-0 rounded-full dark:block"
              src="https://minswap.org/images/assets/min-dark.png"
            />
            <div className="text-label-sm-sec">Minswap App</div>
          </div>

          <div className="font-interDisplay text-title-h4 text-itr-tentPri-df">
            Trade on the go. Anytime, anywhere.
          </div>
          <div className="max-w-[500px] text-p-md text-itr-tentPri-sub">
            Trade your favorite tokens, farm and track your portfolio straight from your phone.
          </div>

          <Link to="/wallet">
            <div className="inline-flex items-center space-x-2 rounded-xl bg-itr-tone-tent px-4 py-2 shadow-lightLg hover:shadow-lg cursor-pointer">
              <img
                alt="Google Play"
                loading="lazy"
                width="32"
                height="32"
                className="size-8 shrink-0"
                src="https://minswap.org/images/chplay.svg"
              />
              <div className="text-itr-tentPri-df">
                <div className="text-label-xs-sec">Download on the</div>
                <div className="font-interDisplay text-title-h6">Google Play</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="z-0 mx-auto px-10 md:mx-0 md:self-end md:pr-12 md:pt-12 lg:pr-20 lg:pt-20">
          <img
            alt="iphone preview"
            loading="lazy"
            width="1080"
            height="1230"
            className="mx-auto w-full max-w-sm"
            src="https://minswap.org/_next/static/media/iphone.56e29283.webp"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {/* Blog Card */}
        <div className="flex flex-col items-start justify-start space-y-4 rounded-[20px] bg-sf-hl-df px-4 py-6 md:p-6">
          <div className="font-interDisplay text-title-h4 text-itr-tentPri-df">Stay in the know!</div>
          <div className="text-p-md text-itr-tentPri-sub">
            Updates, stories, and announcements from the Minswap Labs team.
          </div>
          <div className="hidden md:block flex-1"></div>
          <Link to="/wallet">
            <button className="flex select-none items-center justify-center space-x-2 whitespace-nowrap transition-colors border outline-none cursor-pointer bg-itr-tone-pri border-transparent text-cpn-tent hover:bg-itr-tentSec-df hover:border-transparent hover:text-itr-tone-tent active:bg-itr-tentSec-sub active:border-transparent active:text-itr-tone-tent disabled:border-transparent disabled:bg-sf-pri-dis disabled:text-itr-tentSec-dis text-label-md-sec px-6 py-2.5 rounded-full">
              <span>Read our blog</span>
            </button>
          </Link>
        </div>

        {/* Community Card */}
        <div className="space-y-4 rounded-[20px] bg-sf-hl-df px-4 py-6 md:p-6">
          <div className="font-interDisplay text-title-h4 text-itr-tentPri-df">Where Undercats meet and meow!</div>
          <div className="text-p-md text-itr-tentPri-sub">
            Minswap’s global community of users, developers, designers & educators drives the success of the Protocol. Join the conversation.
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            {/* Replace all social links with /wallet */}
            <Link to="/wallet" className="relative rounded-2xl p-2.5 hover:-top-px hover:shadow-lg md:p-3 bg-brand-strong text-brand-white">
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" className="size-7 shrink-0 md:size-9">
                <path d="M0.878107 1.66675L7.95639 11.1309L0.833496 18.8258H2.4367L8.67293 12.0887L13.7114 18.8258H19.1668L11.6901 8.82933L18.3202 1.66675H16.717L10.9739 7.87129L6.3335 1.66675H0.878107ZM3.23569 2.84754H5.74187L16.8089 17.645H14.3028L3.23569 2.84754Z" fill="currentColor"></path>
              </svg>
            </Link>
            <Link to="/wallet" className="relative rounded-2xl p-2.5 hover:-top-px hover:shadow-lg md:p-3 bg-[#C4C9FE] text-[#222229]">
              Discord
            </Link>
            <Link to="/wallet" className="relative rounded-2xl p-2.5 hover:-top-px hover:shadow-lg md:p-3 bg-[#FF9771] text-[#1B0F0B]">
              Reddit
            </Link>
            <Link to="/wallet" className="relative rounded-2xl p-2.5 hover:-top-px hover:shadow-lg md:p-3 bg-[#A1D7FF] text-[#1D2E3C]">
              Telegram
            </Link>
            <Link to="/wallet" className="relative rounded-2xl p-2.5 hover:-top-px hover:shadow-lg md:p-3 bg-sf-pri-df text-itr-tentPri-df">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectorApp;
