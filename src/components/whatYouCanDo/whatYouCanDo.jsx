import './whatYouCanDo.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function WhatYouCanDo() {
    const navigate = useNavigate();

    return (
        <motion.section
            className="action-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="action-content">
                <h2>What You Can Do</h2>
                <p className="subheadingWYCD">
                    We believe every person deserves to be treated with dignity. Here’s how you can help call attention to the inhumane treatment happening in local jails.
                </p>

                <ul className="action-list">
                    <li>
                        <span className="highlight">Get Informed:</span> Understand the concerns being raised about the treatment of inmates in Craighead County. Read real reports and testimonies.
                    </li>
                    <li>
                        <span className="highlight">Spread Awareness:</span> Share this website with others — churches, families, and local communities. The more people who know, the stronger our voice becomes.
                    </li>
                    <li>
                        <span className="highlight">Join the Protest:</span> Show up in Jonesboro on August --- for a peaceful demonstration calling for humane conditions and accountability.
                    </li>
                    <li>
                        <span className="highlight">Support the Cause:</span> Help by donating water, signs, or other supplies — or by offering your time to help us organize responsibly.
                    </li>
                    <li>
                        <span className="highlight">Pray and Stay United:</span> Keep this mission rooted in faith and compassion. Justice begins with standing together for what's right.
                    </li>
                </ul>

                <button onClick={() => {navigate('/protest')}} className="cta-button-ps">
                    <a href="#">Join the Movement for Justice</a>
                </button>
            </div>
        </motion.section>
    );
}

export default WhatYouCanDo;
