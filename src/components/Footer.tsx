import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-white pt-12 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl text-[#8b5e83] font-medium">
              Serene Wigs
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Luxury wig solutions with a focus on comfort, confidence, and
              personalized care.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-gray-400 hover:text-[#8b5e83] transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/try-on" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Virtual Try-On
                </Link>
              </li>
              <li>
                <Link to="/measurement" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Measurement Guide
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Education & Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-[#8b5e83] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-600">Mon-Fri: 9am - 6pm EST</li>
              <li className="text-sm text-gray-600">contact@serenewigs.com</li>
              <li className="text-sm text-gray-600">1-800-SERENE-WIGS</li>
              <li>
                <a href="#" className="text-sm text-[#8b5e83] hover:underline transition-colors duration-300">
                  Book a Private Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Serene Wigs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;