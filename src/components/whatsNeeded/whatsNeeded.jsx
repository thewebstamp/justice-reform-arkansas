// WhatsNeeded.jsx
import './whatsNeeded.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WhatsNeeded = () => {
    const navigate = useNavigate();

  return (
    <section className="whats-needed">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What’s Needed for the Protest</h2>
        <p>Let us make this protest as powerful, visible, and unified as possible. Here’s what is needed</p>
        <ul>
          <li><span className="highlight">Signs & Placards:</span> You can bring bold, clear messages that expose the injustice and support the cause.</li>
          <li><span className="highlight">Bullhorns & Speakers:</span> If you have a bullhorn, please bring it. If you have connections to help us secure a proper sound setup or wish to assist, that support is deeply appreciated.</li>
          <li><span className="highlight">T-Shirts:</span> If you can come with a t-shirt that reflects the cause please do. If you can't, please come still — your presence is what matters most.</li>
          <li><span className="highlight">Water & Snacks:</span> We’ll have water available. However, you can still come with your water and some snacks to stay hydrated and energized.</li>
          <li><span className="highlight">Extra Supplies:</span> Markers, zip ties, tape, umbrellas, power banks, or anything else you believe might help.</li>
        </ul>
        <p className="note">
          If you’d like to contribute supplies or support in other ways, visit our dedicated contribution page below.
        </p>
        <button onClick={() => {navigate('/reachout')}} className="cta-button-ps">
          <a href="#">Support the Protest</a>
        </button>
      </motion.div>
    </section>
  );
};

export default WhatsNeeded;
