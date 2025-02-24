import React from 'react';
import StaffCard from './StaffCard';
import { staffMembers } from './staffData';

const Staff = () => {
  return (
    <section id="staff" className="py-20 bg-gray-100 bg-garden bg-cover bg-center bg-fixed dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Expert Team</h2>
          <p className="text-lg max-w-3xl mx-auto text-white">
            Meet our dedicated team of professionals committed to your recovery journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;