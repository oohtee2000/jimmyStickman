import React from "react";
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Column 1 - Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-100 cursor-pointer">Customer Services</li>
              <li className="hover:text-gray-100 cursor-pointer">Order Status</li>
              <li className="hover:text-gray-100 cursor-pointer">Shipping</li>
              <li className="hover:text-gray-100 cursor-pointer">Returns</li>
              <li className="hover:text-gray-100 cursor-pointer">Klarna</li>
              <li className="hover:text-gray-100 cursor-pointer">Afterpay</li>
              <li className="hover:text-gray-100 cursor-pointer">Promotions & Discounts</li>
              <li className="hover:text-gray-100 cursor-pointer">Group Discount</li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-100 cursor-pointer">About Us</li>
              <li className="hover:text-gray-100 cursor-pointer">Careers</li>
              <li className="hover:text-gray-100 cursor-pointer">Sustainability</li>
              <li className="hover:text-gray-100 cursor-pointer">Press</li>
              <li className="hover:text-gray-100 cursor-pointer">Investor Relations</li>
            </ul>
          </div>

          {/* Column 3 - Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-100 cursor-pointer">FAQs</li>
              <li className="hover:text-gray-100 cursor-pointer">Gift Cards</li>
              <li className="hover:text-gray-100 cursor-pointer">Contact Support</li>
              <li className="hover:text-gray-100 cursor-pointer">Store Locator</li>
              <li className="hover:text-gray-100 cursor-pointer">Live Chat</li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-start items-center gap-5">
              <FaXTwitter className="text-xl cursor-pointer hover:text-white transition duration-300" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-white transition duration-300" />
              <FaPinterestP className="text-xl cursor-pointer hover:text-white transition duration-300" />
              <FaInstagram className="text-xl cursor-pointer hover:text-white transition duration-300" />
              <FaYoutube className="text-xl cursor-pointer hover:text-white transition duration-300" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Logo & Links Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-left">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <img
              src="/jim2.png"
              alt="Company Logo"
              className="h-12"
            />
          </div>

          {/* Terms & Policies */}
          <div className="flex flex-wrap justify-start gap-6 text-sm">
            <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer">Privacy Commitment</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-left text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} JimmyStickman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
