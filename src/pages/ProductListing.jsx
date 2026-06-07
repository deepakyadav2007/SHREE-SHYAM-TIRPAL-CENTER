import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductListing = () => {
  const products = [
    { name: "Benefits of Using Custom Tarpaulins for Outdoor Needs", mrp: 9954, price: 3599, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822833/im5_vw0jj7.jpg" },
    { name: "The Most Durable Tarpaulin Sheets for Extreme Weather", mrp: 3999, price: 1399, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822646/im4_aba7ic.jpg" },
    { name: "Features and applications of Heavy Weight Tarpaulin", mrp: 7959, price: 4999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780823052/im6_jpltkb.jpg" },
    { name: "Heavy-Duty Tarpaulin For Keeping Your Outdoor Equipment Safe&Sound", mrp: 9945, price: 5999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822473/im3_jnowee.jpg" },
    { name: "Using Waterproof Tarpaulin Sheets for Construction Site Protection", mrp: 9945, price: 3999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780821902/im2_tmyxpa.jpg" },
    { name: "The Ultimate Guide to Choosing the Right Tarpaulin Sheet", mrp: 19999, price: 15999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780814567/d279f74df89f38c2b7171dc68744d532_jop9mz.jpg" },
    { name: "Multi Use Heavy Duty Waterproof Tarpaulin Sheet", mrp: 19999, price: 14999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780824097/im7_qztwyl.jpg" },
    { name: "10 Oz Vinyl Tarp Manufacturer Factory, Supplier, Wholesale - UNISIGN", mrp: 22999, price: 20999, image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780824214/im8_m9rntk.jpg" },
  ];

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">Our Premium Tarpaulins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden bg-gray-200"><img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition" /></div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-semibold line-clamp-2 min-h-[48px]">{product.name}</h3>
                <div className="mt-2 flex items-baseline gap-2"><span className="text-gray-400 line-through text-xs">MRP ₹{product.mrp.toLocaleString()}</span><span className="text-red-600 font-bold text-lg">₹{product.price.toLocaleString()}</span></div>
                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded flex items-center justify-center gap-2 text-sm"><ShoppingCart className="w-4 h-4" /> Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;