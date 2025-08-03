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
            Justice Reform for Arkansas is committed to shining a light on the inhumane treatment of inmates in local detention centers — especially in Craighead County. Our mission is to stand for human dignity, speak up for those who cannot, and encourage reform through peaceful action.
        </p>
    </motion.section>
);

export default OurMission;
