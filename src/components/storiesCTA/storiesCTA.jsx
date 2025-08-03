import './storiesCTA.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StoriesCTA = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="stories-cta"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>These Stories Demand Compassion</h2>
      <p>
        What’s happening inside some Arkansas detention centers, including Craighead County, raises deep concerns about basic human dignity. Numerous reports from former inmates and families describe long-term isolation, denial of medical care, and other inhumane treatment.
      </p>
      <p>
        These are not isolated stories. They reflect a pattern of suffering that must be addressed. If you or someone you know has experienced mistreatment behind bars, your voice could help bring much-needed reform.
      </p>
      <button onClick={() => navigate('/protest')} className="cta-button-ps">
        Join the Protest
      </button>
    </motion.div>
  );
};

export default StoriesCTA;
