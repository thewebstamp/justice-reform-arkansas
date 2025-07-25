import './supportTheProtest.css';
import { motion } from 'framer-motion';

const SupportTheProtest = () => {
    return (
        <motion.section
            className="support-the-protest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Your Support Contributes to the Success of the Protest</h2>
            <p>
                Your contribution today helps power the upcoming protest against the inhumane treatment
                and systemic corruption in Craighead County. Donations will go directly toward materials, outreach, and mobilization needed to make this event a success.
            </p>
            <button className="cta-button-ps">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Donate Now
                </a>
            </button>
        </motion.section>
    );
};

export default SupportTheProtest;
