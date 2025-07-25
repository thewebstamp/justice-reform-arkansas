import './donation.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Donation() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
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
      const res = await fetch('https://backend-justice-reform.onrender.com/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Thank you! We’ll contact you shortly.');
        setFormData({ name: '', contact: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <motion.section
      className="donation-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <p className="intro">
        Want to support in another way? Just fill out the form below and let us know how you can help.
        <br />
        We’ll reach out to you directly.
      </p>

      <form onSubmit={handleSubmit} className="donation-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Email or Phone"
          required
          value={formData.contact}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="What would you like to donate or help with?"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </motion.section>
  );
}

export default Donation;
