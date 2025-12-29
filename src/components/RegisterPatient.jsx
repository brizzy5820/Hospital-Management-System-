import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterPatient({ setPatients }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    diagnosis: "",
    admissionDate: new Date().toISOString().split("T")[0]
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    setPatients((prev) => [
      ...prev,
      { id: Date.now(), ...form }
    ]);

    alert("✅ Patient Registered");

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      phone: "",
      diagnosis: "",
      admissionDate: new Date().toISOString().split("T")[0]
    });
  };

  return (
    <section id="registrationSection">
      <div className="container">
        <h2>Patient Registration Form</h2>

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="firstName">Patient Name</label>
            <span className="namespan">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              min="0"
              max="150"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="diagnosis">Diagnosis</label>
            <input
              type="text"
              name="diagnosis"
              placeholder="Diagnosis"
              value={form.diagnosis}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="admissionDate">Admission Date</label>
            <input
              type="date"
              name="admissionDate"
              value={form.admissionDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <motion.button  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }} type="submit"> Register Patient</motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
