import './protestSummary.css';
import { useNavigate } from 'react-router-dom';

const ProtestSummary = () => {
  const navigate = useNavigate();

  return (
    <section className="protest-summary">
      <h2>One County. Too Many Suffering. We Can’t Stay Silent.</h2>
      <p>
        On <strong>August --- at 12 PM</strong>, we’re gathering peacefully at the <strong>Craighead County Courthouse</strong> to raise awareness about the inhumane treatment of inmates in local detention centers. This protest is a stand for human dignity and a call for accountability in how people are being treated behind bars.
      </p>
      <button onClick={() => {navigate('/protest')}} className="cta-button-ps">
        <a href="#">I'll Be There</a>
      </button>
    </section>
  );
};

export default ProtestSummary;
