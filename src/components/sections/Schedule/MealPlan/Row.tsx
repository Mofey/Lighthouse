import React from 'react'
import { Utensils } from 'lucide-react';
import { SectionTypes } from '@types';

const Row = ({ day, breakfast, lunch, dinner}: SectionTypes) => {
  return (
    <tr className="dark:bg-gray-900">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Utensils className="h-5 w-5 text-blue-600 dark:text-yellow-300 mr-2" />
          {day}
        </div>
      </td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{breakfast}</td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{lunch}</td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{dinner}</td>
    </tr>
  );
};

export default Row;