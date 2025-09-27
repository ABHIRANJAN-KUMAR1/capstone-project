import { useState } from "react";

export default function Reviews() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedReviews([...submittedReviews, { review, rating }]);
    setReview("");
    setRating("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Write your review..." 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
          style={{ padding: "8px", width: "300px" }}
        /><br /><br />
        <select value={rating} onChange={(e) => setRating(e.target.value)} style={{ padding: "8px" }}>
          <option value="">Select Rating</option>
          <option value="1">1 ⭐</option>
          <option value="2">2 ⭐⭐</option>
          <option value="3">3 ⭐⭐⭐</option>
          <option value="4">4 ⭐⭐⭐⭐</option>
          <option value="5">5 ⭐⭐⭐⭐⭐</option>
        </select><br /><br />
        <button type="submit" disabled={!review || !rating} style={{ padding: "8px 12px" }}>
          Submit Review
        </button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {submittedReviews.map((r, index) => (
          <li key={index}>{r.review} - {r.rating} ⭐</li>
        ))}
      </ul>
    </div>
  );
}
