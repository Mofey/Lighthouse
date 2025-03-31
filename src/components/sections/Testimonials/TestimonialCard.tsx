import { useState } from 'react';
import { type SectionTypes } from '@types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps extends SectionTypes {
  index: number;
}

const TestimonialCard = ({ name, video, image, text, index }: TestimonialCardProps) => {
  // Track which video is playing
  const [playVideo, setPlayVideo] = useState<number | null>(null);

  return (
    <div
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full"
    >
      {video ? (
        <div className="flex-grow">
          <div className="aspect-w-16 aspect-h-9">
            {playVideo === index ? (
              <video
                src={video}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            ) : (
              <div
                className="relative w-full h-full rounded-lg cursor-pointer"
                onClick={() => setPlayVideo(index)}
              >
                <img
                  src='https://res.cloudinary.com/mofey/image/upload/v1735192663/Screenshot_2024-12-26_065542.png'
                  alt={`Thumbnail for ${name}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="text-white text-4xl">▶</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-grow">
          <Quote className="h-8 w-8 text-blue-600 dark:text-yellow-300 mb-4" />
          <p className="text-gray-600 dark:text-gray-300 mb-4">{text}</p>
        </div>
      )}
      <div className="flex items-center mt-4 space-x-4 pt-2 pb-2">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <span className="font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;