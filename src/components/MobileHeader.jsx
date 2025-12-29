import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"
export default function MobileHeader({
  active,
  setActive,
  toggle,
  title = "Hospital MS"
}) {
  return (
    <header className="mobile-header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <motion.button
         whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
          className="menu-btn"
          aria-label="Open menu"
          onClick={toggle}
          type="button"
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>

        <strong>{title}</strong>
      </div>

      <nav>
        <motion.button
          whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
          className={active === "welcome" ? "active" : ""}
          onClick={() => setActive("welcome")}
        >
          Home
        </motion.button>

        <motion.button
         whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
          className={active === "dashboard" ? "active" : ""}
          onClick={() => setActive("dashboard")}
        >
          Dashboard
        </motion.button>
      </nav>
    </header>
  );
}
