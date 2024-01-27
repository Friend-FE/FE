import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailWrapper = styled.div`
  margin-top: 20vh;
  margin: 0 auto;
  width : 80vw;
`;

const Title = styled.div`
  font-size: 2em;
  padding-bottom: 20px;
`;

const Author = styled.div`
  font-size: 1.2em;
  padding-bottom: 20px;
`;

const Time = styled.div`
  font-size: 1.2em;
  padding-bottom: 20px;
`;

const Detail = ({ reviews }) => {
    const { id } = useParams();
    const review = reviews.find((review) => review.id === Number(id));
  
    if (!review) {
      return <div>해당하는 리뷰가 없습니다.</div>;
    }
  
    return (
      <DetailWrapper>
        <Title>제목: {review.title}</Title>
        <Author>작성자: {review.author}</Author>
        <Time>작성 시간: {review.time}</Time>
      </DetailWrapper>
    );
  };
  

export default Detail;
