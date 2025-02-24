import React from 'react';
import { Target, Heart, Shield } from 'lucide-react';
import { FaDownload } from 'react-icons/fa';
import lighthouseHandbook from '@assets/lighthouse-handbook.pdf';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = lighthouseHandbook;
    link.download = "lighthouse-handbook.pdf";
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Lighthouse Lekki is a premier rehabilitation center dedicated to helping
            individuals overcome challenges and rebuild their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-blue-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To provide exceptional rehabilitation services that empower individuals
              to achieve lasting recovery and personal growth.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-blue-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be a beacon of hope and a leader in the field of rehabilitation, known for our
              compassionate care and innovative approaches.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Integrity, compassion, and excellence are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-12 flex justify-center">
        <button
          onClick={handleDownload}
          className=" flex items-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-yellow-500 transition-colors"
        >
          <FaDownload className="mr-2" />
          DOWNLOAD LIGHTHOUSE HANDBOOK
        </button>
      </div>
    </section>
  );
};

export default About;