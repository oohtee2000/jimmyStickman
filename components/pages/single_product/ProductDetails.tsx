import React, { useState } from "react";
import { IProduct } from "@/app/types/Product";

interface ProductDetailsProps {
  product: IProduct;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "");
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const openPopup = (content: string) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="w-full md:w-1/2 space-y-6 p-4 md:p-0 relative">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm">
        <span className="hover:underline cursor-pointer">Women</span> /
        <span className="hover:underline cursor-pointer"> Clothing</span> /
        <span className="font-semibold"> Dress</span>
      </nav>

      {/* Product Name & Price */}
      <div>
        <h1 className="text-4xl md:text-5xl font-light">{product.name}</h1>
        <p className="text-xl md:text-2xl font-extralight text-gray-700 mt-2">{product.price}</p>
        <p className="text-green-500 text-lg font-medium mt-3">{product.offer}</p>
      </div>

      {/* Color Selection */}
      <div>
        <p className="text-lg font-medium mt-6 md:mt-10">
          Color: <span className="font-extralight">{selectedColor}</span>
        </p>
        <div className="flex gap-3 mt-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition ${
                selectedColor === color.name ? "border-black scale-110 shadow-md" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <p className="text-lg font-medium mt-6 md:mt-10">
            Size: <span className="font-extralight">{selectedSize}</span>
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`p-2 md:p-3 border rounded-lg text-base font-medium transition ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stock Info */}
      <p className="text-red-500 text-lg font-light my-6 md:my-8">Only 3 Left in Stock</p>

      {/* Quantity & Add to Cart */}
      <div className="flex md:flex-row flex-col items-start md:items-center gap-4">
        <div className="border px-5 py-3 rounded-md text-lg font-medium w-full md:w-auto text-center">
          Qty 1
        </div>
        <button className="bg-black text-white px-5 py-4 md:p-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition w-full md:w-auto">
          Add To Bag - {product.price}
        </button>
      </div>

      {/* Shipping Info */}
      <p className="text-gray-600 text-base md:text-lg font-medium">
        🚚 Free Standard Shipping on Orders $100+
      </p>

      {/* Additional Information (Clickable for Popup) */}
      <div className="border-t py-5 space-y-3">
        {["Product Detail", "Shipping & Returns", "Write a Review", "Ask a Question"].map(
          (section) => (
            <p
              key={section}
              className="text-base md:text-lg font-semibold text-gray-700 hover:underline cursor-pointer mb-3 md:mb-5"
              onClick={() => openPopup(section)}
            >
              {section}
            </p>
          )
        )}
      </div>

      {/* Style With Section */}
      <h2 className="text-xl md:text-2xl font-semibold">Style With</h2>

      {/* Popup Modal */}
      {popupContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50">
          <div className="bg-white w-full md:w-1/3 h-full md:h-full p-6 rounded-none md:rounded-l-lg shadow-lg transform transition-all overflow-y-auto">
            <button className="absolute top-3 right-3 text-gray-600 text-xl" onClick={closePopup}>
              ✖
            </button>
            <h3 className="text-xl md:text-2xl font-semibold">{popupContent}</h3>
            <p className="text-gray-600 mt-3">
              {/* Add actual content here */}
              This is the detailed content for "{popupContent}". Add product details, shipping policies, or reviews here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
