import './storiesPage.css';
import { motion } from 'framer-motion';

const stories = [
  {
    emoji: "🧫",
    title: "Black Mold & Falling Infrastructure",
    description: (
      <>
        Former inmates and civil complaints describe black mold, leaking roofs, and crumbling walls at Craighead County Detention Center—conditions linked to respiratory problems and unsafe living environments.{" "}
        <a href="https://www.humanrightsdefensecenter.org/action/news/2019/pln-editor-quoted-re-toxic-conditions-black-mold-arkansas-jail/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ),
  },
  {
    emoji: "⚰️",
    title: "Wrongful Death Lawsuit in Custody",
    description: (
      <>
        A wrongful death lawsuit was filed after Brock Tyner died in custody in May 2024. The suit alleges he was denied medical attention and never evacuated to a hospital despite pleas.{" "}
        <a href="https://jonesbororightnow.com/news/268862-lawsuit-filed-in-ccdc-inmates-death/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ),
  },
  {
    emoji: "📜",
    title: "Settlement Petition Withdrawn",
    description: (
      <>
        A proposed $900K settlement from Tyner’s estate and a contracted nursing provider was withdrawn due to pending completion. The suit highlighted allegations of constitutional violations due to delayed medical care.{" "}
        <a href="https://neareport.com/2025/05/20/900000-settlement-reached-in-wrongful-death-lawsuit-against-jail-nursing-provider/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ),
  },
  {
    emoji: "🏗️",
    title: "Overcrowding Sparks Emergency Bunk Construction",
    description: (
      <>
        The jail exceeded its designed capacity—housing roughly 400 inmates in a facility built for ~160. Local vocational students were brought in to build new bunks to ease overcrowding.{" "}
        <a href="https://jonesbororightnow.com/news/268862-neactc-building-new-bunks-for-craighead-county-jail/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ),
  },
  {
    emoji: "⛔",
    title: "Act 309 Work Program Suspended",
    description: (
      <>
        Craighead County suspended Arkansas’s Act-309 inmate labor program amid severe overcrowding and safety concerns—highlighting pressures on jail operations and detainee treatment.{" "}
        <a href="https://www.kait8.com/2025/03/10/craighead-county-detention-center-suspends-309-program/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </>
    ),
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
        Verified Reports. Real Conditions.
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
