import React, { useState, useRef } from 'react';
import { Crown, X } from 'lucide-react';
import QRCode from 'react-qr-code';  // ✅ default import works

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    pincode: '',
    state: '',
    district: '',
    quantity: 1,
    size: '',
    weight: '',
    paymentMethod: 'offline'
  });
  const [totalAmount, setTotalAmount] = useState(0);

  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780818402/im1_am4yph.jpg",
      title: "The Anatomy of Heavy Duty Tarps",
      price: 5,
      priceUnit: "Piece",
      seller: "NIKO STEEL AND ENGINEERING LLP",
      badge: "Platinum Seller",
      badgeColor: "bg-purple-600"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780821902/im2_tmyxpa.jpg",
      title: "Fire Retardant tarps",
      price: 2300000,
      priceUnit: "Unit",
      seller: "ACTION CONSTRUCTION EQUIPMENT LTD.",
      badge: null,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822473/im3_jnowee.jpg",
      title: "Features and applications of Heavy Weight Tarpaulin",
      price: 240.0,
      priceUnit: "Kilogram",
      seller: "SHIV SHAKTI INDIA",
      badge: null,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822646/im4_aba7ic.jpg",
      title: "The Most Durable Tarpaulin Sheets for Extreme Weather",
      price: 170,
      priceUnit: "Pair",
      seller: "VICTOR IMPORTS",
      badge: null,
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780822833/im5_vw0jj7.jpg",
      title: "Benefits of Using Custom Tarpaulins for Outdoor Needs",
      price: 195.0,
      priceUnit: "Kilogram",
      seller: "PHOOLCHAND BHAGATSINGH",
      badge: null,
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dfls5jdyc/image/upload/v1780823052/im6_jpltkb.jpg",
      title: "The Modern Utility of Waterproof Plastic Tarpaulins",
      price: 4.4,
      priceUnit: "Carton",
      seller: "HEBEI TOMATO INDUSTRY CO LTD.",
      badge: null,
    }
  ];

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setShowQR(false);
    setTotalAmount(product.price);
    setFormData({
      name: '',
      address: '',
      mobile: '',
      pincode: '',
      state: '',
      district: '',
      quantity: 1,
      size: '',
      weight: '',
      paymentMethod: 'offline'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'quantity') {
      const qty = parseInt(value) || 0;
      setTotalAmount(qty * selectedProduct.price);
    }
  };

  const sendWhatsAppMessage = (orderDetails) => {
    const phone = "9929293700";
    const message = encodeURIComponent(orderDetails);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === 'online') {
      setShowQR(true);
    } else {
      const orderSummary = `
*New Order from Shree Shyam Tirpal Center*
-----------------------------------------
*Product:* ${selectedProduct.title}
*Price per ${selectedProduct.priceUnit}:* ₹${selectedProduct.price}
*Quantity:* ${formData.quantity}
*Total Amount:* ₹${totalAmount}
*Size:* ${formData.size || 'Not specified'}
*Weight:* ${formData.weight || 'Not specified'}
-----------------------------------------
*Customer Details:*
Name: ${formData.name}
Mobile: ${formData.mobile}
Address: ${formData.address}
Pincode: ${formData.pincode}
State: ${formData.state}
District: ${formData.district}
Payment Method: Offline (Cash/COD)
-----------------------------------------
Thank you for shopping!
      `;
      sendWhatsAppMessage(orderSummary);
      setShowModal(false);
      setSelectedProduct(null);
    }
  };

  const handleQRClose = () => {
    setShowQR(false);
    setShowModal(false);
    setSelectedProduct(null);
  };

  // UPI QR configuration (replace with your own UPI ID)
  const upiId = "7374998022@axi";
  const upiIntent = `pay?pa=${upiId}&pn=Shree Shyam Tirpal Center&am=${totalAmount}&cu=INR`;
  const upiUrl = `upi://${upiIntent}`;

  return (
    <section className="w-full bg-orange-500 py-4 md:py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-xl font-bold mb-3 pl-2">Best Sellers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition group flex flex-col">
              {product.badge && (
                <div className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 inline-block rounded-br-lg`}>
                  <Crown className="w-3 h-3 inline mr-1" /> {product.badge}
                </div>
              )}
              <div className="h-32 p-2 flex items-center justify-center bg-white">
                <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition" />
              </div>
              <div className="p-2 flex-1 flex flex-col">
                <h3 className="text-xs md:text-sm font-semibold line-clamp-2 min-h-[40px]">{product.title}</h3>
                <p className="text-xs font-bold text-gray-900 mt-1">₹{product.price} / {product.priceUnit}</p>
                <p className="text-[10px] text-gray-500 truncate">By: {product.seller}</p>
                <button 
                  onClick={() => handleOrderClick(product)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white text-xs py-1.5 rounded transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Modal */}
      {showModal && !showQR && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-lg font-bold">Order Details</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 p-3 rounded mb-4">
                <p className="text-sm font-semibold">{selectedProduct.title}</p>
                <p className="text-sm text-red-600">₹{selectedProduct.price} / {selectedProduct.priceUnit}</p>
                <p className="text-xs text-gray-500">Seller: {selectedProduct.seller}</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" placeholder="Full Name" className="w-full border rounded p-2 text-sm" onChange={handleInputChange} required />
                <textarea name="address" placeholder="Address" className="w-full border rounded p-2 text-sm" rows="2" onChange={handleInputChange} required />
                <input type="tel" name="mobile" placeholder="Mobile Number" className="w-full border rounded p-2 text-sm" onChange={handleInputChange} required />
                <input type="text" name="pincode" placeholder="Pincode" className="w-full border rounded p-2 text-sm" onChange={handleInputChange} required />
                <input type="text" name="district" placeholder="District" className="w-full border rounded p-2 text-sm" onChange={handleInputChange} required />
                <input type="text" name="state" placeholder="State" className="w-full border rounded p-2 text-sm" onChange={handleInputChange} required />
                
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" name="quantity" placeholder="Quantity" className="border rounded p-2 text-sm" value={formData.quantity} onChange={handleInputChange} required min="1" />
                  <input type="text" name="size" placeholder="Size (e.g., 10x10 ft)" className="border rounded p-2 text-sm" onChange={handleInputChange} />
                </div>
                <input type="text" name="weight" placeholder="Weight (kg / optional)" className="border rounded p-2 text-sm" onChange={handleInputChange} />
                
                <div className="bg-blue-50 p-2 rounded">
                  <p className="text-sm font-semibold">Total Amount: ₹{totalAmount}</p>
                </div>

                <div>
                  <label className="text-sm font-medium">Payment Method</label>
                  <div className="flex gap-4 mt-1">
                    <label className="flex items-center gap-1"><input type="radio" name="paymentMethod" value="online" onChange={handleInputChange} /> Online (UPI QR)</label>
                    <label className="flex items-center gap-1"><input type="radio" name="paymentMethod" value="offline" onChange={handleInputChange} defaultChecked /> Offline (Cash/COD)</label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                  Proceed to {formData.paymentMethod === 'online' ? 'Payment' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal for Online Payment */}
      {showQR && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-sm w-full p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Scan QR to Pay</h3>
              <button onClick={handleQRClose} className="text-gray-500 hover:text-gray-700"><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-white p-4 inline-block mx-auto">
              <QRCode value={upiUrl} size={200} />
            </div>
            <p className="text-sm mt-3">Amount: ₹{totalAmount}</p>
            <p className="text-xs text-gray-500 mt-2">Pay using any UPI app (Google Pay, PhonePe, etc.)</p>
            <button 
              onClick={() => {
                const orderSummary = `
*New Order (Paid Online via UPI QR)*
-----------------------------------------
*Product:* ${selectedProduct.title}
*Price per ${selectedProduct.priceUnit}:* ₹${selectedProduct.price}
*Quantity:* ${formData.quantity}
*Total Amount:* ₹${totalAmount}
*Size:* ${formData.size || 'Not specified'}
*Weight:* ${formData.weight || 'Not specified'}
-----------------------------------------
*Customer Details:*
Name: ${formData.name}
Mobile: ${formData.mobile}
Address: ${formData.address}
Pincode: ${formData.pincode}
State: ${formData.state}
District: ${formData.district}
Payment Method: Online (UPI)
-----------------------------------------
Thank you for shopping!
                `;
                sendWhatsAppMessage(orderSummary);
                handleQRClose();
              }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              I have made the payment (Send Order)
            </button>
            <p className="text-[10px] text-gray-400 mt-2">Click after completing payment to confirm order</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestSellers;