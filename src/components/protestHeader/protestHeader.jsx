import './protestHeader.css';
import { motion } from 'framer-motion';

function ProtestHeader() {
  return (
    <motion.section
      className="protest-header"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="protest-header-content">
        <h2>We’re Gathering for Justice in Craighead County</h2>
        <p className="lead">
          On <strong>August 2nd</strong>, the people will rise. Join us at the <strong>Craighead County Courthouse</strong> at <strong>12 PM</strong> as we demand truth, accountability, and an end to the corruption inside the justice system.
        </p>
      </div>
    </motion.section>
  );
}

export default ProtestHeader;
