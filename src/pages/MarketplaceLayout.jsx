import React from 'react';
import { 
  TrendingUp, Star, Send, ChevronRight, Car, Battery, Bike, Truck, Zap, Gem, 
  Package, Shield, Droplets, Sun, HardHat, Factory 
} from 'lucide-react';

const MarketplaceLayout = () => {
  // ========== TRENDING CATEGORIES (Tirpal Types) ==========
  const trendingCategories = [
    { name: "Truck Tirpal (Tarpaulin)", image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780813674/0b89ccbc901fbc4f25682d73774dca1e_dxviva.jpg", link: "#" },
    { name: "Waterproof HDPE Tirpal", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=80&h=80&fit=crop", link: "#" },
    { name: "PVC Tarpaulin Sheets", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=80&h=80&fit=crop", link: "#" },
    { name: "Canvas Tirpal (Cotton)", image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=80&h=80&fit=crop", link: "#" },
    { name: "Agriculture Cover / Farming", image: "https://images.unsplash.com/photo-1594581212133-3e3a7d21a9b7?w=80&h=80&fit=crop", link: "#" },
    { name: "Tent House Sheets", image: "https://images.unsplash.com/photo-1623945201717-8f0709b33d1f?w=80&h=80&fit=crop", link: "#" },
    { name: "Industrial Covers", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=80&h=80&fit=crop", link: "#" },
    { name: "Heavy Duty Tarpaulin", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a2c2e?w=80&h=80&fit=crop", link: "#" }
  ];

  // ========== FEATURED PRODUCTS (Tirpal Products with real brand names) ==========
  const featuredProducts = [
    { name: "V.K. India Top HDPE Tarpaulin (90 GSM)", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100&h=100&fit=crop", price: "₹953", seller: "V.K. Industries" },
    { name: "V.K. Champion Waterproof HDPE Tirpal", image: "https://images.unsplash.com/photo-1605600659870-869b0d5c5b9a?w=100&h=100&fit=crop", price: "₹549", seller: "V.K. Industries" },
    { name: "V.K. Sarvottam UV Coated Tirpal", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=100&h=100&fit=crop", price: "₹519", seller: "V.K. Industries" },
    { name: "Eco-Friendly Cable Tarpaulin (120 GSM)", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a2c2e?w=100&h=100&fit=crop", price: "₹1711", seller: "GreenCover" },
    { name: "Yellow Check HDPE Tarpaulin", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=100&h=100&fit=crop", price: "₹615", seller: "V.K. Sarvottam Smart" },
    { name: "Heavy Duty Truck Cover (185 GSM)", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100&h=100&fit=crop", price: "₹1711", seller: "Shree Shyam Tirpal" }
  ];

  // Extra featured item (the one with price & seller)
  const extraFeatured = {
    price: "1,100,000 INR",
    unit: "Roll (100 meter)",
    seller: "Shree Shyam Tirpal Center",
    action: "Send Inquiry",
    image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780813674/0b89ccbc901fbc4f25682d73774dca1e_dxviva.jpg"
  };

  // ========== TIRPAL BRANDS / CATEGORIES (Replaces Jewellery) ==========
  const tirpalBrands = [
    "V.K. Industries", "Shree Shyam Tirpal", "GreenCover", "Duratuf", "PolyMax", "Tirpal House",
    "HDPE Experts", "UV Shield", "EcoTarp", "HeavyDuty Covers"
  ];

  // ========== TIRPAL APPLICATIONS (Replaces Vehicles) ==========
  const tirpalApplications = [
    { title: "Transport / Truck", icon: Truck, items: ["Truck Tirpal", "Trailer Cover", "Container Sheet", "Lorry Tarpaulin"] },
    { title: "Agriculture", icon: Droplets, items: ["Crop Cover", "Pond Liner", "Silage Cover", "Farm Shed"] },
    { title: "Construction", icon: HardHat, items: ["Building Cover", "Sand Protection", "Scaffolding Sheet", "Dust Barrier"] },
    { title: "Tent / Marriage", icon: Sun, items: ["Wedding Tent", "Party Canopy", "Outdoor Roof", "Decoration Sheet"] },
    { title: "Industrial", icon: Factory, items: ["Machine Cover", "Warehouse Curtain", "Factory Partition", "Spill Containment"] },
    { title: "Waterproofing", icon: Shield, items: ["Roof Cover", "Pool Liner", "Flood Barrier", "Rain Shed"] }
  ];

  return (
    <section className="w-full bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* LEFT COLUMN: Trending Categories (Tirpal Types) */}
          <div className="bg-white rounded-lg shadow p-3">
            <div className="flex items-center gap-2 border-b pb-2">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold">Trending Tirpal Categories</h2>
            </div>
            <ul className="space-y-2 mt-2">
              {trendingCategories.map((cat, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <img src={cat.image} className="w-8 h-8 rounded-full object-cover" alt={cat.name} />
                  <span className="text-sm flex-1 font-medium">{cat.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE COLUMN: Featured Products */}
          <div className="bg-white rounded-lg shadow p-3">
            <div className="flex items-center gap-2 border-b pb-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-bold">Featured Tarpaulins</h2>
            </div>
            <div className="space-y-2 mt-2">
              {featuredProducts.map((prod, idx) => (
                <div key={idx} className="flex gap-2 items-center border-b pb-2">
                  <img src={prod.image} className="w-10 h-10 rounded object-cover" alt={prod.name} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{prod.name}</p>
                    <p className="text-xs text-gray-500">By: {prod.seller} | {prod.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Extra featured (large price) */}
            <div className="mt-3 bg-gradient-to-r from-orange-50 to-yellow-50 p-2 rounded flex items-center gap-2 border border-orange-200">
              <img src={extraFeatured.image} className="w-12 h-12 rounded object-cover" alt="product" />
              <div className="flex-1">
                <p className="text-sm font-bold text-red-600">{extraFeatured.price}</p>
                <p className="text-xs text-gray-600">{extraFeatured.unit}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs font-semibold">{extraFeatured.seller}</span>
                  <button className="text-blue-600 text-xs flex items-center gap-1 hover:text-blue-800">
                    {extraFeatured.action} <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Tirpal Brands + Applications */}
          <div className="space-y-4">
            {/* Tirpal Brands (instead of Jewellery) */}
            <div className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center gap-2 border-b pb-2">
                <Gem className="w-5 h-5 text-pink-500" />
                <h2 className="text-lg font-bold">Top Tirpal Brands</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {tirpalBrands.map((brand, i) => (
                  <div key={i} className="text-xs text-gray-700 font-medium hover:text-red-500 cursor-pointer bg-gray-50 p-1 rounded text-center">
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Tirpal Applications (instead of Vehicles) */}
            <div className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center gap-2 border-b pb-2">
                <Package className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold">Tirpal Applications / Usage</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {tirpalApplications.map((app, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-1 mb-1">
                      <app.icon className="w-4 h-4 text-blue-500" />
                      <h3 className="text-xs font-semibold text-gray-800">{app.title}</h3>
                    </div>
                    <ul className="ml-4 space-y-0.5">
                      {app.items.map((item, i) => (
                        <li key={i} className="text-[10px] text-gray-500 hover:text-red-500 cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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