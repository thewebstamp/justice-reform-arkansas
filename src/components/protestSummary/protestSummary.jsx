import './protestSummary.css';
import { useNavigate } from 'react-router-dom';

const ProtestSummary = () => {
  const navigate = useNavigate();

  return (
    <section className="protest-summary">
      <h2>One County. Countless Victims. We Won’t Stay Silent.</h2>
      <p>
        On <strong>August 2nd at 12 PM</strong>, we’re coming together at the <strong>Craighead County Courthouse</strong> to stand against corruption and injustice in Northeast Arkansas. This peaceful protest is our opportunity to speak truth, defend the innocent, and show the community that justice still matters.
      </p>
      <button onClick={() => {navigate('/protest')}} className="cta-button-ps">
        <a href="#">I'll Be There</a>
      </button>
    </section>
  );
};

export default ProtestSummary;
