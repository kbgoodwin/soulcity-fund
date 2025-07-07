// pages/admin.tsx
import Head from 'next/head';

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | Soul City Fund</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Inter, sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '2rem', color: '#002244', marginBottom: '1.5rem' }}>
            Fund Admin Dashboard
          </h1>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#374151' }}>Investor Overview</h2>
            <ul>
              <li>Total Investors: <strong>22</strong></li>
              <li>Phase I Raised: <strong>$4.93M</strong></li>
              <li>Phase II Raised: <strong>$7.1M</strong></li>
              <li>Total Fund NAV: <strong>$12.8M</strong></li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#374151' }}>Properties Summary</h2>
            <ul>
              <li>Phase I Properties: <strong>18</strong></li>
              <li>Fully Acquired: <strong>12</strong></li>
              <li>In Redevelopment: <strong>4</strong></li>
              <li>Avg Monthly Rent Revenue: <strong>$63,000</strong></li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#374151' }}>Next Steps</h2>
            <p>📌 Add user access control, property-level inputs, and ACH payout integration.</p>
          </section>
        </div>
      </main>
    </>
  );
}
