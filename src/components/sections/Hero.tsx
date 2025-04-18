import { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Loader from '../Loader';

const Hero = () => {
  /*const background = {
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80"
  }*/
  //'https://res.cloudinary.com/mofey/image/upload/v1735220782/clouds.png'
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
      <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-1000 ${
            animate ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <img
            src= 'https://res.cloudinary.com/mofey/image/upload/v1740338774/beach_ujo6vj.jpg'
            alt="Happy Family"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:w-3/5">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pointer-events-none">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto pointer-events-none">
              At Lighthouse Lekki, we provide comprehensive rehabilitation services
              in a supportive and healing environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:+2349048434776" className="block text-lg font-semibold text-white">
                <div className="flex items-center gap-2 p-4 bg-blue-600 rounded shadow-md hover:bg-blue-700 dark:hover:bg-yellow-500">
                  <FaPhoneAlt className="text-white w-6 h-6" />
                  Call Us Now
                </div>
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

        {/* Cloud Animation */}
        <div className="absolute z-10 bottom-0 left-0 w-full h-[13.75em] animate-cloudLoop pointer-events-none">
          <img src='https://res.cloudinary.com/mofey/image/upload/v1735220782/clouds.png'
          alt="Moving Cloud"
          className="w-full h-full object-contain opacity-50" />
        </div>
      </div>
    </>
  );
};

export default Hero;
