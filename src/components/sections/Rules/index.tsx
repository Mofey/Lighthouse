import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rules } from '@data';
import RulesCard from './RuleCard';

const Rules = () => {
  const navigate = useNavigate();

  const paths = {
    prohibited_items: '/prohibited-items',
    clients: '/clients'
  }

  const handleLinkClick = (key: keyof typeof paths) => {
    navigate(paths[key]);
  }

  return (
    <section
      id="rules"
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
        className="text-4xl font-extrabold text-center text-blue-600 dark:text-gray-100 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        >
          Facility Rules & Guidelines
        </motion.h2>
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
          {rules.map((rule, index) => (
            <RulesCard key={index} {...rule} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <button
            onClick={() => handleLinkClick('prohibited_items')}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-yellow-500 transition-colors"
          >
            ITEMS WE PROHIBIT
          </button>
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => handleLinkClick('clients')}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-yellow-500 transition-colors"
          >
            WHAT WE EXPECT FROM YOU
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rules;