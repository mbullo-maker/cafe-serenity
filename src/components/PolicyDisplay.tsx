import React from 'react';
import { Policy, AgeRestriction } from '../data/policies';

interface PolicySectionProps {
  title: string;
  items: Policy[];
}

interface AgeRestrictionSectionProps {
  restrictions: AgeRestriction[];
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="space-y-6">
      {items.map((policy) => (
        <div key={policy.id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">{policy.title}</h3>
          <ul className="list-disc list-inside space-y-2">
            {policy.content.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const AgeRestrictionSection: React.FC<AgeRestrictionSectionProps> = ({ restrictions }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Age Restrictions</h2>
    <div className="space-y-6">
      {restrictions.map((restriction, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-semibold mb-3">{restriction.itemType}</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Minimum Age:</span> {restriction.minimumAge} years
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Description:</span> {restriction.description}
            </p>
            <div>
              <p className="font-semibold mb-2">Required Documents:</p>
              <ul className="list-disc list-inside">
                {restriction.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="text-gray-700">{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface PolicyDisplayProps {
  termsAndConditions: Policy[];
  disclaimers: Policy[];
  ageRestrictions: AgeRestriction[];
}

const PolicyDisplay: React.FC<PolicyDisplayProps> = ({
  termsAndConditions,
  disclaimers,
  ageRestrictions,
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Policies & Terms</h1>
      <AgeRestrictionSection restrictions={ageRestrictions} />
      <PolicySection title="Terms and Conditions" items={termsAndConditions} />
      <PolicySection title="Important Disclaimers" items={disclaimers} />
    </div>
  );
};

export default PolicyDisplay;
