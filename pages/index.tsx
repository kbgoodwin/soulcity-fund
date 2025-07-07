import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [investorName, setInvestorName] = useState('Khalid Goodwin');
  const [totalInvested, setTotalInvested] = useState(250000);
  const [expectedReturn, setExpectedReturn] = useState(500000);
  const [dividends, setDividends] = useState(20000);

  useEffect(() => {
    // You can replace this with live Supabase data later
  }, []);

  return (
    <>
      <Head>
        <title>Soul City Collective Fund Portal</title>
        <meta name="description" content="Track your investments in real-time." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800 px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Welcome, {investorName}
        </h1>
        <p className="text-center text-lg md:text-xl mb-10">
          Below is a summary of your Soul City Collective investment performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-500">Total Invested</h2>
            <p className="text-2xl font-bold text-blue-600">${totalInvested.toLocaleString()}</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-500">Expected Return</h2>
            <p className="text-2xl font-bold text-green-600">${expectedReturn.toLocaleString()}</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-500">Dividends Paid</h2>
            <p className="text-2xl font-bold text-amber-600">${dividends.toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl text-center text-md text-gray-600">
          <p>
            This portal is updated monthly and reflects fund performance for both Phase I and Phase II investments.
          </p>
          <p className="mt-2">
            For a full statement or tax documentation, please contact support@soulcityfund.com.
          </p>
        </div>
      </main>
    </>
  );
}
