   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Sidebar({ active, setActive, open, close }) {
  return (
    <>
      <div id="overlay" className={open ? "show" : ""} onClick={close} />

      <aside className={open ? "open" : ""}>
        <div className="sidebar-header">
          <div className="avatar">
            <img src="/images/medical-assistance.png" className="himg" />
          </div>
          <div>
            <h2>Beetech</h2>
            <small>Patient Manager</small>
          </div>
        </div>

        <ul>
          <li className={active === "welcome" ? "active" : ""}
              onClick={() => setActive("welcome")}>
            <FontAwesomeIcon icon="house" /> Home
          </li>

          <li className={active === "register" ? "active" : ""}
              onClick={() => setActive("register")}>
            <FontAwesomeIcon icon="user-plus"></FontAwesomeIcon> Register
          </li>

          <li className={active === "dashboard" ? "active" : ""}
              onClick={() => setActive("dashboard")}>
            <FontAwesomeIcon icon="grip"/> Dashboard
          </li>

          <li className={active === "patients" ? "active" : ""}
              onClick={() => setActive("patients")}>
            <FontAwesomeIcon icon="address-card"></FontAwesomeIcon> Patients
          </li>
        </ul>
      </aside>
    </>
  );
}
