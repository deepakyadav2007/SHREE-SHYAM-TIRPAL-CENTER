import React from 'react';
import { 
  Truck, Droplets, Tent, Wheat, Shield, Layers, Factory, Package,
  Car, Building2, CloudRain, Scissors, Users, Search, Globe,
  CreditCard, ChevronRight, ArrowRight
} from 'lucide-react';

const HeroSection = () => {
  const categories = [
    { label: "Truck Tirpal", icon: Truck },
    { label: "Waterproof Tirpal", icon: Droplets },
    { label: "Tent House Tirpal", icon: Tent },
    { label: "Agriculture Tirpal", icon: Wheat },
    { label: "HDPE Tirpal", icon: Shield },
    { label: "PVC Tirpal", icon: Layers },
    { label: "Industrial Covers", icon: Factory },
    { label: "Canvas Tirpal", icon: Package },
    { label: "Vehicle Covers", icon: Car },
    { label: "Construction Sheets", icon: Building2 },
    { label: "Rain Sheds", icon: CloudRain },
    { label: "Custom Size Tirpal", icon: Scissors },
  ];

  const valueAdds = [
    { title: "TradeIndia", subtitle: "Tradeshows and Exhibitions", icon: Users },
    { title: "TradeIndia", subtitle: "Buy Trade Leads", icon: Search },
    { title: "TradeIndia", subtitle: "Book Domain", icon: Globe },
    { title: "TradeIndia", subtitle: "Membership Plans", icon: CreditCard },
    { title: "Find Distributors", subtitle: "For Your Business", icon: Users },
  ];

  return (
    <section className="w-full bg-gray-50 py-6 md:py-30">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Sidebar - Categories (Desktop only) */}
           <div className="hidden lg:block lg:col-span-2 bg-white rounded-lg shadow-sm p-3 h-fit">
            <h3 className="text-sm font-bold text-slate-800 mb-2">Top Categories</h3>
            <div className="space-y-1">
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center gap-2 py-1.5 px-1 rounded-md hover:bg-gray-50 cursor-pointer group">
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                  <span className="text-xs text-gray-600 group-hover:text-gray-900">{cat.label}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-1 text-xs text-red-500 font-medium mt-2">View all <ChevronRight className="w-3 h-3" /></button>
          </div>

          {/* Center Banner */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-r from-yellow-300 via-orange-300 to-orange-400 rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-5 h-auto md:h-[380px]">
              <div className="text-center md:text-left md:w-1/2 z-10">
                <h2 className="text-xl md:text-3xl font-black text-black">Premium Quality <span className="text-red-600">Tirpal</span></h2>
                <h2 className="text-lg md:text-2xl font-bold text-black">Waterproof • HDPE • Truck Cover</h2>
                <p className="text-sm text-gray-700 my-3">Strong & Durable Tarpaulin for Transport, Farming & Construction</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <div className="bg-white rounded-l-full px-3 py-1.5 text-sm font-bold shadow">shreeshyamtirpal.com</div>
                  <div className="bg-red-500 hover:bg-red-600 rounded-r-full px-4 py-1.5 text-white text-sm cursor-pointer">VISIT NOW</div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                <img 
                  src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780813674/0b89ccbc901fbc4f25682d73774dca1e_dxviva.jpg" 
                  alt="Tirpal" 
                  className="max-h-48 md:max-h-64 object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* More Value Adds */}
            <div className="mt-4">
              <h3 className="text-sm font-bold text-slate-800 mb-2">More Value Adds</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {valueAdds.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2 shadow-sm hover:shadow transition cursor-pointer text-center">
                    <p className="text-[10px] text-gray-500">{item.title}</p>
                    <p className="text-[11px] font-semibold">{item.subtitle}</p>
                    <item.icon className="w-4 h-4 mx-auto mt-1 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Cards */}
          <div className="lg:col-span-3 flex flex-col gap-3 mt-4 lg:mt-0">
            <div className="relative rounded-lg p-4 bg-cover bg-center h-40" style={{backgroundImage: "url('https://res.cloudinary.com/dfls5jdyc/image/upload/v1780814567/d279f74df89f38c2b7171dc68744d532_jop9mz.jpg')"}}>
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 text-white">
                <h3 className="text-lg font-semibold">Looking for a Product?</h3>
                <button className="mt-3 w-full border-2 border-white text-white text-sm py-1.5 rounded-lg hover:bg-white hover:text-gray-900 transition">Post Buy Requirement</button>
              </div>
            </div>
            <div className="relative rounded-lg p-4 bg-cover bg-center h-40" style={{backgroundImage: "url('https://res.cloudinary.com/dfls5jdyc/image/upload/v1780814363/c7c90d465c7142084506d9400031cf20_licg0o.jpg')"}}>
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <div className="relative z-10 text-white">
                <h3 className="text-lg font-semibold">Grow Business <span className="font-black">10x</span> Faster</h3>
                <button className="mt-3 w-full border-2 border-white text-white text-sm py-1.5 rounded-lg hover:bg-white hover:text-red-500 transition">Sell on TradeIndia <ArrowRight className="w-4 h-4 inline" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;