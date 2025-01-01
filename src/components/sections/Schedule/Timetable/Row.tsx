import React from 'react';
import { type SectionTypes } from '@types';
import { getClockIcon } from './getClockIcon';

const Row = ({time, activity, duration }: SectionTypes) => {
  
  // Extract the hour from the time string
  const hour = time ? parseInt(time.split(":")[0]) : 0;
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100 flex items-center">
        {getClockIcon(hour)} {/* Dynamically render clock icon based on hour */}
        {time}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{activity}</td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{duration}</td>
    </tr>
  );
};

export default Row;