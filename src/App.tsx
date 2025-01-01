import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/sections/About';
import Clients from './components/sections/Rules/Clients';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Navbar from './components/layout/Navbar';
import NotifyAndScroll from './components/NotifyAndScroll';
import Rules from './components/sections/Rules';
import ProhibitedItems from './components/sections/Rules/ProhibitedItems';
import Schedule from './components/sections/Schedule';
import Services from './components/sections/Services';
import Staff from './components/sections/Staff';
import Testimonials from './components/sections/Testimonials';

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Staff />
              <Testimonials />
              <Contact />
            </main>
          }
        />

        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prohibited-items" element={<ProhibitedItems />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/testimonials" element={<Testimonials />} />
        
      </Routes>
      <Footer />
      <NotifyAndScroll />
    </div>
  </Router>
);


export default App;
