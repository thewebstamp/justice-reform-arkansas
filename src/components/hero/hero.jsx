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
          <h1>Stand for Dignity and Justice in Craighead County</h1>
          <p>
            Reports of inhumane treatment and abuse in local detention centers cannot be ignored. Join us in raising awareness and demanding change in Jonesboro, Arkansas.
          </p>
          <button onClick={() => navigate('/protest')}>
            <a href="#">📢 Join the Protest – August ---</a>
          </button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <img src={images.heroImage} alt="Justice and advocacy illustration" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
