import './hero.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import images from '../../assets/images.js';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-container">
      <div className="hero">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
        >
          <h1>It’s Time to Stand for Justice in Craighead County</h1>
          <p>
            Expose the corruption. Defend the innocent. Join the movement to stop false imprisonment and abuse in Jonesboro, Arkansas.
          </p>
          <button onClick={() => navigate('/protest')}>
            <a href="#">📢 Join the Protest – August 2nd</a>
          </button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <img src={images.heroImage} alt="Justice corruption imagery" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
