import { useState } from "react";

export default function FindDoctorSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const doctors = [
    "Dr. A - Cardiologist",
    "Dr. B - Neurologist",
    "Dr. C - Orthopedic",
    "Dr. D - Dermatologist"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = doctors.filter(doc => doc.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Find a Doctor</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search by name or specialty" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          style={{ padding: "8px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>Search</button>
      </form>
      <ul>
        {results.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>
    </div>
  );
}
