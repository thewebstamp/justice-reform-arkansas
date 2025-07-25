import './taxDeductibleSecure.css';
import { motion } from 'framer-motion';

const TaxDeductibleSecure = () => {
  return (
    <motion.section
      className="tax-secure-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Your Donation Is Safe and Tax-Deductible</h2>
      <p>
        All donations go through our registered 501(c)(3) nonprofit organization — Servants of Christ. Your contribution is <strong>tax-deductible</strong> and processed through a secure platform.
      </p>
      <p>
        Whether you’re giving money, materials, or offering other support, know that your help is going directly toward the <strong>August 2nd protest in Jonesboro</strong> — and the broader mission for justice reform in Arkansas.
      </p>
    </motion.section>
  );
};

export default TaxDeductibleSecure;
