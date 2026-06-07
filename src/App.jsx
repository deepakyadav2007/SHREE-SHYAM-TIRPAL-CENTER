import React from "react";

import Header from "./components/Header";

import HomePage from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import BestSellers from "./pages/BestSellers";
import ProductListing from "./pages/ProductListing";
import MarketplaceLayout from "./pages/MarketplaceLayout";
import PostBuyRequirement from "./pages/PostBuyRequirement";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />

      <HomePage />
      <BestSellers/>
      <ProductListing/>
      <MarketplaceLayout/>
      <PostBuyRequirement/>
      <Footer/>
      {/* <About /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;