import React from "react";
import { SearchOutlined, StarFilled } from "@ant-design/icons";

const Search = () => {
  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md p-2 bg-gray-100">
        <SearchOutlined className="text-gray-500 text-lg mr-2" />
        <input
          type="text"
          placeholder="What are you looking for..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Popular Categories */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Popular Categories</h2>
        <ul className="mt-2 text-gray-600">
          <li className="py-1 hover:text-black cursor-pointer">New Arrivals</li>
          <li className="py-1 hover:text-black cursor-pointer">Women's Bra</li>
          <li className="py-1 hover:text-black cursor-pointer">Men's Underwear</li>
        </ul>
      </div>

      {/* Featured Best Sellers */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Featured Best Sellers</h2>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            {
              image: "https://cdn.pixabay.com/photo/2025/02/09/22/02/ai-generated-9395372_1280.jpg",
              title: "Monogram Logo Fleece",
              price: "N52.30",
              rating: 5,
            },
            {
              image: "https://cdn.pixabay.com/photo/2025/02/13/15/01/ai-generated-9404181_1280.png",
              title: "Monogram Logo Fleece",
              price: "N52.30",
              rating: 5,
            },
            {
              image: "https://cdn.pixabay.com/photo/2025/02/11/05/58/galaxy-9398150_1280.jpg",
              title: "Monogram Logo Fleece",
              price: "N52.30",
              rating: 5,
            },
          ].map((product, index) => (
            <div key={index} className="bg-white p-3">
              <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
              <p className="mt-2 font-medium text-gray-800">{product.title}</p>
              <p className="text-red-500 font-semibold">{product.price}</p>
              <p className="flex items-center text-yellow-500">
                {Array.from({ length: product.rating }, (_, i) => (
                  <StarFilled key={i} className="mr-1" />
                ))}
                <span className="text-gray-600 text-sm ml-1">(5)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
