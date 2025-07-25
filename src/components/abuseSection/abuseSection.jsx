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
      <img src={images.imprisonment} alt="Craighead County Abusing the Law" />
      <div className="abuse-container">
        <h2>Craighead County Is Profiting Off of False Imprisonment</h2>
        <p className="subheading">
          Here in Craighead County, justice isn’t about truth — it’s about money, power, and control. And the people are paying the price.
        </p>

        <ul className="abuse-points">
          <li>
            <strong>Invented Charges:</strong> People are being prosecuted under laws that don’t even exist in Arkansas code.
          </li>
          <li>
            <strong>Plea Deal Extortion:</strong> Defendants are threatened with decades in prison unless they accept deals — even if innocent.
          </li>
          <li>
            <strong>Motions Silenced:</strong> Judges routinely deny key motions and block evidence without explanation.
          </li>
        </ul>

        <p className="closing-message">
          This is more than corruption — it’s evil hiding in plain sight. And it won’t stop until we expose it. Join us on August 2nd in Jonesboro. Raise your voice, stand your ground, and demand justice.
        </p>
      </div>
    </motion.section>
  );
}

export default AbuseSection;
