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
          On <strong>August ---</strong>, we invite you to join us at the <strong>Craighead County Courthouse</strong> at <strong>12 PM</strong> to stand against the inhumane treatment of inmates in local detention facilities. This peaceful gathering is a call for dignity, oversight, and compassion within our justice system.
        </p>
      </div>
    </motion.section>
  );
}

export default ProtestHeader;
