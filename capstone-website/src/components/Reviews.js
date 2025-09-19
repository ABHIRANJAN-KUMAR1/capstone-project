import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');

  const addReview = () => {
    if(text) setReviews([...reviews, text]);
    setText('');
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Write a review" />
      <button onClick={addReview}>Add Review</button>
      <ul>
        {reviews.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

export default Reviews;
