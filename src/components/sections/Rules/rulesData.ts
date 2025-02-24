import React from 'react';
import {
  AlertCircle,
  Ban,
  Bed,
  CheckCircle,
  Clock,
  Coffee,
  Flame,
  Home,
  Search,
  Shield,
  UserCheck
} from 'lucide-react';

const iconProps = { className: "h-6 w-6 text-white dark:text-yellow-300" }

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