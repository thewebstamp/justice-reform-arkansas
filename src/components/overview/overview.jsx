import { useNavigate } from 'react-router-dom';
import './overview.css';
import { motion } from 'framer-motion';

function Overview() {
  const navigate = useNavigate();

  return (
    <motion.section 
      className="overview-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="overview-content">
        <h2>What’s Happening in Craighead County?</h2>
        <p>
          Inmates in the Craighead County Detention Center are facing conditions that raise serious concerns about human rights. From overcrowding to lack of medical care, what’s happening behind closed doors must not be ignored.
        </p>

        <p>
          <b>Now is the time to speak up.</b>
        </p>

        <p>
          We believe in justice, dignity, and the humane treatment of every person — no matter who they are or where they come from. Together, we can shine a light on what’s happening and call for accountability.
        </p>
      </div>
    </motion.section>
  );
}

export default Overview;
