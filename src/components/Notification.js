import { useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([
    "Your appointment is confirmed.",
    "New message from Dr. A.",
    "Profile updated successfully."
  ]);

  const handleClear = () => {
    setNotifications([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
      <button onClick={handleClear} style={{ marginTop: "10px", padding: "5px 10px" }}>
        Clear All
      </button>
    </div>
  );
}
