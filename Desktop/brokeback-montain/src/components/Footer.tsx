import React from 'react';
import { Anchor, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Blue Horizon Sailing</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Premier sailing academy offering comprehensive courses from beginner to advanced levels. Experience the freedom of sailing with certified instructors and modern equipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Basic Sailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Coastal Cruising</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Bareboat Charter</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Advanced Cruising</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Offshore Sailing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>(555) 123-SAIL</li>
              <li>info@bluehorizonsailing.com</li>
              <li>123 Marina Bay Drive</li>
              <li>Harbor City, HC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Blue Horizon Sailing Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Liability Waiver</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;