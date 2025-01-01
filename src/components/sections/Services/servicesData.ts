import React from 'react';
import { FaChartLine, FaHeart, FaUserMd } from 'react-icons/fa';

const iconProps = { className: "h-6 w-6 text-white" };

export const services = [
  {
    id: 1,
    name: "What we Provide",
    description: "Lighthouse Lekki provides an authentic and confidential rehabilitative service designed to focus on your emotional fitness, your creativity, and transform you back into a personality that thrives. Located in a stable, serene, and secure residential setting, partnering with professionals to provide the best therapeutic experience in the country.",
    icon: React.createElement(FaHeart, iconProps)
  },
  {
    id: 2,
    name: "Our Rehabilitation Program",
    description: "Holistic therapy and programs designed to assist individuals who are affected by substance use, unaddressed trauma, including anxiety and PTSD. Our structured treatment and rehabilitation activities assist clients to develop and practise the skills to manage substance use and related problems. In order for our program to be effective, the client resides in the residential rehabilitative home for the period of the therapeutic intervention. The duration of our program is 90 days, with 24-hour staff to assist our clients.",
    icon: React.createElement(FaUserMd, iconProps)
  },
  {
    id: 3,
    name: "Leadership & Professional Training",
    description: "Some of Lighthouse Lekki's compulsory activities include, but are not limited to:\n\n- Coupleship program\n- Occupational Therapy\n- Leadership / business coaching\n- Healing Trauma Program\n- Healthy sexuality and intimacy program\n- Life coaching",
    icon: React.createElement(FaChartLine, iconProps)
  },
];