export default function Dashboard({ patients }) {
  const today = new Date().toISOString().split("T")[0];

  return (
 <section id="dashboardSection" >
      <div className="container">
        <h2 >Hospital Dashboard</h2>
        <div className="stats-grid">
          <div className="stat-card" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white"}}>
            <h3 id="totalPatients">{patients.length}</h3>
            <p>Total Patients</p>
          </div>
          <div className="stat-card" style={{background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white"}}>
            <h3 id="todayAdmissions">{patients.filter(p => p.admissionDate === today).length}</h3>
            <p>Today's Admissions</p>
          </div>
          <div className="stat-card" style={{background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white"}}>
            <h3 id="avgAge">{patients.length ? (patients.reduce((sum, p) => sum + p.age, 0) / patients.length).toFixed(1) : 0}</h3>
            <p>Average Patient Age</p>
          </div>
        </div>
        <div className="alert alert-info">
          <strong>ℹ️ Info:</strong> Data is stored using local storage.
        </div>
      </div>
    </section>
  );
}
