import React, { useState, useEffect } from 'react';
import { Search, Mic, MapPin, ChevronDown, Sparkles, Grid } from 'lucide-react';
import './navbar-animations.css';

const Navbar = () => {
  const placeholderTexts = [
    "Search Products or Services...",
    "Best B2B Portal, Marketplace in India",
    "Find Suppliers, Manufacturers, Exporters",
    "Search by Product Name, Company, or Category",
    "Discover Quality Products at Best Prices"
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = placeholderTexts[placeholderIndex];
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
        if (displayText === currentText) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
        if (displayText === "") {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
          setTypingSpeed(500);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, placeholderIndex, typingSpeed]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1500px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img 
            src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" 
            alt="Shree Shyam Tirpal Center Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
          <span className="text-sm md:text-base font-bold text-gray-800 hidden sm:inline-block">
            SHREE SHYAM TIRPAL CENTER
          </span>
        </a>

        {/* Location - Desktop */}
        <div className="hidden md:flex items-center gap-1 text-gray-600">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="text-sm">All India</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full md:w-auto order-last md:order-none mt-2 md:mt-0">
          <div className="relative flex items-center border-2 border-gray-300 rounded-full overflow-hidden focus-within:border-red-500">
            <input 
              type="text" 
              placeholder={displayText + "|"}
              className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 text-gray-400"><Mic className="w-5 h-5" /></button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm flex items-center gap-1">
              <Search className="w-4 h-4" /> <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* AI Search + Auth - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-xl text-sm font-semibold relative">
            <Sparkles className="w-4 h-4" /> AI Search
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
          </button>
          <button className="text-sm font-semibold text-gray-700 hover:text-red-500">Login</button>
          <button className="text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 px-4 py-2 rounded-lg">Sign Up</button>
          <Grid className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Mobile Auth Icons */}
        <div className="flex items-center gap-3 md:hidden">
          <MapPin className="w-5 h-5 text-red-500" />
          <button className="text-sm font-semibold text-gray-700">Login</button>
          <button className="text-sm font-semibold text-white bg-slate-700 px-3 py-1.5 rounded-lg">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;