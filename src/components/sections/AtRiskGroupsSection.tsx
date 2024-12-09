// components/sections/AtRiskGroupsSection.tsx

//import React from 'react';
import { atRiskGroups } from '../../data/atRiskGroups';

const AtRiskGroupsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who is at Risk?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {atRiskGroups.map((group, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{group.group}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <h4 className="font-bold mb-2">Prevention Tips:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {group.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtRiskGroupsSection;
