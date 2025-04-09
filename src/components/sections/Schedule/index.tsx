import MealPlan from './MealPlan';
import Timetable from './Timetable';
import { FaDownload } from 'react-icons/fa';
import timetableHandbook from '@assets/timetable-handbook.pdf';

const Schedule = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = timetableHandbook;
    link.download = "timetable-handbook.pdf";
    link.click();
  };

  return (
    <div>
      <MealPlan />
      <Timetable />
      <div className="mt-12 mb-12 flex justify-center">
          <button
            onClick={handleDownload}
            className="flex justify-center items-center w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-yellow-500 transition-colors"
          >
            <FaDownload className="mr-2" />
            DOWNLOAD DAILY TIMETABLE
          </button>
        </div>
    </div>
  );
};

export default Schedule;
