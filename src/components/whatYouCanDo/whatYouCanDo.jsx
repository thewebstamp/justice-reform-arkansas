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
                    Justice demands action. Here’s how you can take a stand — starting today.
                </p>

                <ul className="action-list">
                    <li>
                        <span className="highlight">Learn the Truth:</span> Read the stories, review the facts, and understand what’s happening in Craighead County.
                    </li>
                    <li>
                        <span className="highlight">Spread Awareness:</span> Share this site with friends, churches, and community groups. Let others know what’s been hidden in plain sight.
                    </li>
                    <li>
                        <span className="highlight">Sign Up to Protest:</span> Let us know you’re coming to Jonesboro on August 2nd. Your presence gives strength to this movement.
                    </li>
                    <li>
                        <span className="highlight">Help Organize:</span> Donate supplies, volunteer your time, or offer services. Every bit helps us prepare and protect those taking a stand.
                    </li>
                    <li>
                        <span className="highlight">Stay Grounded in Faith:</span> Keep praying, stay informed, and trust that justice can prevail when we stand together.
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
