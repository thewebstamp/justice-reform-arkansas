import './abuseSection.css';
import { motion } from 'framer-motion';
import images from '../../assets/images';

function AbuseSection() {
  return (
    <motion.section
      className="abuse-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={images.imprisonment} alt="Craighead County Jail Conditions" />
      <div className="abuse-container">
        <h2>Inhumane Conditions Must Be Addressed</h2>
        <p className="subheading">
          Detainees in Craighead County are reporting disturbing treatment, raising serious human rights concerns. These issues must be taken seriously by the public and officials alike.
        </p>

        <ul className="abuse-points">
          <li>
            <strong>Unsafe Conditions:</strong> Overcrowding, lack of basic hygiene, and poor ventilation are affecting inmates' well-being.
          </li>
          <li>
            <strong>Medical Neglect:</strong> Individuals are being denied adequate medical attention, even in cases of serious health concerns.
          </li>
          <li>
            <strong>Emotional and Physical Harm:</strong> Reports suggest psychological stress and physical abuse without proper oversight.
          </li>
        </ul>

        <p className="closing-message">
          No one should be treated this way. We’re asking for transparency, accountability, and humane conditions for every person being held in custody. Join us on August --- to speak out for justice and dignity.
        </p>
      </div>
    </motion.section>
  );
}

export default AbuseSection;
