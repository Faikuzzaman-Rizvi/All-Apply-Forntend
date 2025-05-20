import React from 'react';
import { footerLinks } from '../../utils/constants';
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';

const Footer = ({ siteName, description, socialLinks, contact }) => {
  return (
    <footer className="bg-gray-900 text-white pt-20">
      <div className='' >
        <div className="container px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 - About */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              {siteName}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm">{description}</p>
            <div className="social-links flex space-x-2">
              <a 
                href={socialLinks.facebook} 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <FacebookOutlined />
              </a>
              <a 
                href={socialLinks.twitter} 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-400 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <TwitterOutlined />
              </a>
              <a 
                href={socialLinks.linkedin} 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-700 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <LinkedinOutlined />
              </a>
              <a 
                href={socialLinks.instagram} 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-600 hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <InstagramOutlined />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="footer-links space-y-3">
              {footerLinks[0].links.map((item, index) => (
                <li key={index} className="list-none">
                  <a 
                    href={item.link} 
                    className="text-gray-400 text-sm hover:text-blue-500 hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <RightOutlined className="mr-2 text-xs" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="footer-links space-y-3">
              {footerLinks[1].links.map((item, index) => (
                <li key={index} className="list-none">
                  <a 
                    href={item.link} 
                    className="text-gray-400 text-sm hover:text-blue-500 hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <RightOutlined className="mr-2 text-xs" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="footer-col">
            <h3 className="text-xl font-semibold mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvironmentOutlined className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400 text-sm">{contact.address}</span>
              </li>
              <li className="flex items-start">
                <PhoneOutlined className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400 text-sm">{contact.phone}</span>
              </li>
              <li className="flex items-start">
                <MailOutlined className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400 text-sm">{contact.email}</span>
              </li>
              <li className="flex items-start">
                <ClockCircleOutlined className="text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400 text-sm">{contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom bg-gray-800 py-5 w-full">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;