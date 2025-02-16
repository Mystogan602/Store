import React from "react";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div
      style={{ zIndex: 1000 }}
      className={`${showSidebar ? "hidden" : "flex"
        } xl:flex lg:flex sm:hidden flex-col justify-between p-4 text-white bg-[#000] w-[4%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link to="/" className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
        </Link>
        <Link to="/shop" className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
        </Link>
        <Link to="/cart" className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShoppingCart className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">CART</span>{" "}
        </Link>
        <Link to="/favorites" className="flex items-center transition-transform transform hover:translate-x-2">
          <FaHeart className="mr-2 mt-[3rem]" size={20} />
          <span className="hidden nav-item-name mt-[3rem]">FAVORITES</span>{" "}
        </Link>
      </div>
      
      <ul>
        <li>
          <Link to="/login" className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineLogin className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">LOGIN</span>{" "}
          </Link>
          <Link to="/register" className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineUserAdd className="mr-2 mt-[3rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">REGISTER</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
