import React from 'react';

interface RideData {
  title: string;
  category: string;
  description?: string;
  video?: string;
  location?: string;
  // Add other properties that exist in your ride objects
}

interface RidesSectionProps {
  ridesData: RideData[];
  onExplore: () => void;
}

declare const RidesSection: React.FC<RidesSectionProps>;

export default RidesSection;
