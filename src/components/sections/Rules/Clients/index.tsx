import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { characteristics } from '@data';
import ClientCard from './ClientCard';

const Clients = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Client Characteristics
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Here are some characteristics of clients who may benefit from our services:
        </motion.p>
        {showCards && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {characteristics.map((char, index) => (
              <ClientCard key={index} {...char} />
            ))}
          </motion.div>
        )}
        <motion.p
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          To see if you or a loved one is a right fit for our programme, please
          contact us to learn more.
        </motion.p>
      </div>
    </section>
  );
};

export default Clients;
