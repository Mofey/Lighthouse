import { motion } from 'framer-motion';
import { prohibits } from '@data'
import ProhibitedCard from './ProhibitedCard';

const ProhibitedItems = () => {

  return (
    <section
      id="prohibits"
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
        className="text-4xl font-extrabold text-center text-blue-600 dark:text-gray-100 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        >
          Prohibited Items
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
          {prohibits.map((prohibit, index) => (
            <ProhibitedCard key={index} {...prohibit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProhibitedItems;