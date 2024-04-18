import React from "react";
import SocialMedia from "../common/SocialMedia";

const Footer = () => {
  return (
    <footer className="py-10 sm:mx-[7%]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="lg:flex lg:justify-between lg:items-center ">
          {/* Social Media Links */}
          <a className="btn btn-ghost text-xl text-black hover:bg-transparent hover:text-current">
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
                <a href="https://shop.goodhousekeeping.com/gh-all-access-membership.html?cds_tracking_code=ghk_footer">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  About us
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Advertise online
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="https://shop.goodhousekeeping.com/gh-all-access-membership.html?cds_tracking_code=ghk_footer">
                  Give GH as a Gift
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Contact us
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Customer Service
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="https://shop.goodhousekeeping.com/gh-all-access-membership.html?cds_tracking_code=ghk_footer">
                  Other Subscriptions
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Work For Good Housekeeping
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Events and Promotions
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mt-4 w-1/2 sm:w-1/4">
            <ul className=" text-sm text-black font-sans font-bold space-y-4">
              <li>
                <a href="https://shop.goodhousekeeping.com/gh-all-access-membership.html?cds_tracking_code=ghk_footer">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
                  Media Kit
                </a>
              </li>
              <li>
                <a href="https://join.goodhousekeeping.com/pubs/HR/GHK/GHK1_Plans.jsp?cds_mag_code=GHK&cds_page_id=249773&cds_tracking_code=ghk_circulesredirect">
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
