import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductListing = () => {
  const products = [
    {
      name: "V.K. India Top HDPE Tarpaulin (Tirpal)",
      mrp: 9954,
      price: 953,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop", // blue tarpaulin
    },
    {
      name: "V.K. Champion Waterproof HDPE Tarpaulin / Tirpal / Thappi / Tadpatri",
      mrp: 9959,
      price: 549,
      image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop", // rolled tarpaulin
    },
    {
      name: "V.K. Sarvottam Waterproof UV Coated HDPE Tarpaulin / Tirpal / Tadpatri",
      mrp: 9959,
      price: 519,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop", // green tarpaulin
    },
    {
      name: "V.K. Sarvottam Eco-Friendly Waterproof Cable/Tarpaulin/Tirpal (120 GSM)",
      mrp: 9945,
      price: 1711,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a2c2e?w=400&h=300&fit=crop",
    },
    {
      name: "V.K. Sarvottam Eco-Friendly Waterproof Cable/Tarpaulin/Tirpal (100 GSM)",
      mrp: 9945,
      price: 1711,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
    },
    {
      name: "V.K. Sarvottam Eco-Friendly Waterproof Cable/Tarpaulin/Tirpal (185 GSM)",
      mrp: 9945,
      price: 1711,
      image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop",
    },
    {
      name: "V.K. Sarvottam HDPE Tirpal (155 GSM)",
      mrp: 9966,
      price: 1484,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      name: "V.K. Sarvottam Smart HDPE Tarpaulin / Tirpal / Tirpal 90GSM | UV Coated & Waterproof & Jointless (Yellow Check)",
      mrp: 9929,
      price: 615,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
    },
    {
      name: "V.K. Sarvottam Smart HDPE Tarpaulin / Tirpal | Tirpal 120GSM | UV Coated & Waterproof & Jointless (Yellow)",
      mrp: 9929,
      price: 830,
      image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
          Our Premium Tarpaulins
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
                  {product.name}
                </h3>
                
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-gray-400 line-through text-sm">
                    MRP ₹{product.mrp.toLocaleString()}
                  </span>
                  <span className="text-red-600 font-bold text-lg">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="mt-4 pt-2">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;