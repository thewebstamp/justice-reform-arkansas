// components/About/HowYouCanJoin.jsx
import { motion } from 'framer-motion';
import styles from './AboutSections.module.css';
import { useNavigate } from 'react-router-dom';

const HowYouCanJoin = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            className={styles.sectionJoin}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2>How You Can Join</h2>
            <p>
                You don’t have to be silent. You can stand, speak, and be part of this mission. Whether you join us at the protest, share the truth online, or simply pray for justice — your voice matters. Together, we can shine a light on darkness and demand real change.
            </p>
            <button onClick={() => {navigate('/protest')}} className={styles.button}>
                <a href="#">Stand With Us</a>
            </button>
        </motion.section>
    )
};

export default HowYouCanJoin;
