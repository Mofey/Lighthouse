import React from 'react';
import { motion } from 'framer-motion';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';

const Services = () => {
  
  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center text-blue-600 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <i>Discover the range of services we offer to help you succeed.</i>
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
