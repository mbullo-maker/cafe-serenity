'use client';

import React from 'react';

interface Policy {
  title: string;
  content: string;
}

interface PolicyDisplayProps {
  policies: Policy[];
}

export const PolicyDisplay: React.FC<PolicyDisplayProps> = ({ policies }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {policies.map((policy, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{policy.title}</h2>
          <div className="prose prose-lg">
            {policy.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
