// ReviewDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = ({ reviews }) => {
  const { id } = useParams(); // URL의 :id 부분을 가져옵니다.
  const review = reviews.find((review) => review.id === Number(id)); // 이 ID에 해당하는 리뷰를 찾습니다.

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
