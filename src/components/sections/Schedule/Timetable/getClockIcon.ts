import React from 'react';
import {
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12
} from 'lucide-react';

// Function to return the corresponding clock icon based on the hour
export const getClockIcon = (hour: number) => {
  const iconProps = { className: "mr-2 text-blue-600 dark:text-yellow-400" };

  switch (hour) {
    case 1: return React.createElement(Clock1, iconProps);
    case 2: return React.createElement(Clock2, iconProps);
    case 3: return React.createElement(Clock3, iconProps);
    case 4: return React.createElement(Clock4, iconProps);
    case 5: return React.createElement(Clock5, iconProps);
    case 6: return React.createElement(Clock6, iconProps);
    case 7: return React.createElement(Clock7, iconProps);
    case 8: return React.createElement(Clock8, iconProps);
    case 9: return React.createElement(Clock9, iconProps);
    case 10: return React.createElement(Clock10, iconProps);
    case 11: return React.createElement(Clock11, iconProps);
    case 12: return React.createElement(Clock12, iconProps);
    default: return null;
  };
};