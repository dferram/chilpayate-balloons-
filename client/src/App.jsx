import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import BalloonCustomizer from './components/BalloonCustomizer';
import ServicesGrid from './components/ServicesGrid';
import ProcessSteps from './components/ProcessSteps';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuote = () => {
    const contactElem = document.getElementById('cotizar');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickQuote = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4] text-[#1A191C] font-sans selection:bg-stone-300 selection:text-black">
      
      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with Realistic Balloon Physics Canvas & Scroll Animation */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Products Showcase Carousel */}
        <ProductCarousel
          onSelectProduct={setSelectedProduct}
          onQuickQuote={handleQuickQuote}
        />

        {/* Live 3D Balloon Customizer & Simulator */}
        <BalloonCustomizer />

        {/* Services & Occasions */}
        <ServicesGrid onOpenQuote={handleOpenQuote} />

        {/* How it Works / Process */}
        <ProcessSteps />

        {/* Testimonials & Social Proof */}
        <Testimonials />

        {/* Quote & Contact Section */}
        <ContactSection />
      </main>

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
