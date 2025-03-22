
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="Pugeat ホームページ"
        >
          <img 
            src="/lovable-uploads/5e3a71a2-4dea-48ab-a8a7-c0c3f83cf3c2.png" 
            alt="Pugeat Logo" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/service" className="nav-link">SERVICE</Link>
          <Link to="/news" className="nav-link">NEWS・BLOG</Link>
          <Link to="/contact" className="ml-4 btn-primary">CONTACT</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-pugeat-dark-green p-2 rounded-md"
          aria-label="メニューを開く"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out absolute w-full bg-white shadow-md ${
        mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <Link to="/about" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
          <Link to="/service" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>SERVICE</Link>
          <Link to="/news" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>NEWS・BLOG</Link>
          <Link to="/contact" className="btn-primary block text-center" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
