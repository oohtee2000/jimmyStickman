"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Search from "./Search";
import Cart from "./Cart";

type ModalType = "search" | "wishlist" | "cart" | null;

const Navbar = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Reference for modal

  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Check if home page

  const toggleModal = (name: ModalType | "user") => {
    if (name === "user") {
      setIsDropdownOpen(!isDropdownOpen);
      setActiveModal(null);
    } else {
      setActiveModal(activeModal === name ? null : name);
      setIsDropdownOpen(false);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  const modalContent: Record<Exclude<ModalType, null>, React.ReactNode> = {
    search: <Search />,
    wishlist: <p className="p-6 text-lg font-semibold">Your Wishlist Items</p>,
    cart: <Cart />,
  };

  const navItems = [
    { name: "search", icon: <SearchOutlined className="text-2xl text-gray-600 hover:text-black transition" /> },
    { name: "wishlist", icon: <HeartOutlined className="text-2xl text-gray-600 hover:text-black transition" />, badge: 3 },
    { name: "cart", icon: <ShoppingCartOutlined className="text-2xl text-gray-600 hover:text-black transition" />, badge: 12 },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-[1050] backdrop-blur-md transition-all duration-300 ${
      isHomePage ? "bg-white bg-opacity-30" : "bg-white shadow-md"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="h-14 w-auto" src="/jim2.png" alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-600"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuOutlined />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map(({ name, icon, badge }, index) => (
            <div key={index} className="relative">
              <button onClick={() => toggleModal(name as ModalType)} className="relative">  
                {badge && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
                {icon}
              </button>
            </div>
          ))}

          {/* User Dropdown */}
          <div className="relative">
            <button onClick={() => toggleModal("user")} className="relative">
              <UserOutlined className="text-2xl text-gray-600 hover:text-black transition" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 flex flex-col w-48 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (

<div className="absolute right-0 top-[calc(100%-30px)] w-full sm:w-48 bg-white border border-gray-200 rounded-lg overflow-hidden z-[1100]">



          <div className="w-full sm:w-2/3 md:w-1/2 bg-white h-full shadow-lg transform transition-transform duration-300">
            {/* Header with Close Button */}
            <div className="p-5 flex justify-between items-center border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-gray-600 hover:text-black">
                <CloseOutlined />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col p-5 space-y-5">
              {navItems.map(({ name, icon, badge }, index) => (
                <button
                  key={index}
                  onClick={() => {
                    toggleModal(name as ModalType);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-lg font-medium text-gray-700 hover:text-black transition"
                >
                  <div className="flex items-center space-x-3">
                    {icon}
                    <span className="capitalize">{name}</span>
                  </div>
                  {badge && <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{badge}</span>}
                </button>
              ))}

              <hr className="border-gray-300" />

              <button onClick={() => toggleModal("user")} className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-black transition">
                <UserOutlined />
                <span>User</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal with Click Outside Close */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[1100]">
          <div ref={modalRef} className="w-2/3 md:w-1/2 bg-white h-full shadow-lg transform transition-transform duration-300">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold capitalize">{activeModal}</h2>
              <button onClick={() => setActiveModal(null)}>
                <CloseOutlined className="text-xl text-gray-600 hover:text-black" />
              </button>
            </div>
            {modalContent[activeModal]}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
