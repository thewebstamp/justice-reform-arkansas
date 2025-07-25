import './protestSignUp.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function ProtestSignUp() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('https://backend-justice-reform.onrender.com/api/protest-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Thanks for signing up! We’ll see you on August 2nd.');
        setFormData({ name: '', email: '' });
      } else {
        setStatus(data.message || 'Something went wrong. Try again.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <motion.section
      className="protest-signup"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Sign Up for the Protest</h2>
      <p>Let us know you're coming so we can organize effectively. This helps us prepare signs/placards, supplies, and more.</p>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">I’m Attending</button>
        <p className="status">{status}</p>
      </form>
    </motion.section>
  );
}

export default ProtestSignUp;
