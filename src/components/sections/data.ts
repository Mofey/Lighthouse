import React from 'react';
import { FaChartLine, FaHeart, FaUserMd } from 'react-icons/fa';
import {
  AlertCircle,
  Ban,
  Bed,
  Book,
  Box,
  CheckCircle,
  Clock,
  Coffee,
  Flame,
  Home,
  Search,
  Shield,
  ShieldAlert,
  Scissors,
  UserCheck,
  XCircle
} from 'lucide-react';

const iconProps = { className: "h-6 w-6 text-white dark:text-yellow-300" };

export const characteristics = [
  {
    name: "Severe Alcohol or Drug Misuse",
    description: "Individuals with a severe form of alcohol or other drug misuse, or those in a high-risk group who need medication-assisted detoxification.",
    image: "https://images.unsplash.com/photo-1683105314206-7862988a0ee6?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Residential Treatment",
    description: "Individuals with a dependency problem who want treatment that is residential, and are willing to accept restrictions on their liberty for the duration of the program.",
    image: "https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Difficulty Achieving Abstinence",
    description: "Individuals finding it difficult to achieve abstinence in the community.",
    image: "https://images.unsplash.com/photo-1722610522876-c309d1bb297d?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Respite & Intensive Care",
    description: "Individuals who require respite, and an intensive programme of support and care, which cannot realistically be delivered in a community or out-client setting.",
    image: "https://res.cloudinary.com/mofey/image/upload/v1735220791/treatment.jpg",
  },
  {
    name: "Treatment Away from Family",
    description: "Individuals who need to receive treatment away from their social circle or family environment.",
    image: "https://images.unsplash.com/photo-1471970394675-613138e45da3?w=600&auto=format&fit=crop&q=60",
  },
];

export const meals = [
  {
    day: "Monday",
    breakfast: "Oatmeal with fruits",
    lunch: "Grilled chicken salad",
    dinner: "Fish with vegetables"
  },
  // Add more days
];

export const prohibits = [
  {
    name: "Permitted Items",
    description: "You may bring reading and writing materials. The centre supplies bedding and basic toiletries.",
    icon: React.createElement(Book, iconProps),
  },
  {
    name: "Belongings Check",
    description:
        "A staff member will inspect your belongings before admission. Any unsuitable items will be securely stored until your exit.",
    icon: React.createElement(Box, iconProps),
  },
  {
    name: "Body Search",
    description: "Upon admission, you will be subjected to a body search to ensure no prohibited items are being stored.",
    icon: React.createElement(ShieldAlert, iconProps),
  },
  {
    name: "Prohibited: Electronics",
    description: "Portable TVs, cameras, or DVD players are not allowed.",
    icon: React.createElement(XCircle, iconProps),
  },
  {
    name: "Prohibited: Flammable Items",
    description: "Incense, candles, or oil burners are strictly prohibited.",
    icon: React.createElement(ShieldAlert, iconProps),
  },
  {
    name: "Prohibited: Sharp Objects",
    description: "Sharp objects of any kind are not permitted.",
    icon: React.createElement(Scissors, iconProps),
  },
  {
    name: "Prohibited: Aerosols and Fragrances",
    description: "Spray deodorants, perfumes, oils, and aerosols are not allowed. Roll-on deodorants are permitted.",
    icon: React.createElement(XCircle, iconProps),
  },
  {
    name: "Prohibited: Weapons and Drug Paraphernalia",
    description: "Weapons and all drug-related items are strictly forbidden.",
    icon: React.createElement(ShieldAlert, iconProps),
  },
  {
    name: "Prohibited: Mouthwash",
    description: "Mouthwash is not allowed at the centre.",
    icon: React.createElement(XCircle, iconProps),
  },
  {
    name: "Prohibited: Explicit Materials",
    description: "Pornographic material is strictly forbidden.",
    icon: React.createElement(ShieldAlert, iconProps),
  },
  {
    name: "Prohibited: Expensive Items",
    description: "Do not bring expensive items such as jewellery.",
    icon: React.createElement(XCircle, iconProps),
  },
  {
    name: "Prohibited: Inappropriate Clothing",
    description: "Clothing with brands of alcohol, drugs, or offensive logos is not allowed.",
    icon: React.createElement(XCircle, iconProps),
  },
  {
    name: "Prohibited: Certain Books",
    description: "Books with themes of gangs, drug use, grotesque imagery, horror, or occult subjects are not permitted.",
    icon: React.createElement(Book, iconProps),
  },
  {
    name: "Prohibited: Non-Prescribed Medication",
    description: "Non-prescribed or undeclared medications, including herbal highs, are strictly prohibited.",
    icon: React.createElement(ShieldAlert, iconProps),
  },
];

