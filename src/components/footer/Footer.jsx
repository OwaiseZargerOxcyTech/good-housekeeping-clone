import React from "react";
import SocialMedia from "../common/SocialMedia";
import { raleway } from "../common/fonts";

const Footer = () => {
  return (
    <footer className="py-10 sm:mx-[7%]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="lg:flex lg:justify-between lg:items-center ">
          {/* Social Media Links */}
          <a className="btn btn-ghost text-xl font-bold text-black hover:bg-transparent hover:text-current">
            BLOG APP
          </a>
          <div className="mb-6 sm:flex items-center justify-between lg:mb-0">
            <div className="flex space-x-4 lg:space-x-8 ">
              {/* Social Media Icons */}
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:justify-between ">
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Advertise online
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Give GH as a Gift
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Customer Service
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Other Subscriptions
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Work For Good Housekeeping
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Events and Promotions
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Media Kit
                </a>
              </li>
              <li>
                <a href="#" className={`${raleway.className}`}>
                  Giveaways
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Logo Section */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4">
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src="https://www.goodhousekeeping.com/_assets/design-tokens/goodhousekeeping/static/images/logos/network-logo.ae25366.svg?primary=%2523ffffff"
                alt="Logo"
                className="h-8"
              />
            </a>
          </div>
        </div> */}
        {/* Additional Content */}
        {/* <div className="text-sm leading-10 text-black font-sans font-bold">
          <p>A Part of Example Media</p>
          <p>
            Example participates in various affiliate marketing programs, which
            means we may get paid commissions on editorially chosen products
            purchased through our links to retailer sites.
          </p>
        </div> */}

        {/* Copyright and Legal Links */}
        <div className="text-sm leading-10 mt-8 text-black font-sans font-bold">
          <p>©2024 Example Media, Inc. All Rights Reserved.</p>
        </div>
        <ul className="flex flex-wrap mt-4 text-xs text-black font-sans font-bold">
          <li className="mr-4">Privacy Notice</li>
          <li className="mr-4">CA Notice at Collection</li>
          <li className="mr-4">Your CA Privacy Rights</li>
          <li className="mr-4">DAA Industry Dropout</li>
          <li className="mr-4">Terms of Use</li>
          <li>Site Map</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
