import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./MissionSection.css";

const slides = [
  {
    title: "Transforming Teaching",
    text1:
      "To equip educators with powerful analytics and assessment tools that reduce administrative burden and amplify teaching effectiveness.",
    text2:
      "Our platform turns data into actionable insights, helping teachers identify learning gaps and customize instruction in real-time.",
    stat1: "10K+",
    stat1Label: "Educators Supported",
    stat2: "40%",
    stat2Label: "Time Saved",
  },
  {
    title: "Empowering Students",
    text1:
      "We provide personalized learning paths that adapt to each student’s pace and performance.",
    text2:
      "Interactive dashboards ensure students stay engaged and track their academic growth effectively.",
    stat1: "25K+",
    stat1Label: "Active Learners",
    stat2: "85%",
    stat2Label: "Engagement Rate",
  },
  {
    title: "Smart Insights",
    text1:
      "AI-driven analytics give institutions a clear understanding of performance trends.",
    text2:
      "Data-backed decisions help schools improve curriculum and teaching strategies.",
    stat1: "95%",
    stat1Label: "Accuracy Rate",
    stat2: "50+",
    stat2Label: "Institutions",
  },
];

export default function MissionSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="mission-section">
      <div className="gradient-bg"></div>

      <h1 className="mission-title">Our Mission Statements</h1>

      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          ❮
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="mission-card"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{ rotateX: 4, rotateY: -4 }}
          >
            <div className="mission-left">
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[index].title}
              </motion.h2>
              <div className="underline"></div>
            </div>

            <div className="mission-right">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[index].text1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[index].text2}
              </motion.p>

              <div className="stats">
                <motion.div
                  className="stat"
                  whileHover={{ scale: 1.08 }}
                >
                  <span>{slides[index].stat1}</span>
                  <p>{slides[index].stat1Label}</p>
                </motion.div>

                <motion.div
                  className="stat"
                  whileHover={{ scale: 1.08 }}
                >
                  <span>{slides[index].stat2}</span>
                  <p>{slides[index].stat2Label}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}