export const rules = [
  {
    name: "Prohibition of Alcohol and Drugs",
    description: "The consumption of alcohol or use of unauthorized substances is strictly prohibited. Violation will result in immediate discharge.",
    icon: React.createElement(AlertCircle, iconProps),
  },
  {
    name: "Suspicion of Substance Use",
    description: "Residents suspected of using substances or found with related paraphernalia are subject to discharge.",
    icon: React.createElement(AlertCircle, iconProps),
  },
  {
    name: "Medication Management",
    description: "All medications and vitamins must be deposited with the admitting nurse and will be dispensed as prescribed.",
    icon: React.createElement(Shield, iconProps),
  },
  {
    name: "Mandatory Program Participation",
    description: "Active participation in the program is required. Attendance at all meetings is mandatory.",
    icon: React.createElement(CheckCircle, iconProps),
  },
  {
    name: "Punctuality Policy",
    description: "Residents must be punctual for all meals and meetings.",
    icon: React.createElement(Clock, iconProps),
  },
  {
    name: "Tobacco-Free Facilities",
    description: "Tobacco use is not allowed in program facilities or on grounds.",
    icon: React.createElement(Ban, iconProps),
  },
  {
    name: "Bedroom Cleanliness",
    description: "Bedrooms must be kept tidy at all times. Beds must be made by 8:00 AM, and personal items must be in their proper place.",
    icon: React.createElement(Bed, iconProps),
  },
  {
    name: "Neat Appearance",
    description: "Residents must maintain a neat appearance. Exercise apparel is not a substitute for casual wear.",
    icon: React.createElement(UserCheck, iconProps),
  },
  {
    name: "Food and Beverages Policy",
    description: "No food or beverages are allowed in bedrooms. They must be consumed in designated areas.",
    icon: React.createElement(Coffee, iconProps),
  },
  {
    name: "Centre Cleanliness",
    description: "Residents must maintain the cleanliness of their room and common areas, including living rooms and bathrooms.",
    icon: React.createElement(Home, iconProps),
  },
  {
    name: "Kitchen Access",
    description: "The main kitchen area and appliances are off-limits except for residents assigned kitchen duties.",
    icon: React.createElement(Shield, iconProps),
  },
  {
    name: "Fire and Emergency Procedures",
    description: "During emergencies, exit the building via the closest exit and proceed to the front of the property for roll call.",
    icon: React.createElement(Flame, iconProps),
  },
  {
    name: "Client Conduct",
    description: "Violence, threats, or verbal abuse will not be tolerated. Respect staff and residents at all times.",
    icon: React.createElement(UserCheck, iconProps),
  },
  {
    name: "Inspection of Belongings",
    description: "Upon admission, belongings will be inspected. Lighthouse Lekki reserves the right to inspect personal spaces anytime.",
    icon: React.createElement(Search, iconProps),
  },
];

export const schedule = [
  {
    time: "06:00 AM",
    activity: "Wake Up & Morning Meditation",
    duration: "1 hour"
  },
  {
    time: "07:00 AM",
    activity: "Breakfast",
    duration: "1 hour"
  },
  // Add more activities
];

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

export const staffMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1642929426263-caf1617ced29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwZG9jdG9yfGVufDB8fDB8fHww",
    qualifications: [
      "MD in Psychiatry",
      "Board Certified in Addiction Medicine",
      "5+ years experience"
    ],
    description: "Dr. Johnson leads our medical team with expertise in addiction treatment and mental health care."
  },
  {
    name: "Michael Adebayo",
    role: "Lead Counselor",
    image: "https://images.unsplash.com/photo-1638514351607-585e69bbbb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
    qualifications: [
      "Master's in Clinical Psychology",
      "Certified Addiction Counselor",
      "7+ years experience"
    ],
    description: "Michael specializes in cognitive behavioral therapy and group counseling sessions."
  },
  {
    name: "Dr. Amina Okafor",
    role: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1687095961895-71ec4d207115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
    qualifications: [
      "PhD in Clinical Psychology",
      "Specialized in Trauma Therapy",
      "8+ years experience"
    ],
    description: "Dr. Okafor focuses on trauma-informed care and individual therapy sessions."
  }
];

export const testimonials = [
  {
    name: "Jane S.",
    text: "The program at Lighthouse Lekki changed my life. The staff's dedication and support made all the difference.",
    image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJsYWNrJTIwd29tYW4ncyUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "John A.",
    video: "https://lighthouselekki.s3.us-east-2.amazonaws.com/LightHouse+4Min+Final_Small2.mp4",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJsYWNrJTIwbWFuJ3MlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Tom H.",
    text: "Deciding to go to Lighthouse for my drug addiction is definitely the healthiest decision I could have made for my career.",
    image: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxibGFjayUyMG1hbidzJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];