import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: "Customer Support",
      links: ["Help Center", "User Guide", "Return & Cancellation Policy", "Shipping & Delivery Policy", "Grievances", "Contact Us"]
    },
    {
      title: "About Us",
      links: ["About Our Company", "Success Stories", "TradeIndia in News", "Jobs & Careers", "Partner with Us", "Make a Payment"]
    },
    {
      title: "Our Services",
      links: ["TI Pay", "Trade Khata", "Business Loans", "Catalog Templates", "Get Instant Quote", "Book Domains", "Buy Trade Leads"]
    },
    {
      title: "For Sellers",
      links: ["Display New Products", "Post Your Requirement", "Advertise with Us", "Subscribe sell Trade Alerts", "Featured Products"]
    },
    {
      title: "For Buyers",
      links: ["Post Your Requirement", "Browse Suppliers", "Subscribe Buy Trade Alerts", "Industry Hubs", "Appoint Distributors"]
    },
    {
      title: "Directory",
      links: ["Manufacturers", "Country Suppliers", "Japan", "China", "Taiwan", "Thailand", "Malaysia", "Indonesia", "UAE", "Saudi Arabia", "USA", "Iran", "Other Countries"]
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-700" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: Logo + Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            {/* Logo Image */}
            <img 
              src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" 
              alt="Shree Shyam Tirpal Center Logo"
              className="h-20 w-auto"
            />
            <div>
              <h2 className="text-xl font-bold text-white">SHREE SHYAM TIRPAL CENTER</h2>
              <p className="text-xs text-gray-400">India's Leading Tarpaulin Manufacturer</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Connect with us:</span>
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold text-sm mb-3 border-l-2 border-orange-500 pl-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-gray-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: TradeIndia Partner + Weekly Newsletter */}
        <div className="border-t border-b border-gray-700 py-6 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">trade</span>
            <span className="text-sm font-medium text-orange-400">india.</span>
            <span className="text-sm">Partner</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Weekly Newsletter:</span>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-1 text-sm rounded-l-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 text-sm rounded-r-md text-white transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Country List Row */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            <span className="text-gray-400 font-medium">Other Countries:</span>
            <a href="#" className="hover:text-orange-400">Japan</a>
            <a href="#" className="hover:text-orange-400">China</a>
            <a href="#" className="hover:text-orange-400">Taiwan</a>
            <a href="#" className="hover:text-orange-400">Thailand</a>
            <a href="#" className="hover:text-orange-400">Malaysia</a>
            <a href="#" className="hover:text-orange-400">Indonesia</a>
            <a href="#" className="hover:text-orange-400">UAE</a>
            <a href="#" className="hover:text-orange-400">Saudi Arabia</a>
            <a href="#" className="hover:text-orange-400">USA</a>
            <a href="#" className="hover:text-orange-400">Iran</a>
            <a href="#" className="hover:text-orange-400">Other Countries</a>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center text-xs text-gray-500 pt-6 border-t border-gray-800">
          <p>© 1999-2026 Infocom Network Private Limited. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400">Grievances</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;