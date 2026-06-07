import React, { useState, useEffect } from 'react';
import { Search, Mic, MapPin, ChevronDown, Sparkles, Grid } from 'lucide-react';
// App.jsx ya index.jsx mein
import './navbar-animations.css';

const Navbar = () => {
  // Auto-changing placeholder text
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

  // Typing effect for placeholder
  useEffect(() => {
    const currentText = placeholderTexts[placeholderIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === currentText) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause before deleting
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === "") {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
          setTypingSpeed(500); // Pause before typing next
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, placeholderIndex, typingSpeed]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ">
      <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo Section - Bigger */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img 
            src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" 
            alt="Shree Shyam Tirpal Center Logo" 
            className="h-20 w-auto object-contain"
          />
          <span className="text-xl font-bold text-gray-800 whitespace-nowrap hidden sm:block">
            SHREE SHYAM TIRPAL CENTER
            
          </span>
        </a>

        {/* Location Selector */}
        <div className="hidden md:flex items-center gap-2 text-gray-600 shrink-0 cursor-pointer hover:text-red-500 transition-colors px-2">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium">All India</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative flex items-center border-2 border-gray-300 rounded-full overflow-hidden hover:border-red-300 transition-all duration-300 focus-within:border-red-500 focus-within:shadow-lg focus-within:shadow-red-100">
            <input 
              type="text" 
              placeholder={displayText + "|"}
              className="w-full px-5 py-3 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400"
            />
            <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-semibold text-sm transition-all duration-300 hover:shadow-lg">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* AI Search Button with Animated Border */}
        <button className="hidden lg:flex items-center gap-2 border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group">
          {/* Animated light line */}
          <span className="absolute inset-0 rounded-xl overflow-hidden">
            <span className="absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-border-light-top"></span>
            <span className="absolute right-0 top-[-100%] w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-border-light-right"></span>
            <span className="absolute bottom-0 right-[-100%] w-full h-[2px] bg-gradient-to-l from-transparent via-white to-transparent animate-border-light-bottom"></span>
            <span className="absolute left-0 bottom-[-100%] w-[2px] h-full bg-gradient-to-t from-transparent via-white to-transparent animate-border-light-left"></span>
          </span>

          <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
          <span className="relative z-10">AI Search</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg z-20">
            New
          </span>
        </button>

        {/* Registered Users */}
        <div className="hidden xl:flex flex-col items-center text-center shrink-0 mx-2">
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Registered Users</span>
          <span className="text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg mt-1">1,17,29,775</span>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="text-sm font-semibold text-gray-700 hover:text-red-500 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg">
            Login
          </button>
          <button className="text-sm font-semibold text-white bg-slate-700 hover:bg-slate-800 px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-slate-300">
            Sign Up
          </button>
          <button className="p-2.5 text-gray-600 hover:text-gray-800 transition-colors border-2 border-gray-300 hover:border-gray-400 rounded-lg hover:bg-gray-50">
            <Grid className="w-5 h-5" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
