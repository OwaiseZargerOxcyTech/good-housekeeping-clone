// Navbar.js

import React from "react";

function Navbar() {
  return (
    <div className="navbar sticky shadow-sm p-0">
      {/* Content of your navbar */}
      <div className="ml-[5%]">
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          {/* menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        {/* logo */}
        <a className="btn btn-ghost text-xl">BLOG APP</a>
      </div>
      {/* Navbar items */}
      <div className="navbar">
        <div className="nav-list hidden lg:flex">
          <ul className="menu menu-horizontal px-8">
            <li className="font-semibold">
              <a>PRODUCT REVIEWS</a>
            </li>
            <li className="font-semibold">
              <a>LIFE</a>
            </li>
            <li className="font-semibold">
              <a>HEALTH</a>
            </li>
            <li className="font-semibold">
              <a>FOOD</a>
            </li>
            <li className="font-semibold">
              <a>BEAUTY</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mr-[5%] navbar-end">
        {/* Other navbar elements */}
        <a className="btn btn-sm btn-accent rounded-sm font-bold">SUBSCRIBE</a>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold">SIGN IN</a>
          </li>
        </ul>
        {/* search icon */}
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;