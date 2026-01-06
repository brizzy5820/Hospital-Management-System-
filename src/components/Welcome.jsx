import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import BottomSheet from "../BottomSheet";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const recommendations = [
  {
    id: 1,
    title: "What is a Blood Glucose Test?",
    icon: "/images/testing (1).png",
    content:"Glucose is the body’s main source of energy, and its level in the blood must stay within a healthy range. This test helps healthcare providers understand how well the body is regulating blood sugar."
  },
  {
    id: 2,
    title: "Why do I need a blood glucose test?",
    icon: "/images/first-aid-kit.png",
    content:
      "It helps detect early diabetes, monitor treatment, and prevent complications."
  },
  {
    id: 3,
    title: "What happens if blood glucose is low?",
    icon: "/images/low-signal.png",
    content:
      "Low blood sugar can cause dizziness, sweating, confusion, and loss of consciousness."
  },
  {
    id: 4,
    title: "What is diabetes?",
    icon: "/images/diabetes.png",
    content:
      "Diabetes is a condition where blood sugar levels are too high over time."
  }
];

export default function Welcome({ setActive }) {
  // ✅ Hooks MUST be here
  const [openSheet, setOpenSheet] = useState(false);
  const [sheetData, setSheetData] = useState(null);

  return (
    <section id="welcomeSection">
      <div className="welcomeSection">
        <div className="banner">
          <img
            src="images/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg"
            alt=""
          />
        </div>

        <div className="container">
          <h2>
            <img
              style={{ width: 42, height: 32 }}
              src="/images/hypoallergenic.gif"
              alt=""
            />
            Mini Hospital Management System
          </h2>

          <p className="welcome-subtitle">
            Securely manage patient records, admissions, and hospital data.
          </p>

          {/* STATS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="stats-grid"
          >
            <motion.div variants={card} className="stat-card">
              <img className="statImg" src="images/folder (1).png" alt="" />
              <p>Patient Records</p>
            </motion.div>

            <motion.div variants={card} className="stat-card">
              <img className="statImg" src="images/real-time.png" alt="" />
              <p>Admission Tracking</p>
            </motion.div>

            <motion.div variants={card} className="stat-card">
              <img className="statImg" src="images/shield.png" alt="" />
              <p>Secure Storage</p>
            </motion.div>
          </motion.div>

          {/* HOW IT WORKS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="how-it-works"
          >
            <motion.div variants={card} className="how-card">
              <span>1</span>
              <h4>Register Patients</h4>
              <p>Add patient details quickly and securely.</p>
            </motion.div>

            <motion.div variants={card} className="how-card">
              <span>2</span>
              <h4>Manage Records</h4>
              <p>View and organize patient data easily.</p>
            </motion.div>

            <motion.div variants={card} className="how-card">
              <span>3</span>
              <h4>Secure Storage</h4>
              <p>Data is stored safely in local storage.</p>
            </motion.div>
          </motion.div>

          {/* RECOMMENDED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="recommended"
          >
            <h3 className="section-title">
              <FontAwesomeIcon icon="book" /> Recommended Reading
            </h3>

            <div className="recommendation-list">
              {recommendations.map(item => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="recommendation-card"
                  onClick={() => {
                    setSheetData(item);
                    setOpenSheet(true);
                  }}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="inputs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive("register")}
            >
              <FontAwesomeIcon icon="plus" /> Register Patient
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-success"
              onClick={() => setActive("patients")}
            >
              <FontAwesomeIcon icon="rectangle-list" /> View Records
            </motion.button>
          </div>
        </div>
      </div>

      {/* BOTTOM SHEET */}
      <BottomSheet
        open={openSheet}
        onClose={() => setOpenSheet(false)}
        title={sheetData?.title}
      >
        <p>{sheetData?.content}</p>
      </BottomSheet>
    </section>
  );
}
