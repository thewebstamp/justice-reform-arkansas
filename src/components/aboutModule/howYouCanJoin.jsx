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
                You don’t have to be silent. If you care about human dignity and compassionate justice, there’s a place for you in this mission. Whether you join us at the protest, share this message online, or lift up prayers for those suffering — your support matters. Together, we can raise awareness and call for humane treatment of every person behind bars.
            </p>
            <button onClick={() => {navigate('/protest')}} className={styles.button}>
                <a href="#">Stand With Us</a>
            </button>
        </motion.section>
    );
};

export default HowYouCanJoin;
