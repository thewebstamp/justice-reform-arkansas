import './supportTheProtest.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SupportTheProtest = () => {
    const [donate, setDonate] = useState(false);
    return (
        <motion.section
            className="support-the-protest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2>Your Support Helps Shine a Light on Injustice</h2>
            <p>
                This peaceful protest aims to raise awareness about the inhumane treatment reported by former inmates in the Craighead County Detention Center. With your support, we can provide materials, outreach, and resources to help amplify these voices and stand together for basic human rights.
            </p>
            <button className="cta-button-ps" onClick={() => {setDonate(true)}}>
                Donate Now
            </button>
            {donate? (<p className='donate-direct'>Please use the form below to let us know how you'd like to support the movement</p>) : ("")}
        </motion.section>
    );
};

export default SupportTheProtest;
