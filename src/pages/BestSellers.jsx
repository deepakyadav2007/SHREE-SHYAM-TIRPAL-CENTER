import React from 'react';
import { Crown } from 'lucide-react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1616406432452-07bc5931752a?w=300&h=200&fit=crop",
      title: "SS Fasteners",
      price: "5 INR/Piece",
      seller: "NIKO STEEL AND ENGINEERING LLP",
      badge: "Platinum Seller",
      badgeColor: "bg-purple-600"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=300&h=200&fit=crop",
      title: "AX 130 Backhoe Loaders",
      price: "2300000 INR/ Unit",
      seller: "ACTION CONSTRUCTION EQUIPMENT LTD.",
      badge: null
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=300&h=200&fit=crop",
      title: "Lauryl Alcohol Ethoxylate",
      price: "240.0 INR/Kilograms",
      seller: "SHIV SHAKTI INDIA",
      badge: null
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1623945201717-8f0709b33d1f?w=300&h=200&fit=crop",
      title: "Industrial Rubber Hand Gloves",
      price: "170 INR/Pair",
      seller: "VICTOR IMPORTS",
      badge: null
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=200&fit=crop",
      title: "Aluminum Ingots",
      price: "195.00 INR / Kilograms",
      seller: "PHOOLCHAND BHAGATSINGH",
      badge: null
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=300&h=200&fit=crop",
      title: "Tomato Puree-Double Concentration",
      price: "4.4 USD / Carton",
      seller: "HEBEI TOMATO INDUSTRY CO LTD.",
      badge: null
    }
  ];

  return (
    <section className="w-full bg-orange-500 py-4 md:py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-xl font-bold mb-3 pl-2">Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition group">
              {product.badge && (
                <div className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 inline-block rounded-br-lg`}>
                  <Crown className="w-3 h-3 inline mr-1" /> {product.badge}
                </div>
              )}
              <div className="h-32 p-2 flex items-center justify-center bg-white">
                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition" />
              </div>
              <div className="p-2">
                <h3 className="text-xs md:text-sm font-semibold line-clamp-2 min-h-[40px]">{product.title}</h3>
                <p className="text-xs font-bold text-gray-900 mt-1">{product.price}</p>
                <p className="text-[10px] text-gray-500 truncate">By: {product.seller}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;