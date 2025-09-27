import { useState } from "react";

export default function InstantConsultation() {
  const [message, setMessage] = useState("");
  const [consultations, setConsultations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setConsultations([...consultations, message]);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Instant Consultation</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>Send</button>
      </form>
      <ul style={{ marginTop: "20px" }}>
        {consultations.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
