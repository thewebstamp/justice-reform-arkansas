import { motion } from 'framer-motion';
import styles from './AboutSections.module.css';

const OurMission = () => (
    <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <h2>Our Mission</h2>
        <p>
            Justice Reform for Arkansas is committed to exposing the injustice, greed, and cruelty happening in Arkansas especially Craighead County’s justice system. Our mission is to defend the innocent, uplift the falsely accused, and speak the truth about a system that profits off of pain — all while being guided by the courage, conviction, and compassion found in Christ.
        </p>
    </motion.section>
);

export default OurMission;
