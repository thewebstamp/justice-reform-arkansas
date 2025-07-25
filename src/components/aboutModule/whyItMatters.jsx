import { motion } from 'framer-motion';
import styles from './AboutSections.module.css';

const WhyItMatters = () => (
  <motion.section
    className={styles.sectionAlt}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2>Why It Matters</h2>
    <p>
      In Craighead County, lives are being shattered by a justice system that has twisted the law for profit. People are locked away on false charges, silenced by fear, and denied the protections the Constitution promises. If we stay silent, the abuse will continue. This movement matters because real lives, real families, and real futures are at stake.
    </p>
  </motion.section>
);

export default WhyItMatters;
