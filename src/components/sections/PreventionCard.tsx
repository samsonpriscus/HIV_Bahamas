import React from 'react';

interface PreventionCardProps {
  title: string;
  description: string;
}

const PreventionCard: React.FC<PreventionCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PreventionCard;