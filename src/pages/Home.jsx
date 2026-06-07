import React from 'react';
import { 
  Heart,
  Shirt,
  FlaskConical,
  Cog,
  Building2,
  Plug,
  Stethoscope,
  Gift,
  Package,
  Wheat,
  Home,
  Gem,
  Factory,
  ChevronRight,
  ArrowRight,
  Users,
  Globe,
  BookOpen,
  CreditCard,
  Search,
  ShoppingBag,
  CheckCircle2,
  // Missing icons added below:
  Truck,
  Droplets,
  Tent,
  Shield,
  Layers,
  Car,
  CloudRain,
  Scissors
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
    { title: "TradeIndia", subtitle: "Tradeshows and Exhibitions", icon: Users, hasImage: true },
    { title: "TradeIndia", subtitle: "Buy Trade Leads", icon: Search, hasImage: true },
    { title: "TradeIndia", subtitle: "Book Domain", icon: Globe, hasImage: true },
    { title: "TradeIndia", subtitle: "Membership Plans", icon: CreditCard, hasImage: true },
    { title: "Find Distributors", subtitle: "For Your Business", icon: Users, hasImage: true },
  ];

  return (
    <section className="w-full bg-gray-50 py-30">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Main Grid: Categories | Banner | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4 h-fit">
            <h3 className="text-sm font-bold text-slate-800 mb-3">Top Categories</h3>
            <div className="space-y-0.5">
              {categories.map((cat, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 py-2 px-2 rounded-md hover:bg-gray-50 cursor-pointer group transition-colors"
                >
                  <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                  <span className="text-[13px] text-gray-600 group-hover:text-gray-900 transition-colors truncate">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <button className="flex items-center gap-1 text-[13px] text-red-500 font-medium hover:text-red-600 transition-colors">
                View all Categories
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center - Main Banner */}
        <div className="lg:col-span-7">
  <div className="relative bg-gradient-to-r from-yellow-300 via-orange-300 to-orange-400 rounded-lg overflow-hidden h-[420px] flex items-center">
    
    {/* Left Content - Text */}
    <div className="relative z-10 pl-8 pr-4 max-w-[55%]">
  
  <h2 className="text-3xl font-black text-black leading-tight mb-1">
    Premium Quality{" "}
    <span className="text-red-600">Tirpal & Tarpaulin</span>
  </h2>

  <h2 className="text-3xl font-black text-black leading-tight mb-1">
    Waterproof • HDPE • PVC • Truck Tirpal
  </h2>

  <h2 className="text-3xl font-black text-black leading-tight mb-4">
    Tent House Sheets • Agriculture Covers
  </h2>

  <p className="text-sm text-gray-700 font-medium mb-6 leading-relaxed">
    Strong & Durable Tarpaulin Solutions for Transport,
    Farming, Construction & Industrial Use
  </p>

  {/* CTA Button */}
  <div className="flex items-center">
    
    <div className="bg-white rounded-l-full px-4 py-2.5 flex items-center gap-2 shadow-lg border border-gray-200">
      <span className="text-blue-800 font-bold text-sm">
        shreeshyamtirpal.com
      </span>
    </div>

    <div className="bg-red-500 hover:bg-red-600 transition-all rounded-r-full px-5 py-2.5 shadow-lg cursor-pointer">
      <span className="text-white font-bold text-sm tracking-wide">
        VISIT NOW
      </span>
    </div>

  </div>

  <p className="text-[11px] text-gray-600 mt-2 ml-1">
    Truck Tirpal • Waterproof Sheets • Industrial Covers
  </p>

</div>

    {/* Right Side - IMAGE (replaced SVG map) */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[45%] h-[90%] flex items-center justify-center">
      <img 
        src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780813674/0b89ccbc901fbc4f25682d73774dca1e_dxviva.jpg" 
        alt="Shree Shyam Tirpal Center"
        className="max-w-full max-h-full object-contain drop-shadow-xl"
      />
      {/* अगर आप कोई और इमेज लगाना चाहते हो तो ऊपर src बदल देना */}
    </div>
  </div>

  {/* More Value Adds Section - same as before */}
  <div className="mt-4">
    <h3 className="text-sm font-bold text-slate-800 mb-3">More Value Adds</h3>
    <div className="grid grid-cols-5 gap-3">
      {valueAdds.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <p className="text-[11px] text-gray-500 font-medium">{item.title}</p>
          <p className="text-[12px] text-slate-800 font-semibold leading-tight mt-0.5">{item.subtitle}</p>
          <div className="flex items-center justify-between mt-2">
            <button className="flex items-center gap-1 text-[11px] text-orange-500 font-medium group-hover:text-orange-600">
              Learn more
              <ChevronRight className="w-3 h-3" />
            </button>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <item.icon className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Right Sidebar - Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4">
  
  {/* Card 1 - Looking for a Product (with background image) */}
  <div 
    className="relative rounded-lg p-5 shadow-sm overflow-hidden bg-cover bg-center"
    style={{ backgroundImage:"url('https://res.cloudinary.com/dfls5jdyc/image/upload/v1780814567/d279f74df89f38c2b7171dc68744d532_jop9mz.jpg')" }}
  >
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/40 z-0"></div>
    
    <div className="relative z-10">
      <h3 className="text-lg font-semibold text-white leading-snug">
        Looking<br/>for a Product
      </h3>
      <button className="mt-4 w-full border-2 border-white text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
        Post Buy Requirement
      </button>
    </div>
    {/* Optional: remove shopping bag icon or keep it? We'll remove to avoid clutter, but if you want, add with white color */}
  </div>

  {/* Card 2 - Grow Business (with background image) */}
  <div 
    className="relative rounded-lg p-5 shadow-sm overflow-hidden flex-1 bg-cover bg-center"
    style={{ backgroundImage:   "url('https://res.cloudinary.com/dfls5jdyc/image/upload/v1780814363/c7c90d465c7142084506d9400031cf20_licg0o.jpg')", }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    
    <div className="relative z-10">
      <h3 className="text-lg font-semibold text-white leading-snug">
        Want to grow your<br/>business <span className="font-black">10x</span><br/>faster
      </h3>
      <button className="mt-5 w-full border-2 border-white/80 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-white hover:text-red-500 transition-all duration-300 flex items-center justify-center gap-2">
        Sell on TradeIndia
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;