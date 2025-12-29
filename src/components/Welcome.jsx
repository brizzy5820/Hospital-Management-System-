import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Welcome({ setActive }) {
  return (
    <section>
   <div className="welcomeSection">
    <div className="banner"> <img src="images/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg" alt=""/></div>
      <div className="container">
          <h2><img style={{width: 42, height: 32}} src="/images/hypoallergenic.gif" alt=""/> Mini Hospital Management System</h2>
    <p style={{textAlign:"center",margin: "10px 0 20px", color:"#475569"}}>
      Securely manage patient records, admissions, and hospital data.
    </p>

    <motion.div       variants={container}
      initial="hidden"
      animate="show" className="stats-grid">
      <motion.div  variants={card} className="stat-card">
        <h3><img className="statImg" src="images/folder (1).png" alt=""/></h3>
        <p>Patient Records</p>
      </motion.div>
      <motion.div  variants={card} className="stat-card">
        <h3><img className="statImg" src="images/real-time.png" alt=""/></h3>
        <p>Admission Tracking</p>
      </motion.div>
      <motion.div  variants={card} className ="stat-card">
        <h3><img className="statImg" src="images/shield.png" alt=""/></h3>
        <p>Secure Storage</p>
      </motion.div>
    </motion.div>
        <div className="inputs">
          <motion.button  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }} onClick={() => setActive("register")}>
            <FontAwesomeIcon icon="plus" /> Register Patient
          </motion.button>

          <motion.button  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }} className="btn-success" onClick={() => setActive("patients")}>
            <FontAwesomeIcon icon="rectangle-list" /> View Records
          </motion.button>
        </div>
      </div>
   </div>
    </section>
  );
}
