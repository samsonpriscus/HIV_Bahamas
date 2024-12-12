import React from "react";
import { references } from "../../data/ReferencesData";

const ReferencesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">References</h2>
        <ul className="space-y-6">
          {references.map((reference, index) => (
            <li key={index} className="text-gray-800">
              <p className="mb-2">{reference.citation}</p>
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {reference.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReferencesSection;
