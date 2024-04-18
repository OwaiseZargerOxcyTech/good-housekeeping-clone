// Navbar.js

import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:sticky top-0 z-50 bg-white shadow-sm p-0">
      {/* Content of your navbar */}
      <div className="sm:ml-[7%] flex border-b sm:border-none">
        {/* <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
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
        </label> */}
        {/* logo */}
        <p className="btn btn-ghost text-lg text-black hover:bg-transparent hover:text-current p-2 ">
          <Link href="/">BLOG APP</Link>
        </p>
      </div>
      {/* Navbar items */}

      <div className="nav-list overflow-x-auto ">
        <ul className="menu menu-horizontal flex-nowrap  sm:space-x-6">
          {/* List items */}
          <li className="font-bold text-xs text-black tracking-widest">
            <a className="hover:bg-transparent hover:text-current">
              PRODUCT REVIEWS
            </a>
          </li>
          <li className="font-bold text-xs text-black tracking-widest">
            <a className="hover:bg-transparent hover:text-current">LIFE</a>
          </li>
          <li className="font-bold text-xs text-black tracking-widest">
            <a className="hover:bg-transparent hover:text-current">HEALTH</a>
          </li>
          <li className="font-bold text-xs text-black tracking-widest">
            <a className="hover:bg-transparent hover:text-current">FOOD</a>
          </li>
          <li className="font-bold text-xs text-black tracking-widest">
            <p className="hover:bg-transparent hover:text-current">
              <Link href="/category">CATEGORY</Link>
            </p>
          </li>
        </ul>
      </div>

      {/* <div className="mr-[5%] navbar-end">
        <a className="btn btn-sm btn-accent rounded-sm font-bold hidden sm:flex">
          SUBSCRIBE
        </a>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold">SIGN IN</a>
          </li>
        </ul>
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
      </div> */}
    </div>
  );
}

export default Navbar;
