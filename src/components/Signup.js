import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required!");
    } else {
      setError("");
      alert("Signup Successful!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" 
          onChange={(e) => setForm({ ...form, name: e.target.value })} /><br /><br />
        <input type="email" placeholder="Email" 
          onChange={(e) => setForm({ ...form, email: e.target.value })} /><br /><br />
        <input type="password" placeholder="Password" 
          onChange={(e) => setForm({ ...form, password: e.target.value })} /><br /><br />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
