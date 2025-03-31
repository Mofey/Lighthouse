import { type SectionTypes } from '@types';

const StaffCard = ({ name, role, image, qualifications = [], description }: SectionTypes) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-2 dark:text-yellow-500">{role}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-1 dark:text-gray-300">Qualifications:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300">
            {qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 text-sm dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default StaffCard;