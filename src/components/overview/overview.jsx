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
          The justice system in Northeast Arkansas — especially in Jonesboro and Craighead County — is being weaponized for profit. Judges and prosecutors are putting people in prison on bogus charges. They’re inventing laws, twisting justice, and lying about what’s legal — all to line their pockets at the expense of the people.
        </p>

        <p>
          <b>But now, the truth is coming to light.</b>
        </p>

        <p>
          Now is our chance to be the voice for the voiceless — a rally cry for those who’ve been silenced. It’s time to rise together and demand justice for the oppressed.
        </p>
      </div>
    </motion.section>
  );
}

export default Overview;
