import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Loader from '../Loader';
import Logo from '@assets/logo/logoLight.svg';

const Hero = () => {
  const background = {
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
  }

  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100); // Start animation after component mounts
  }, []);

  const handleImageLoad = () => {
    setLoading(false); // Hide loader once the image has loaded
  };

  return (
    <>
      {loading && <Loader />}
      <div id="home" className="relative min-h-screen flex items-center">
        <div
          className={`absolute inset-0 transition-transform duration-1000 ${
            animate ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <img
            src= {background.image}
            alt="Happy Family"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:w-3/5">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              At Lighthouse Lekki, we provide comprehensive rehabilitation services
              in a supportive and healing environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+234XXXXXXXX" className="text-lg font-semibold text-white">
                <button className="flex items-center gap-2 p-4 bg-blue-600 rounded shadow-md hover:bg-blue-700 dark:hover:bg-yellow-500">
                  <FaPhoneAlt className="text-white w-6 h-6" />
                  Call Us Now
                </button>
              </a>
              <a
                href="/services"
                className="relative text-lg font-semibold text-white transition-all duration-300 group hover:text-blue-200"
              >
                Our Services
                <span className="absolute left-0 bottom-[-10px] w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full dark:bg-yellow-300"></span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
