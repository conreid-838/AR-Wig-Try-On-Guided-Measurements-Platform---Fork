import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Try On',
    path: '/try-on'
  }, {
    name: 'Measurement',
    path: '/measurement'
  }, {
    name: 'Consultation',
    path: '/consultation'
  }, {
    name: 'Education',
    path: '/education'
  }];
  return <nav className="bg-white shadow-sm py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl text-[#8b5e83] font-medium">
          Serene Wigs
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors duration-300 hover:text-[#8b5e83] ${location.pathname === link.path ? 'text-[#8b5e83]' : 'text-gray-600'}`}>
                {link.name}
              </Link>)}
          </div>
          <div className="flex items-center space-x-4 text-gray-600">
            <button aria-label="User account" className="hover:text-[#8b5e83] transition-colors duration-300">
              <User size={20} />
            </button>
            <button aria-label="Shopping bag" className="hover:text-[#8b5e83] transition-colors duration-300">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-[#8b5e83] transition-colors duration-300" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden mt-4 py-4 px-6 bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors duration-300 hover:text-[#8b5e83] ${location.pathname === link.path ? 'text-[#8b5e83]' : 'text-gray-600'}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
            <div className="flex items-center space-x-4 pt-2 text-gray-600">
              <button aria-label="User account" className="hover:text-[#8b5e83] transition-colors duration-300 flex items-center">
                <User size={18} />
                <span className="ml-2">Account</span>
              </button>
              <button aria-label="Shopping bag" className="hover:text-[#8b5e83] transition-colors duration-300 flex items-center">
                <ShoppingBag size={18} />
                <span className="ml-2">Bag</span>
              </button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navigation;