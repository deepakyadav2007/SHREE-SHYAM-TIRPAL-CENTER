import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductListing = () => {
  const products = [
    { name: "V.K. India Top HDPE Tarpaulin", mrp: 9954, price: 953, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop" },
    { name: "V.K. Champion Waterproof HDPE", mrp: 9959, price: 549, image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop" },
    { name: "V.K. Sarvottam UV Coated", mrp: 9959, price: 519, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop" },
    { name: "Eco-Friendly 120 GSM", mrp: 9945, price: 1711, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a2c2e?w=400&h=300&fit=crop" },
    { name: "Eco-Friendly 100 GSM", mrp: 9945, price: 1711, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop" },
    { name: "Eco-Friendly 185 GSM", mrp: 9945, price: 1711, image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop" },
    { name: "V.K. Sarvottam 155 GSM", mrp: 9966, price: 1484, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop" },
    { name: "Smart 90GSM Yellow Check", mrp: 9929, price: 615, image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop" },
    { name: "Smart 120GSM Yellow", mrp: 9929, price: 830, image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=400&h=300&fit=crop" }
  ];

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">Our Premium Tarpaulins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-200"><img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition" /></div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-semibold line-clamp-2 min-h-[48px]">{product.name}</h3>
                <div className="mt-2 flex items-baseline gap-2"><span className="text-gray-400 line-through text-xs">MRP ₹{product.mrp.toLocaleString()}</span><span className="text-red-600 font-bold text-lg">₹{product.price.toLocaleString()}</span></div>
                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded flex items-center justify-center gap-2 text-sm"><ShoppingCart className="w-4 h-4" /> Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;