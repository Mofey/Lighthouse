import React from 'react'
import { motion } from 'framer-motion'
import { SectionTypes } from '@types'

const ServiceCard = ({name, icon, description}: SectionTypes) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 transform transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-blue-600 text-white rounded-full p-4">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-center text-blue-600 dark:text-yellow-300 mb-4">
        {name}
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;