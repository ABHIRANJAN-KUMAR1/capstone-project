import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email and Password are required!");
    } else if (form.email !== "user@example.com" || form.password !== "123456") {
      setError("Invalid credentials!");
    } else {
      setError("");
      alert("Login Successful!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" 
          onChange={(e) => setForm({ ...form, email: e.target.value })} /><br /><br />
        <input type="password" placeholder="Password" 
          onChange={(e) => setForm({ ...form, password: e.target.value })} /><br /><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
