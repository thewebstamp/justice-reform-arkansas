import { motion } from 'framer-motion';
import styles from './AboutSections.module.css';

const ScriptureQuote = () => (
  <motion.section
    className={styles.quote}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <blockquote>
      “Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Defend the rights of the poor and needy.”
    </blockquote>
  </motion.section>
);

export default ScriptureQuote;
