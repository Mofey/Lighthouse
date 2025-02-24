import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for any questions or to schedule an appointment.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="mt-10 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Thanks for Reaching Out!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are happy to hear from you. For administrative issues, please note the below hours of operation:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mt-4">
                <li>Monday: 9 a.m. – 6 p.m.</li>
                <li>Tuesday: 9 a.m. – 6 p.m.</li>
                <li>Wednesday: 9 a.m. – 6 p.m.</li>
                <li>Thursday: 9 a.m. – 6 p.m.</li>
                <li>Friday: 9 a.m. – 6 p.m.</li>
                <li>Saturday: 9 a.m. - 12 p.m.</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 dark:text-gray-300" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Phone</h3>
                <a href="tel:+2349048434776">
                  <p className="hover:text-blue-600 text-gray-600 dark:text-gray-300 dark:hover:text-yellow-500">
                    +234 904 843 4776
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-gray-300" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Address</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5B+Tokunbo+Omisore+Street,+Lekki+Phase+1,+Lekki,+Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="hover:text-blue-600 text-gray-600 dark:text-gray-300 dark:hover:text-yellow-500">5B Tokunbo Omisore Street,<br />Lekki Phase 1, Lekki, Lagos, Nigeria.</p>
                </a>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.762251501998!2d3.45468477969459!3d6.448208630490572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4f9c62eb061%3A0x5c5a454d272112bc!2s5b%20Tokunbo%20Omisore%20St%2C%20Lekki%20Phase%20I%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1627547278797!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md shadow-md border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
