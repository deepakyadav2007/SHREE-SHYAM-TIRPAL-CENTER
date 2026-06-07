import React, { useState } from 'react';
import { ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const PostBuyRequirement = () => {
  const [formData, setFormData] = useState({ product: '', mobile: '', quantity: '', unit: '', loan: 'no' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Form */}
          <div className="p-5 md:p-8 flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Post Buy Requirement</h2>
            <p className="text-gray-500 text-sm mt-1">Tell us what you need, and we'll help you get quotes</p>
            <form className="space-y-4 mt-4">
              <div><label className="text-sm font-semibold">Provide details to get quick quotes*</label><input name="product" placeholder="Enter the product you are looking for..." className="w-full border rounded-lg p-2.5 text-sm mt-1" onChange={handleChange} required /></div>
              <div><label className="text-sm font-medium">Mobile Number</label><div className="flex mt-1"><span className="bg-gray-100 border p-2.5 rounded-l text-sm">+91</span><input name="mobile" placeholder="Enter Mobile Number" className="border p-2.5 rounded-r flex-1 text-sm" /></div></div>
              <div className="grid grid-cols-2 gap-3"><div><label className="text-sm">Quantity</label><input name="quantity" placeholder="e.g., 100" className="border rounded-lg p-2.5 text-sm w-full" /></div><div><label className="text-sm">Select Unit</label><select name="unit" className="border rounded-lg p-2.5 text-sm w-full"><option>Select</option><option>Kg</option><option>Pcs</option><option>Liter</option></select></div></div>
              <div><label className="text-sm">Would you like a loan?</label><div className="flex gap-4 mt-1"><label className="flex items-center gap-2"><input type="radio" name="loan" value="yes" onChange={handleChange} /> Yes</label><label className="flex items-center gap-2"><input type="radio" name="loan" value="no" onChange={handleChange} defaultChecked /> No</label></div></div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">Continue →</button>
            </form>
            <div className="flex justify-center gap-4 text-xs text-gray-400 mt-4"><span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span><span><Clock className="w-3 h-3 inline" /> Fast Quotes</span><span><ThumbsUp className="w-3 h-3 inline" /> Verified Sellers</span></div>
          </div>
          {/* Right Image */}
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-6 flex flex-col items-center justify-center text-white">
            <img src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" alt="Logo" className="w-32 h-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">SHREE SHYAM TIRPAL CENTER</h3>
            <p className="text-sm text-blue-100 mt-2">Get Best Quotes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBuyRequirement;