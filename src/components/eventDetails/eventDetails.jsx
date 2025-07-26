import './eventDetails.css';
import { motion } from 'framer-motion';

function EventDetails() {
    return (
        <motion.section
            className="event-details"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2>Event Details</h2>
            <div className="details-grid">
                <div className="details-text">
                    <ul>
                        <li>
                            <strong>Date:</strong> Saturday, August 2nd, 2025
                        </li>
                        <li>
                            <strong>Time:</strong> 12:00 PM – 3:00 PM
                        </li>
                        <li>
                            <strong>Location:</strong> Craighead County Courthouse, 511 S Main St, Jonesboro, AR 72401
                        </li>
                    </ul>
                    <p className="reminder">
                        Bring water, signs, and your voice. This will be a peaceful protest centered on truth, accountability, and justice for those who’ve been silenced.
                    </p>
                </div>

                <div className="map-container">
                    <iframe
                        title="Craighead County Courthouse"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.264149284882!2d-90.7082368848001!3d35.84214058016013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d5d7e0f9f705c9%3A0xe38a93033cda34b7!2sCraighead%20County%20Courthouse!5e0!3m2!1sen!2sus!4v1658514664282!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </motion.section>
    );
}

export default EventDetails;
