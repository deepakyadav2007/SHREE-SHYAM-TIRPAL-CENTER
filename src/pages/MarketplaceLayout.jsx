import React from 'react';
import { TrendingUp, Star, Send, ChevronRight, Car, Battery, Bike, Truck, Zap, Gem } from 'lucide-react';

const MarketplaceLayout = () => {
  const trendingCategories = [
    { name: "Human Hair & Accessories", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=80&h=80&fit=crop" },
    { name: "Cooling Tower & Chilling Plants", image: "https://images.unsplash.com/photo-1581093588401-fbb62a02b120?w=80&h=80&fit=crop" },
    { name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80&h=80&fit=crop" },
    { name: "Air Cooler", image: "https://images.unsplash.com/photo-1632759145351-1d8d7eefb5db?w=80&h=80&fit=crop" },
    { name: "Solar Panels", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=80&h=80&fit=crop" },
    { name: "Packaging machine", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=80&h=80&fit=crop" }
  ];

  const featuredProducts = [
    { name: "Compact Table Top Chiller Sonicator", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=100&h=100&fit=crop" },
    { name: "Di Ethylene Glycol - Premium Quality", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&h=100&fit=crop" },
    { name: "White And Blue Designer Steel Cabinets", image: "https://images.unsplash.com/photo-1585421514738-d6e9d1e6c9b6?w=100&h=100&fit=crop" },
    { name: "Steel Flanges - Stainless Steel", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop" },
    { name: "400g Pack 100% Natural Tomato Paste", image: "https://images.unsplash.com/photo-1594581212133-3e3a7d21a9b7?w=100&h=100&fit=crop" },
    { name: "Briquette Crusher - High-Grade", image: "https://images.unsplash.com/photo-1581090464777-f3e9c5e7f5b5?w=100&h=100&fit=crop" }
  ];

  const jewelleryItems = ["Artificial Earrings", "Imitation Necklace", "Brass Earrings", "Resin Pendants", "Silver Chains", "Stone Rings"];

  const vehicleSections = [
    { title: "Electric Vehicles", icon: Car, items: ["Electric Car", "Electric Buses", "Electric Three Wheeler"] },
    { title: "Battery Operated", icon: Battery, items: ["Electric Auto", "Electric Bikes", "Electric Motorcycles"] },
    { title: "E Rickshaw", icon: Truck, items: ["Battery Rickshaw", "Electric Rickshaw", "E Rickshaw Loader"] },
    { title: "Bicycle", icon: Bike, items: ["Mens Bicycle", "Ladies Bicycle", "Kids Bicycles"] },
    { title: "Electric Bicycle", icon: Zap, items: ["Battery Operated Bicycle", "EV Bike", "Battery Bike"] }
  ];

  return (
    <section className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Trending Categories */}
          <div className="bg-white rounded-lg shadow p-3">
            <div className="flex items-center gap-2 border-b pb-2"><TrendingUp className="w-5 h-5 text-red-500" /><h2 className="text-lg font-bold">Trending Categories</h2></div>
            <ul className="space-y-2 mt-2">
              {trendingCategories.map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <img src={cat.image} className="w-8 h-8 rounded-full object-cover" /><span className="text-sm flex-1">{cat.name}</span><ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products */}
          <div className="bg-white rounded-lg shadow p-3">
            <div className="flex items-center gap-2 border-b pb-2"><Star className="w-5 h-5 text-yellow-500" /><h2 className="text-lg font-bold">Featured Products</h2></div>
            <div className="space-y-2 mt-2">
              {featuredProducts.map((prod, idx) => (
                <div key={idx} className="flex gap-2 items-center border-b pb-2">
                  <img src={prod.image} className="w-10 h-10 rounded object-cover" /><span className="text-sm">{prod.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-gray-50 p-2 rounded flex items-center gap-2"><img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=60&h=60" className="w-12 h-12 rounded" /><div><p className="text-sm font-bold text-red-600">1,100,000 INR</p><p className="text-xs">ECCMAN</p><button className="text-blue-600 text-xs flex items-center">Send Inquiry <Send className="w-3 h-3 ml-1"/></button></div></div>
          </div>

          {/* Right Column: Jewellery + Vehicles */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center gap-2 border-b pb-2"><Gem className="w-5 h-5 text-pink-500" /><h2 className="text-lg font-bold">Non-Gold Fashion Jewellery</h2></div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {jewelleryItems.map((item, i) => <div key={i} className="text-xs text-gray-600 hover:text-red-500 cursor-pointer">{item}</div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center gap-2 border-b pb-2"><Car className="w-5 h-5 text-green-600" /><h2 className="text-lg font-bold">Alternative to Oil & Gas Vehicles</h2></div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {vehicleSections.map((v, idx) => (
                  <div key={idx}><div className="flex items-center gap-1"><v.icon className="w-4 h-4 text-blue-500" /><h3 className="text-xs font-semibold">{v.title}</h3></div><ul className="ml-4 text-[10px] text-gray-500">{v.items.map(item=><li key={item}>{item}</li>)}</ul></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLayout;