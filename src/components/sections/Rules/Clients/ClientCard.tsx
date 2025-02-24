import React from 'react'
import { motion } from 'framer-motion';
import { type SectionTypes } from '@types';

const ClientCard = ({ name, image, description }: SectionTypes) => {
  return (
    <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
    variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    }}
    >
    <img
    src={image}
    alt={name}
    className="w-full h-56 object-cover"
    />
      <div className="p-6">
        <h3
        className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:text-yellow-500 mb-2 hover:underline hover:underline-offset-4 transition-all duration-300"
        >
        {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
        {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ClientCard;