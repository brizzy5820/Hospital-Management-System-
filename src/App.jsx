import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import Welcome from "./components/Welcome";
import RegisterPatient from "./components/RegisterPatient";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";
import usePatients from "./hooks/usePatients";
import Page from "./components/page";

export default function App() {
  const [active, setActive] = useState("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { patients, setPatients } = usePatients();

  return (
    < >
    <div className="body">
      <MobileHeader active={active}
  setActive={setActive} toggle={() => setSidebarOpen(true)} />

      <Sidebar
        active={active}
        setActive={setActive}
        open={sidebarOpen}
        close={() => setSidebarOpen(false)}
      />

      <main>
        {active === "welcome" && 
        <Welcome setActive={setActive} />}
        {active === "register" && (
          <Page><RegisterPatient setPatients={setPatients} /></Page>
        )}
        {active === "dashboard" && (
          <Page><Dashboard patients={patients} /></Page>
        )}
        {active === "patients" && (
          <Page><Patients patients={patients} setPatients={setPatients} /></Page>
        )}
      </main>
    </div>
    </>
  );
}
