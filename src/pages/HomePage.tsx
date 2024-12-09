// pages/HomePage.tsx

import React from 'react';
import { Activity } from 'lucide-react';
import StatisticsSection from '../components/sections/StatisticsSection';
import PreventionCard from '../components/sections/PreventionCard';
import HIVMythsSection from '../components/sections/HIVMythsSection';
import AtRiskGroupsSection from '../components/sections/AtRiskGroupsSection'; // Import the new section
import { preventionTips } from '../data/preventionTips';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HIV Connect
            </h1>
            <p className="text-xl md:text-2xl">
              Bridging knowledge and care in The Bahamas
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Activity className="w-12 h-12 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">About HIV</h2>
          </div>
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-gray-600">
              HIV (Human Immunodeficiency Virus) affects the immune system, making it harder for the body to fight off infections. Early detection and treatment are crucial for managing HIV and preventing its progression to AIDS. The Bahamas has made significant progress in HIV prevention and treatment, but continued awareness and education remain essential.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Prevention Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Prevention Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preventionTips.map((tip, index) => (
              <PreventionCard key={index} {...tip} />
            ))}
          </div>
        </div>
      </section>
      
        {/* At Risk Groups Section */}
        <AtRiskGroupsSection /> {/* Add the new section here */}

      {/* HIV Myths Section */}
      <HIVMythsSection />
    </div>
  );
};

export default HomePage;
