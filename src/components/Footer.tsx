
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
             <img src="./bank.png"  className='' alt=""  height={24} width={24} />
              <span className="font-bold text-xl gradient-text">Udyami Mahila</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Empowering women entrepreneurs in India with financial support and resources to build thriving businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/apply" className="text-gray-600 hover:text-brand-purple transition-colors">Apply for Funding</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-brand-purple transition-colors">Resources</Link>
              </li>
              
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-brand-purple transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/financial-literacy" className="text-gray-600 hover:text-brand-purple transition-colors">Financial Literacy</Link>
              </li>
              <li>
                <Link to="/resources/government-schemes" className="text-gray-600 hover:text-brand-purple transition-colors">Government Schemes</Link>
              </li>
              <li>
                <Link to="/resources/mentorship" className="text-gray-600 hover:text-brand-purple transition-colors">Mentorship</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-brand-purple transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-purple flex-shrink-0" />
                <span className="text-gray-600">Bhopal, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-brand-purple flex-shrink-0" />
                <span className="text-gray-600">+91 98XXXXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-purple flex-shrink-0" />
                <span className="text-gray-600">info@Udyami Mahila.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2023 Udyami Mahila. All rights reserved. Built with love for women entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
