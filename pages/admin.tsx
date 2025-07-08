import Head from 'next/head';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | Soul City Collective Fund</title>
      </Head>
      <div className="min-h-screen bg-gray-100 font-sans">
        <header className="bg-white shadow-md py-6 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-navy-900">Soul City Collective Admin Portal</h1>
            <p className="text-sm text-gray-500">Secure Fund Admin Dashboard</p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-8 py-10">
          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-navy-800 mb-4">Investor Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white">
                <h3 className="text-sm">Total Investors</h3>
                <p className="text-2xl font-bold">22</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500 to-green-700 rounded-xl text-white">
                <h3 className="text-sm">Phase I Raised</h3>
                <p className="text-2xl font-bold">$4.93M</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl text-white">
                <h3 className="text-sm">Phase II Raised</h3>
                <p className="text-2xl font-bold">$7.1M</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl text-white">
                <h3 className="text-sm">Total Fund NAV</h3>
                <p className="text-2xl font-bold">$12.8M</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-navy-800 mb-4">Properties Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-navy-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500">Phase I Properties</h3>
                <p className="text-xl font-bold text-navy-800">18</p>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500">Fully Acquired</h3>
                <p className="text-xl font-bold text-navy-800">12</p>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500">In Redevelopment</h3>
                <p className="text-xl font-bold text-navy-800">4</p>
              </div>
              <div className="bg-navy-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-sm text-gray-500">Monthly Rent Revenue</h3>
                <p className="text-xl font-bold text-navy-800">$63,000</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-navy-800 mb-2">Upcoming Milestones</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>📌 Property-level revenue entry module (ETA: Q3 2025)</li>
              <li>📌 ACH integration for investor distributions</li>
              <li>📌 CRM + document center with e-signature support</li>
            </ul>
          </section>
        </main>

        <footer className="text-center text-sm text-gray-500 py-6">
          © 2025 Soul City Collective Fund. All rights reserved.
        </footer>
      </div>
    </>
  );
}
