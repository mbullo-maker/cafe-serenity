import React from 'react';
import { PolicyDisplay } from '@/components/PolicyDisplay';
import { policies } from '@/data/policies';
import Layout from '@/components/Layout';

const PoliciesPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <PolicyDisplay policies={policies} />
      </div>
    </Layout>
  );
};

export default PoliciesPage;
