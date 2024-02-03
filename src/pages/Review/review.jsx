// 솔직후기

import ReviewBoard from '../../components/Board/ReviewBoard';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

const Review = () => {
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
          const response = await fetch('http://13.209.145.28:8080/api/v1/reviews');
          const data = await response.json();

          const updatedReview = data.data.map(item => {
          const createdAtDate = new Date(item.createdAt);
          const formattedDate = `${createdAtDate.getFullYear()}-${(createdAtDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;
        
          return {
            id: item.id,
            title: item.title,
            author: item.author,
            body : item.body,
            time: formattedDate,
           };
        });

        setReview(updatedReview);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchNoticeData();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  const handleRecord = () => {
    navigate("/reviews/write");
  }

  return (
    <>
      <Title title = "솔직후기"/>
      <TitleHR/>
      <InterviewH3>실제 교제 회원 인터뷰 {review.length}</InterviewH3>
      <ReviewWrapper>
        <ReviewBoard info={review}/>
        <ButtonLink type='button' onClick={handleRecord}>후기 작성하기 </ButtonLink>
      </ReviewWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  /* position: relative; */
  /* height: 10vw; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    position: relative;
    top: 3vw;
  }
`

const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    position: relative;
    top: 8vw;
  }
`;

const InterviewH3 = styled.h3`
  margin-left: 10vw;

  font-size: 1.1vw;
`;

const ButtonLink = styled.button`
  width: 15vw;
  height: 3vw;
  background: #8be3ff;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2vw;
  margin-left: 65vw;

  @media (max-width: 768px) {
    position: relative;
    top: 13vw;
  }
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -2vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 22vw;
  }
`;
