// src/components/Profile.js
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    // Page ka title update karo
    document.title = "User Profile - Capstone Project";
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </div>
  );
}
