import React from 'react';
import { MapPin, Phone, Mail, Clock, Anchor, Wind } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Visit Our Marina
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Located in the heart of Marina Bay, our sailing academy offers the perfect setting for learning and adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-600">
              123 Marina Bay Drive<br />
              Harbor City, HC 12345<br />
              Dock 15-17
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone & Email</h3>
            <p className="text-slate-600">
              (555) 123-SAIL<br />
              info@bluehorizonsailing.com<br />
              emergency@bluehorizonsailing.com
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Hours</h3>
            <p className="text-slate-600">
              Mon-Fri: 8:00 AM - 8:00 PM<br />
              Sat-Sun: 7:00 AM - 9:00 PM<br />
              Emergency: 24/7
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Perfect Weather for Sailing
              </h3>
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                Our location offers consistent winds and protected waters, making it ideal for both beginners and experienced sailors. The marina features modern facilities, fuel dock, and easy access to open water.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">15-20 knot winds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Anchor className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Protected harbor</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Marina Bay Harbor"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Sailing Journey?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait – the best time to learn sailing is now. Our experienced instructors are ready to guide you through every step of your maritime adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;