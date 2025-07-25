import { useState } from 'react';
import './stayInformed.css';

const StayInformed = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Submitting...');

  try {
    const response = await fetch('https://backend-justice-reform.onrender.com/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (response.ok) {
      setStatus('Thank you for subscribing. You’ll receive updates from us soon.');
      setEmail('');
    } else {
      setStatus(data.message || 'Something went wrong.');
    }
  } catch (err) {
    setStatus('Network error. Please try again later.');
  }
};


  return (
    <section className="stay-informed">
      <h2>Stay Informed. Stay Empowered.</h2>
      <p>Be the first to hear about developments, stories, and actions you can take.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
};

export default StayInformed;
