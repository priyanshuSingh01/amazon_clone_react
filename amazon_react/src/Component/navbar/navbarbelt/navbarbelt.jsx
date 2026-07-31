import React from 'react';
import amazonlogo from '../../../assets/amazon_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const NavbarBelt = () => {
  return (
    <div className="flex place-content-evenly items-center bg-slate-900 text-white w-auto h-[60px]">
      <div>
        <img
          className="h-10 w-[80px]"
          src={amazonlogo}
          alt="Amazon Logo"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLocationPin}
            className="text-white text-xl mt-2 bg-transparent"
          />

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">
              Delivering to Ghaziabad 201002
            </span>

            <span className="text-sm font-bold text-white">
              Update location
            </span>
          </div>
        </div>
      </div>

      <div className="flex  focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-300 rounded-lg">
        <select className="bg-gray-200 text-black h-10 px-2 w-12 rounded-l-md outline-none ">
          <option>All</option>
          <option>Alexa Skills</option>
          <option>Amazon Devices</option>
          <option>Amazon Fashion</option>
          <option>Amazon Fresh</option>
          <option>Amazon Pharmacy</option>
          <option>Appliances</option>
          <option>Apps & Games</option>
          <option>Audible Audiobooks</option>
          <option>Baby</option>
          <option>Beauty</option>
          <option>Books</option>
          <option>Car & Motorbike</option>
          <option>Clothing & Accessories</option>
          <option>Computers & Accessories</option>
          <option>Deals</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Garden & Outdoors</option>
          <option>Gift Cards</option>
          <option>Grocery & Gourmet Foods</option>
          <option>Health & Personal Care</option>
          <option>Home & Kitchen</option>
          <option>Industrial & Scientific</option>
          <option>Jewellery</option>
          <option>Kindle Store</option>
          <option>Luggage & Bags</option>
          <option>Movies & TV Shows</option>
          <option>Music</option>
          <option>Musical Instruments</option>
          <option>Office Products</option>
          <option>Pet Supplies</option>
          <option>Shoes & Handbags</option>
          <option>Software</option>
          <option>Sports, Fitness & Outdoors</option>
          <option>Toys & Games</option>
          <option>Video Games</option>
          <option>Watches</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="bg-white text-black h-10 w-[700px] rounded-r-lg outline-none px-3 "
        />
      </div>

      <div className="flex place-content-evenly gap-5">
        <div className="flex text-sm">
          <select>
            <option>EN</option>
          </select>
        </div>

        <div className="font-bold text-sm">
          <h3 className="font-medium">Hello, Sign in</h3>
          <h1>Account & List</h1>
        </div>

        <div className="font-bold text-sm">
            <h3 className="font-medium">Return</h3>
            <h1>& Orders</h1>
        </div>
        <div>
          <h3 className="flex"> <FontAwesomeIcon icon={faCartShopping} className="font-bold text-3xl"/> cart</h3>
        </div>
      </div>
    </div>
  );
};

export default NavbarBelt;