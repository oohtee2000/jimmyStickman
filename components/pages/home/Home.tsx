import React from 'react'

import Hero from './Hero'
import ExploreMore from './ExploreMore'

const Home = () => {
  return (
    <div>
      <Hero />     

      <div className="relative w-screen h-screen flex flex-col sm:flex-row mt-2">
  {/* Black Overlay with Gradient for Mobile */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent sm:bg-black/30"></div>

  {/* First Image - Full Width on Mobile, Half Width on Larger Screens */}
  <div className="w-full sm:w-1/2 h-full">
    <img
      src="https://cdn.pixabay.com/photo/2021/11/05/12/27/woman-6771288_1280.jpg"
      alt="Women's Fashion"
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Second Image - Hidden on Mobile, Half Width on Larger Screens */}
  <div className="hidden sm:block sm:w-1/2 h-full">
    <img
      src="https://cdn.pixabay.com/photo/2024/11/08/05/28/man-9182458_1280.jpg"
      alt="Men's Fashion"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Centered Text Content (Remains for all screen sizes) */}
  <div className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center w-11/12 sm:w-auto">
    <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight">
      Weekend Ready
    </h2>
    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light max-w-md mx-auto mb-6 sm:mb-8">
      Effortless comfort meets refined style—perfect for unwinding while looking polished.
    </p>

    {/* CTA Buttons - Original border-bottom style with hover effect */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-lg sm:text-2xl font-light">
      <a href="#" className="pb-2 border-b-2 border-white hover:opacity-80 transition">
        Shop Men's Pants
      </a>
      <a href="#" className="pb-2 border-b-2 border-white hover:opacity-80 transition">
        Shop Women's Pants
      </a>
    </div>
  </div>
</div>




      {/* Remaining sections */}
      <div>
        {/* Section 1: Hood & Jacket */}
        

        



{/* Section 1: Hood & Jacket */}
<div className="w-screen h-screen flex flex-col sm:flex-row relative">
  <div className="absolute inset-0 bg-black opacity-20"></div>

  {[
    {
      title: "Hood",
      image: "https://cdn.pixabay.com/photo/2022/10/30/07/45/mens-7556770_1280.jpg",
    },
    {
      title: "Jacket",
      image: "https://cdn.pixabay.com/photo/2024/12/15/16/59/girl-9269113_1280.jpg",
    },
  ].map((item, index) => (
    <div key={index} className="relative w-full sm:w-1/2 h-screen flex flex-col justify-end p-6">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-white text-center sm:text-left">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-4">{item.title}</h2>
        <div className="flex justify-center sm:justify-start gap-6 text-lg sm:text-2xl font-light">
          <p className="pb-1 border-b-2 cursor-pointer hover:border-white transition">Shop Men's</p>
          <p className="pb-1 border-b-2 cursor-pointer hover:border-white transition">Shop Women's</p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* Section 2: Denim & Accessories */}
<div className="w-screen h-screen flex flex-col sm:flex-row relative mt-1">
  <div className="absolute inset-0 bg-black opacity-20"></div>

  {[
    {
      title: "Denim",
      image: "https://cdn.pixabay.com/photo/2022/01/05/15/16/woman-6917317_1280.jpg",
    },
    {
      title: "Accessories",
      image: "https://cdn.pixabay.com/photo/2017/08/01/16/32/people-2566433_1280.jpg",
    },
  ].map((item, index) => (
    <div key={index} className="relative w-full sm:w-1/2 h-screen flex flex-col justify-end p-6">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-white text-center sm:text-left">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-4">{item.title}</h2>
        <div className="flex justify-center sm:justify-start gap-6 text-lg sm:text-2xl font-light">
          <p className="pb-1 border-b-2 cursor-pointer hover:border-white transition">Shop Men's</p>
          <p className="pb-1 border-b-2 cursor-pointer hover:border-white transition">Shop Women's</p>
        </div>
      </div>
    </div>
  ))}
</div>


       {/* Section 3: Full-Width Banner */}
<div className="w-screen h-screen relative mt-1">
  <img
    src="https://cdn.pixabay.com/photo/2018/01/24/19/49/friendship-day-3104635_1280.jpg"
    alt="Friendship"
    className="w-full h-full object-cover sm:object-cover object-center max-h-screen"
  />
</div>


        {/* Section 4: Explore More */}
        <div className="text-center py-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide mb-6">
            Explore More
          </h2>
          <div className="flex justify-center gap-12 text-lg font-light">
            {["Men's Polo", "Women's Polo", "Kids' Polo", "Accessories"].map((category, index) => (
              <p key={index} className="pb-2 border-b-2 border-gray-400 hover:border-black transition mt-3 cursor-pointer">
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>

      <ExploreMore />

      <div className="flex justify-center items-center gap-14 py-12 bg-gray-50">
        {/* Left Section: Text */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900">Sign Up</h2>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-gray-800 mt-2">With Jimmy Stickman</h2>
          <p className="text-gray-700 mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            For 20% off welcome offer and more
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="w-[480px]">
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Enter your email" className="w-full p-4 border border-gray-300 rounded-md" />
            <button className="bg-black min-w-[130px] text-white px-6 py-4 rounded-md font-medium hover:bg-gray-800 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
