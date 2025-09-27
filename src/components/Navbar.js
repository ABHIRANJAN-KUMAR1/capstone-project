import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/login"); // logout ke baad login page pe redirect
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/appointment" style={{ margin: "10px", color: "white" }}>Appointment</Link>
      <Link to="/reviews" style={{ margin: "10px", color: "white" }}>Reviews</Link>
      <Link to="/profile" style={{ margin: "10px", color: "white" }}>Profile</Link>
      <Link to="/notifications" style={{ margin: "10px", color: "white" }}>Notifications</Link>
      <button 
        onClick={handleLogout} 
        style={{ marginLeft: "20px", padding: "5px 10px", cursor: "pointer" }}
      >
        Logout
      </button>
    </nav>
  );
}
