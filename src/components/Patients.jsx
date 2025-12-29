export default function Patients({ patients, setPatients }) {
  return (
    <section id="patientsSection">
      <div className="container" style={{ padding: "0.5em" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Patient Records
        </h2>

        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Diagnosis</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                    No patients registered yet
                  </td>
                </tr>
              ) : (
                patients.map((p, i) => (
                  <tr key={p.id}>
                    <td>{i + 1}</td>
                    <td>{p.firstName} {p.lastName}</td>
                    <td>{p.age}</td>
                    <td>{p.gender}</td>
                    <td>{p.phone || "N/A"}</td>
                    <td>{p.diagnosis}</td>
                    <td>{p.admissionDate}</td>
                    <td>
                      <button
                        onClick={() =>
                          setPatients(prev =>
                            prev.filter(patient => patient.id !== p.id)
                          )
                        }
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}
