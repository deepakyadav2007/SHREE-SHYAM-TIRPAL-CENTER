import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const sections = [
    { title: "Customer Support", links: ["Help Center", "User Guide", "Return Policy", "Shipping Policy", "Grievances", "Contact Us"] },
    { title: "About Us", links: ["About Company", "Success Stories", "TradeIndia News", "Jobs & Careers", "Partner with Us", "Make Payment"] },
    { title: "Our Services", links: ["TI Pay", "Trade Khata", "Business Loans", "Catalog Templates", "Get Instant Quote", "Book Domains"] },
    { title: "For Sellers", links: ["Display Products", "Post Requirement", "Advertise", "Sell Alerts", "Featured Products"] },
    { title: "For Buyers", links: ["Post Requirement", "Browse Suppliers", "Buy Alerts", "Industry Hubs", "Appoint Distributors"] },
    { title: "Directory", links: ["Manufacturers", "Country Suppliers", "Japan", "China", "USA", "UAE", "Other Countries"] }
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <img src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" alt="Logo" className="h-12 w-auto" />
            <div><h2 className="text-white font-bold text-lg">SHREE SHYAM TIRPAL CENTER</h2><p className="text-xs text-gray-400">India's Leading Tarpaulin Manufacturer</p></div>
          </div>
          <div className="flex gap-4"><span className="text-sm">Connect:</span>{[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube].map((Icon, i) => <Icon key={i} className="w-5 h-5 cursor-pointer hover:text-white transition" />)}</div>
        </div>
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mb-6">
          {sections.map((sec, i) => (
            <div key={i}><h3 className="text-white font-semibold text-sm border-l-2 border-orange-500 pl-2">{sec.title}</h3><ul className="mt-2 space-y-1 text-xs">{sec.links.map(link => <li key={link} className="hover:text-orange-400 cursor-pointer">{link}</li>)}</ul></div>
          ))}
        </div>
        {/* Newsletter & Countries */}
        <div className="border-t border-b border-gray-700 py-4 mb-4 flex flex-col md:flex-row justify-between gap-3">
          <div className="text-sm">trade <span className="text-orange-400">india.</span> Partner</div>
          <div className="flex gap-2"><input type="email" placeholder="Your email" className="bg-gray-800 border border-gray-600 rounded-l px-3 py-1 text-sm" /><button className="bg-orange-500 px-3 py-1 text-sm rounded-r">Subscribe</button></div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs mb-4"><span className="text-gray-400">Other Countries:</span> Japan, China, Taiwan, Thailand, Malaysia, Indonesia, UAE, Saudi, USA, Iran</div>
        <div className="text-center text-xs text-gray-500 pt-3 border-t border-gray-800">© 1999-2026 Shree Shyam Tirpal Center. All rights reserved. | <a href="#">Privacy</a> | <a href="#">Terms</a></div>
      </div>
    </footer>
  );
};

export default Footer;