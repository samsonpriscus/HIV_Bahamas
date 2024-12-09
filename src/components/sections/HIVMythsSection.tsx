// components/sections/HIVMythsSection.tsx

//import React from 'react';
import { hivMyths } from '../../data/hivMyths';

const HIVMythsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">HIV Myths and Facts</h2>
        <div>
          {hivMyths.map((myth, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Myth: {myth.myth}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: `Fact: ${myth.fact}` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HIVMythsSection;
