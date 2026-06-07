import React from 'react';
import { Crown } from 'lucide-react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1616406432452-07bc5931752a?w=200&h=200&fit=crop",
      title: "SS Fasteners",
      price: "5 INR/Piece",
      seller: "NIKO STEEL AND ENGINEERING LLP",
      badge: "Platinum Seller",
      badgeColor: "bg-purple-600"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=200&h=200&fit=crop",
      title: "AX 130 Backhoe Loaders",
      price: "2300000 INR/ Unit",
      seller: "ACTION CONSTRUCTION EQUIPMENT LTD.",
      badge: null,
      badgeColor: ""
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=200&h=200&fit=crop",
      title: "Lauryl Alcohol Ethoxylate",
      price: "240.0 INR/Kilograms",
      seller: "SHIV SHAKTI INDIA",
      badge: null,
      badgeColor: ""
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1623945201717-8f0709b33d1f?w=200&h=200&fit=crop",
      title: "Industrial Rubber Hand Gloves",
      price: "170 INR/Pair",
      seller: "VICTOR IMPORTS",
      badge: null,
      badgeColor: ""
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=200&h=200&fit=crop",
      title: "Aluminum Ingots",
      price: "195.00 INR / Kilograms",
      seller: "PHOOLCHAND BHAGATSINGH",
      badge: null,
      badgeColor: ""
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=200&h=200&fit=crop",
      title: "Tomato Puree-Double Concentration",
      price: "4.4 USD / Carton",
      seller: "HEBEI TOMATO INDUSTRY CO LTD.",
      badge: null,
      badgeColor: ""
    }
  ];

  return (
    <section className="w-full bg-orange-500 py-6 px-4">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Title */}
        <h2 className="text-white text-xl font-bold mb-4 pl-2">Best Sellers</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              {/* Badge */}
              {product.badge && (
                <div className="relative">
                  <div className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-br-lg rounded-tl-none inline-flex items-center gap-1 absolute top-0 left-0 z-10`}>
                    <Crown className="w-3 h-3" />
                    {product.badge}
                  </div>
                </div>
              )}

              {/* Product Image */}
              <div className="h-36 flex items-center justify-center p-3 bg-white">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="px-3 pb-3 pt-1">
                <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1 line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>
                <p className="text-sm font-bold text-gray-900 mb-1">
                  {product.price}
                </p>
                <p className="text-[11px] text-gray-500 leading-tight">
                  By: {product.seller}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellers;