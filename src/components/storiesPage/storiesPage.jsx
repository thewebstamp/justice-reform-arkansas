// src/pages/Stories.jsx

import React from 'react';
import './storiesPage.css';
import { motion } from 'framer-motion';

const stories = [
  {
    emoji: "🤐",
    title: "Invention of Laws & Fueling Profits",
    description: "A Craighead County prosecutor charged a man under a law that doesn’t exist in Arkansas. When challenged, the judge supported the charge. This same judge has a known financial connection to a local private probation company that profits from court referrals.",
  },
  {
    emoji: "🧾",
    title: "The Pay-to-Leave Trap",
    description: "Multiple residents report being jailed for minor traffic violations with bail amounts far beyond their means. Judges imposed exaggerated fines, and those who couldn’t pay remained in jail for weeks. One single mother was held for 38 days for an unpaid seatbelt ticket.",
  },
  {
    emoji: "🩺",
    title: "Death from Medical Negligence",
    description: "A diabetic inmate repeatedly begged for insulin. Despite visible signs of a medical crisis, he was denied care and later found unresponsive in his cell. Staff dismissed the emergency as an 'overreaction' until it was too late. His death was ruled 'natural causes'.",
  },
  {
    emoji: "🧊",
    title: "Torture by Isolation",
    description: "Several inmates report being placed in solitary confinement for over 20 days without explanation — a direct violation of state policy. Lights are kept on 24/7, meals are inconsistent, and basic human contact is denied. One man tried to take his own life after 14 days in isolation.",
  },
  {
    emoji: "📜",
    title: "Beaten and Betrayed",
    description: "A 19-year-old man arrested for a misdemeanor was found bruised and bloody within 48 hours of entering the Craighead County Detention Center. Guards allegedly turned off cameras before entering his cell and attacking him. His requests for a lawyer and medical attention were ignored.",
  },
  {
    emoji: "🚨",
    title: "Arrested for Speaking Up",
    description: "A local pastor was jailed for publicly criticizing the judicial system and calling out abuse in the detention center. No criminal offense was cited — only a vague claim of 'interference with public operations'. He was released only after public pressure.",
  }
];

export default function Stories() {
  return (
    <div className="stories-page">
      <motion.h1
        className="stories-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Real Stories. Real Injustice.
      </motion.h1>

      <div className="stories-grid">
        {stories.map((story, idx) => (
          <motion.div
            className="story-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <span className="emoji">{story.emoji}</span>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
