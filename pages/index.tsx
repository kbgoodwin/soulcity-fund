import React from 'react';

export default function InvestorDashboard() {
  const investor = {
    name: 'Khalid Goodwin',
    totalInvested: 250000,
    expectedReturn: 500000,
    dividendsPaid: 20000
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Welcome, {investor.name}
        </h1>
        <p className="text-gray-600 mb-6">
          Below is a summary of your Soul City Collective investment performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Invested</h2>
            <p className="text-2xl font-bold text-blue-900">
              ${investor.totalInvested.toLocaleString()}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Expected Return</h2>
            <p className="text-2xl font-bold text-green-900">
              ${investor.expectedReturn.toLocaleString()}
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Dividends Paid</h2>
            <p className="text-2xl font-bold text-yellow-900">
              ${investor.dividendsPaid.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-6">
          <p>This portal is updated monthly and reflects fund performance for both Phase I and Phase II investments.</p>
          <p className="mt-2">
            For a full statement or tax documentation, please contact <a href="mailto:support@soulcityfund.com" className="text-blue-600 underline">support@soulcityfund.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
