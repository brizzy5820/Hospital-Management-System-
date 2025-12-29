import { useEffect, useState } from "react";

const STORAGE_KEY = "hospital_patients";

export default function usePatients() {
  // ✅ Load initial state DIRECTLY from localStorage
  const [patients, setPatients] = useState(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error("Failed to read localStorage", err);
      return [];
    }
  });

  // ✅ Save ONLY when patients changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patients));
  }, [patients]);

  return { patients, setPatients };
}
