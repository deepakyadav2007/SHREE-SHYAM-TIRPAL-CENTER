import React, { useState } from 'react';
import { ChevronRight, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

const PostBuyRequirement = () => {
  const [formData, setFormData] = useState({
    product: '',
    mobile: '',
    quantity: '',
    unit: '',
    loan: 'no'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your API call here
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* LEFT SIDE: Form */}
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Post Buy Requirement</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Tell us what you need, and we'll help you get quotes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Product Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Provide the below details to get quick quotes from sellers*
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Enter the product you are looking for..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Quantity and Unit */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Unit</label>
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                      required
                    >
                      <option value="">Select Unit</option>
                      <option value="kg">KG</option>
                      <option value="g">Gram</option>
                      <option value="ltr">Liter</option>
                      <option value="ml">ML</option>
                      <option value="pcs">Pieces</option>
                      <option value="box">Box</option>
                      <option value="ton">Ton</option>
                    </select>
                  </div>
                </div>

                {/* Loan Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Would you like a loan to finance this order?
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="loan"
                        value="yes"
                        checked={formData.loan === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="loan"
                        value="no"
                        checked={formData.loan === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  Continue →
                </button>
              </form>

              {/* Trust Badges (optional, makes it look professional) */}
              <div className="mt-6 flex justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Fast Quotes</span>
                <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Verified Sellers</span>
              </div>
            </div>

            {/* RIGHT SIDE: Image */}
            <div className="relative bg-gradient-to-br from-blue-400 to-indigo-600 p-6 md:p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <img 
                  src="https://res.cloudinary.com/dfls5jdyc/image/upload/v1780811324/ChatGPT_Image_Jun_7__2026__11_18_08_AM-removebg-preview_qvw3ke.png" 
                  alt="Get Quotes Illustration"
                  className="w-full max-w-sm mx-auto rounded-lg"
                />
                <h1 className="text-xl font-bold mt-6">SHREE SHYAM TIRPAL CENTER</h1>

                <h3 className="text-xl font-bold mt-6">Get Best Quotes</h3>
                <p className="text-sm text-blue-100 mt-2">1000+ verified sellers ready to serve you</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PostBuyRequirement;