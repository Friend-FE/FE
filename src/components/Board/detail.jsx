import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const ReviewDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(id);
  console.log(state);

  const review = state?.item;

  if (!review) {
    navigate('/not-found');
    return null;
  }

  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.author}</p>
      <p>{review.time}</p>
      <p>{review.body}</p>
    </div>
  );
};

export default ReviewDetail;