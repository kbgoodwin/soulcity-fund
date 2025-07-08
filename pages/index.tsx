<<<<<<< HEAD
import Header from '../components/Header';

export default function Home() {
  return <Header />;
}
=======
export default function Home() {
  return (
    <div style={{
      fontFamily: `'Segoe UI', Roboto, sans-serif`,
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#002244' }}>Welcome, Khalid Goodwin</h1>
        <p>Below is a summary of your Soul City Collective investment performance.</p>

        <div style={{ marginTop: '2rem' }}>
          <h2>Total Invested</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$250,000</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h2>Expected Return</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$500,000</p>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <h2>Dividends Paid</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$20,000</p>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
          This portal is updated monthly and reflects fund performance for both Phase I and Phase II investments.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#555' }}>
          For a full statement or tax documentation, please contact <a href="mailto:support@soulcityfund.com">support@soulcityfund.com</a>.
        </p>
      </div>
    </div>
  )
}
>>>>>>> b27aaed2a53c60f6531d9c52c524beb51a00de46
