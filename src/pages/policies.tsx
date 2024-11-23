import React from 'react';
import PolicyDisplay from '../components/PolicyDisplay';
import { termsAndConditions, disclaimers, ageRestrictions } from '../data/policies';
import Layout from '../components/Layout';

const PoliciesPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <PolicyDisplay
          termsAndConditions={termsAndConditions}
          disclaimers={disclaimers}
          ageRestrictions={ageRestrictions}
        />
      </div>
    </Layout>
  );
};

export default PoliciesPage;
