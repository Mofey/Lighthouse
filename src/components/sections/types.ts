import React, { ReactElement } from 'react';

export interface SectionTypes {
  name?: string;
  description?: string;
  role?: string;
  image?: string;
  qualifications?: string[];
  icon?: ReactElement;
  day?: string;
  activity?: string;
  duration?: string;
  time?: string;
  breakfast?: string;
  lunch?: string;
  dinner?: string;
  text?: string;
  video?: string;
}