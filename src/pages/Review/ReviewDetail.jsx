import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = ({ reviews }) => {
    const { id } = useParams(); 

    if (!reviews) return null;

    const review = reviews.find((review) => review.id === Number(id)); 

    return (
      <div>
        <h1>{review.id}</h1>    
      </div>
    );
  };

export default ReviewDetail;
