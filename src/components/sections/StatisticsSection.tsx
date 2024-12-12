//import React from 'react';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import StackedBarChart from '../charts/StackedBarChart';
import { hivRates, stdData, ageGroupData, genderAgeData } from '../../data/statistics';

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Statistics</h2>

        {/* HIV Infection Rates Chart */}
        <div className="mb-12">
          <LineChart data={hivRates} title="HIV Infection Rates Over Time" />
          <p className="mt-6 text-gray-700">
            The HIV infection rates in The Bahamas from 2014 to 2023 reveal fluctuating trends, with notable decreases in some years (e.g., 2016 and 2021) followed by spikes in others (e.g., 2019 and 2022). All these variations depict how difficult it is to sustain prevention and how new risk factors must be addressed. Declinations over some years can be attributed to positive outreach, increased patients taking antiretroviral therapy (ART), and awareness programs. However, spikes indicate the existence of periods of little or no testing, prevention, or treatment, which may be attributed to social stigma, poverty, or other health issues such as the COVID-19 pandemic(2,3). This underscores the importance of sustained HIV prevention strategies, including widespread testing, education, and timely access to treatment, to control the spread and ensure long-term public health stability.
          </p>
        </div>

        {/* STD Distribution Chart */}
        <div className="mb-12">
          <PieChart data={stdData} title="Percentage of Common STDs" />
          <p className="mt-6 text-gray-700">
            The prevalence rates of common STDs in The Bahamas reveal significant public health concerns, especially with the high percentage of Trichomoniasis (14.60%) and Hepatitis B (6.56%). Such trends show that there is a higher need to create awareness among the public, and adoption of measures such as vaccination for Hepatitis B and common screening to diagnose the disease at an early stage. The high rates can therefore be attributed to low average knowledge about sexual health, poor facility and provider access, or stigmatization that discourages preventive steps(4,5). The community-related interventions like Community Education and Awareness (CSE), HIV/AIDS education, and affordable treatment should be urgently implemented to prevent these infections from reoccurring and the overall health of the victim affected for the worse.
          </p>
        </div>

        {/* HIV Testing Rates Chart */}
        <div className="mb-12">
          <BarChart data={ageGroupData} title="HIV Testing Rates by Age Group" />
          <p className="mt-6 text-gray-700">
            The HIV testing rates by age group in The Bahamas reveal a concerning trend, with younger individuals aged 13–24 (43.2%) having the highest testing rates, while older groups, especially those aged 40+ (12.1%), have significantly lower testing rates. The disparity imply that young people are more involved in HIV tests, because of enhanced awareness and aggressive HIV sensitization between those years. However, lower testing rates in other age groups could be attributed to poor perception, poor attitude towards testing, stigma, or maybe they are not used to visiting the hospital frequently. These trends provide the reasons for the need to scale up HIV testing especially among the elderly population as a way of identifying people with unknown positives, stopping transmission and improving the health outcomes of persons living with HIV/AIDS (1,6). In this regard, more information about the necessity of early HIV testing is of primary importance to decrease the further development of opportunistic infections in the adult population both at the moment and in future.
          </p>
        </div>

        {/* HIV Prevalence by Age Group and Gender Chart */}
        <div className="mb-12">
          <StackedBarChart
            data={genderAgeData}
            title="HIV Prevalence by Age Group and Gender"
          />
          <p className="mt-6 text-gray-700">
            The HIV prevalence data by age group and gender in The Bahamas highlights key disparities, with women aged 25–40 (1.1%) and young females aged 13–24 (0.3%) exhibiting higher prevalence rates compared to their male counterparts. It, therefore, calls for a consideration of reason behind gender specific vulnerabilities such as economic, and healthcare differences between male and female affects prevalence. The relatively low prevalence among older women (40+, 0.1%) compared to men of the same age (0.7%) might indicate differences in exposure or testing behaviors(7,8). Altogether these trends underscore the need for targeted prevention interventions, periodic testing and more relevant HIV awareness programs that can address the age and gender-differentiated risks for HIV transmission and thereby help to achieve the goal of reducing HIV transmission and preventing equitable access disparities for cared for throughout the health system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
