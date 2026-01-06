export default function Dashboard({ patients }) {
  const today = new Date().toISOString().split("T")[0];

  const todayAdmissions = patients.filter(
    p => p.admissionDate === today
  ).length;

  const averageAge =
    patients.length > 0
      ? (
          patients.reduce((sum, p) => sum + Number(p.age || 0), 0) /
          patients.length
        ).toFixed(1)
      : 0;

  const maleCount = patients.filter(p => p.gender === "Male").length;
  const femaleCount = patients.filter(p => p.gender === "Female").length;

  const latestPatient =
    patients.length > 0
      ? patients[patients.length - 1]
      : null;

  return (
    <section id="dashboardSection">
      <div className="container">
        <h2>Hospital Dashboard</h2>

        <div className="stats-grid">
          <div className="stat-card gradient-purple" style={{background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white"}}>
            <h3>{patients.length}</h3>
            <p>Total Patients</p>
          </div>

          <div className="stat-card gradient-pink"  style={{background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", color: "white"}}>
            <h3>{todayAdmissions}</h3>
            <p>Today's Admissions</p>
          </div>

          <div className="stat-card gradient-green" style={{background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", color: "white"}}>
            <h3>{maleCount}</h3>
            <p>Male Patients</p>
          </div>

          <div className="stat-card gradient-orange" style={{background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", color: "white"}} >
            <h3>{femaleCount}</h3>
            <p>Female Patients</p>
          </div>
          
          <div className="stat-card gradient-blue"  style={{background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", color: "white"}}>
            <h3>{averageAge}</h3>
            <p>Average Age</p>
          </div>

        </div>

        {/* Latest admission */}
        <div className="alert alert-info" style={{ marginTop: 20 }}>
          <strong>🆕 Latest Admission:</strong>{" "}
          {latestPatient
            ? `${latestPatient.firstName} ${latestPatient.lastName} (${latestPatient.admissionDate})`
            : "No patients yet"}
        </div>

        <div className="alert alert-info">
          <strong>ℹ️ Info:</strong> Data is stored using local storage.
        </div>
      </div>
    </section>
  );
}
