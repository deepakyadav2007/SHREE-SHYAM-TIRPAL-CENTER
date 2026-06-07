import React from 'react';
import { 
  TrendingUp, 
  Star, 
  Send, 
  ChevronRight, 
  Zap,
  Battery,
  Bike,
  Car,
  Truck,
  Gem,
  Diamond,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

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
    { name: "Compact Table Top Chiller Sonicator", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=200&fit=crop" },
    { name: "Di Ethylene Glycol - Premium Quality Compound | High...", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=200&fit=crop" },
    { name: "White And Blue Designer Steel Portable Cabinets", image: "https://images.unsplash.com/photo-1585421514738-d6e9d1e6c9b6?w=400&h=200&fit=crop" },
    { name: "Steel Flanges - Stainless Steel, Duplex Steel, Carbon Steel,...", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop" },
    { name: "400g Pack 100% Natural Canned Tomato Paste", image: "https://images.unsplash.com/photo-1594581212133-3e3a7d21a9b7?w=400&h=200&fit=crop" },
    { name: "Briquette Crusher - High-Grade Metal Construction, 30-40 m...", image: "https://images.unsplash.com/photo-1581090464777-f3e9c5e7f5b5?w=400&h=200&fit=crop" }
  ];

  const extraFeatured = {
    price: "1100000 INR",
    unit: "Piece/Pieces",
    seller: "ECCMAN",
    action: "Send Inquiry ▼",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=100&h=100&fit=crop"
  };

  const jewellerySections = [
    { 
      title: "Artificial Jewelry", 
      items: ["Artificial Earrings", "Imitation Necklace", "Brass Earrings", "Resin Pendants"],
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=150&fit=crop"
    },
    { 
      title: "Imitation Fashion Jewellery", 
      items: ["Imitation Earrings", "Metal Finger Ring", "Polki Pendant Set", "Plain Earring"],
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=150&fit=crop"
    },
    { 
      title: "Sterling Silver Jewellery", 
      items: ["Sterling Silver Earrings", "Silver Chains", "Silver Bangles", "Designer Silver Pendant"],
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=200&h=150&fit=crop"
    },
    { 
      title: "Artificial Rings", 
      items: ["Artificial Finger Rings", "Wooden Rings", "Stone Ring", "Gemstone Ring"],
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=150&fit=crop"
    },
    { 
      title: "Artificial Necklaces", 
      items: ["Beaded Necklace", "Wooden Necklace", "Stone Necklace", "Pearl Necklaces"],
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=150&fit=crop"
    },
    { 
      title: "Artificial Pendants", 
      items: ["Wooden Pendant", "Stone Pendant", "Semi Precious Stone Pendant", "Beaded Pendants"],
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=200&h=150&fit=crop"
    }
  ];

  const vehicleSections = [
    { title: "Electric Vehicles", icon: Car, items: ["Electric Car", "Electric Buses", "Electric Three Wheeler", "Electric Battery Rickshaw"], image: "https://images.unsplash.com/photo-1593941707882-d5f1496a5586?w=200&h=150&fit=crop" },
    { title: "Battery Operated Vehicle", icon: Battery, items: ["Electric Auto Rickshaw", "Electric Bikes", "Electric Motorcycles", "Electric Two Wheeler"], image: "https://images.unsplash.com/photo-1603203772942-4d9a0b6b3b7a?w=200&h=150&fit=crop" },
    { title: "Battery Operated Bikes", icon: Bike, items: ["Hero Electric Bike", "Battery Operated Scooter", "Electric Motor Scooter", "Electric Scooters"], image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&h=150&fit=crop" },
    { title: "E Rickshaw", icon: Truck, items: ["Battery Rickshaw", "Electric Rickshaw", "Battery Operated Rickshaw", "E Rickshaw Loader"], image: "https://images.unsplash.com/photo-1593941707882-d5f1496a5586?w=200&h=150&fit=crop" },
    { title: "Bicycle", icon: Bike, items: ["Mens Bicycle", "Ladies Bicycle", "Folding Bicycle", "Kids Bicycles"], image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=200&h=150&fit=crop" },
    { title: "Electric Bicycle", icon: Zap, items: ["Battery Operated Bicycle", "EV Bike", "Battery Bike", "Motor Bicycle"], image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&h=150&fit=crop" }
  ];

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Trending Categories with Images */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-2 border-b pb-2 mb-3">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold text-gray-800">Trending Categories</h2>
            </div>
            <ul className="space-y-3">
              {trendingCategories.map((cat, idx) => (
                <li key={idx} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md cursor-pointer transition">
                  <img src={cat.image} alt={cat.name} className="w-10 h-10 rounded-full object-cover" />
                  <span className="text-sm text-gray-700 flex-1">{cat.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE COLUMN: Featured Products with Images */}
          <div className="lg:col-span-5 bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center gap-2 border-b pb-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-bold text-gray-800">Featured Products</h2>
            </div>
            <div className="space-y-4">
              {featuredProducts.map((product, idx) => (
                <div key={idx} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover" />
                  <p className="text-sm text-gray-800 font-medium flex-1">{product.name}</p>
                </div>
              ))}
            </div>
            {/* Extra featured with image */}
            <div className="mt-4 bg-gray-50 p-3 rounded-md flex gap-3 items-center">
              <img src={extraFeatured.image} alt="product" className="w-16 h-16 rounded-md object-cover" />
              <div className="flex-1">
                <p className="text-sm font-bold text-red-600">{extraFeatured.price}</p>
                <p className="text-xs text-gray-500">{extraFeatured.unit}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-semibold">{extraFeatured.seller}</span>
                  <button className="text-blue-600 text-sm flex items-center gap-1">
                    {extraFeatured.action} <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            {/* Jewellery Section with Images */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-2 border-b pb-2 mb-3">
                <Gem className="w-5 h-5 text-pink-500" />
                <h2 className="text-lg font-bold text-gray-800">Non-Gold Fashion Jewellery</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {jewellerySections.map((section, idx) => (
                  <div key={idx} className="text-center">
                    <img src={section.image} alt={section.title} className="w-full h-24 object-cover rounded-md mb-2" />
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">{section.title}</h3>
                    <ul className="space-y-1 text-left">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 hover:text-red-500 cursor-pointer">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicles Section with Images */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center gap-2 border-b pb-2 mb-3">
                <Car className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold text-gray-800">Alternative to Oil & Gas Vehicles</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {vehicleSections.map((section, idx) => (
                  <div key={idx} className="text-center">
                    <img src={section.image} alt={section.title} className="w-full h-24 object-cover rounded-md mb-2" />
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <section.icon className="w-4 h-4 text-blue-500" />
                      <h3 className="text-sm font-semibold text-gray-800">{section.title}</h3>
                    </div>
                    <ul className="space-y-1 text-left">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 hover:text-red-500 cursor-pointer">
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