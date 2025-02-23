import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault(); // Prevent default link behavior

    if (target.startsWith("#")) {
      // If the link is for an anchor (starts with '#'), perform smooth scroll
      const element = document.getElementById(target.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust the offset to prevent navbar from covering the section
          behavior: "smooth",
        });
      }
    } else {
      // If it's a full page link (e.g., /services or /schedule), use regular navigation
      navigate(target);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // Delay to ensure the page has fully loaded
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:gray-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Lighthouse Lekki</h3>
            <p className="text-gray-400">
              Empowering lives through comprehensive rehabilitation and recovery services.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/schedule" onClick={(e) => handleLinkClick(e, "/schedule")} className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="/services" onClick={(e) => handleLinkClick(e, "/services")} className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a href="tel:+2349048434776"
              className=" hover:text-white flex items-center text-gray-400"
              >
                <Phone className="h-5 w-5 mr-2" />
                +234 904 843 4776
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5B+Tokunbo+Omisore+Street,+Lekki+Phase+1,+Lekki,+Lagos,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-start text-gray-400"
              >
                <MapPin className="h-6 w-6 mr-2" />
                5B Tokunbo Omisore Street,<br />Lekki Phase 1, Lekki, Lagos, Nigeria.
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=100070266453006"
              className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/lighthouselekki"
              className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/lighthouselekki/"
              className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/lighthouselekki"
              className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Lighthouse Lekki. All rights reserved.</p>
            {/* <p className="text-gray-400 mt-4 md:mt-0">
              Emergency Contact: <a href="tel:+234XXXXXXXX" className="hover:text-blue-300 text-yellow-500">+234 XXX XXX XXXX</a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;