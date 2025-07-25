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
      <h2>These Stories Demand Action</h2>
      <p>
        The corruption in Craighead County has destroyed lives, torn families apart, and buried truth behind locked doors. These stories are not isolated — they are part of a system that profits from injustice.
      </p>
      <p>
        If you or a loved one has been affected by this corrupt system, we encourage you to share your story. Your voice matters, and together, we can expose the truth and demand change.
      </p>
      <button onClick={() => {navigate('/protest')}} className="cta-button-ps">
        <a href="#">Join the Protest</a>
      </button>
    </motion.div>
  );
};

export default StoriesCTA;
