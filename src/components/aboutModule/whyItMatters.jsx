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
      In Craighead County and beyond, people held in detention are reporting inhumane conditions, mistreatment, and a lack of accountability. These are not just stories — they are cries for help from real individuals and families. This movement matters because standing up for human dignity, due process, and compassionate justice is not just important — it's our moral responsibility.
    </p>
  </motion.section>
);

export default WhyItMatters;
