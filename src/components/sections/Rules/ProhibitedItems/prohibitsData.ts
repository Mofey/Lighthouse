import React from 'react';
import {
    Book,
    Box,
    ShieldAlert,
    Scissors,
    XCircle
} from 'lucide-react';

const iconProps = { className: "h-6 w-6 text-white dark:text-yellow-300" };

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
