import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GenderAgeData } from '../../types/data';

interface StackedBarChartProps {
  data: GenderAgeData[];
  title: string;
}

const HorizontalStackedBarChart: React.FC<StackedBarChartProps> = ({ data, title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            {/* X-Axis for Testing Rates */}
            <XAxis type="number" label={{ value: "Testing Rate", position: "insideBottom", offset: -5 }} />
            {/* Y-Axis for Age Groups */}
            <YAxis type="category" dataKey="ageGroup" label={{ value: "Age Group", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" stackId="a" fill="#8884d8" name="Male" />
            <Bar dataKey="female" stackId="a" fill="#FF6B6B" name="Female" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HorizontalStackedBarChart;
