import './protestSection.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const targetDate = new Date('2025-08-02T00:00:00');

function ProtestSection() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({});
    const [isDday, setIsDday] = useState(false);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                setIsDday(true);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="protest-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2>Join the Protest for Justice</h2>
            <p>
                On <strong>August 2nd, 2025</strong>, we’re gathering at the Craighead County Courthouse in Jonesboro to expose the lies, greed, and cruelty destroying lives in Northeast Arkansas. Innocent people are being locked away for profit, based on false charges and fake laws—while judges and prosecutors pocket the rewards.
            </p>
            <p>
                This is more than a protest. It’s a stand against evil. A cry for justice. And a move of God. We’re calling on every Arkansan — and every believer in truth — to rise up, speak out, and shine a light in the darkness. The system is broken. But together, we can break the silence.
            </p>

            {isDday ? (
                <div className="dday-message">Today is D-Day!</div>
            ) : (
                <div className="countdown-container">
                    <div className="countdown-item days">
                        <div className="value">{timeLeft.days}</div>
                        <div className="label">Days</div>
                    </div>
                    <div className="countdown-item">
                        <div className="value">{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className="label">Hours</div>
                    </div>
                    <div className="countdown-item">
                        <div className="value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className="label">Minutes</div>
                    </div>
                    <div className="countdown-item">
                        <div className="value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className="label">Seconds</div>
                    </div>
                </div>
            )}

            <button onClick={() => {navigate('/protest')}} className="cta-button-ps">
                <a href="#">Stand With Us on August 2nd</a>
            </button>
        </motion.section>
    );
}

export default ProtestSection;
