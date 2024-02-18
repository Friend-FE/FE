// 솔직후기

import ReviewBoard from '../../components/Board/ReviewBoard';
import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux'; 

const Review = () => {
  const [review, setReview] = useState([]);
  const [onlyMe, setOnlyMe] = useState(false);
  const isLoggedIn = useSelector(state=> state.login.isLoggedIn)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
          const response = await fetch('https://umcfriend.kro.kr/api/v1/reviews');
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
            views : item.views
           };
        });
        console.log(updatedReview);
        setReview(updatedReview);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchNoticeData();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  const handleRecord = () => {
    if(isLoggedIn){
      navigate("/login");
    }
    navigate("/reviews/write");
    
  }

  const handleOnlyMe = () => {
    setOnlyMe((prev) => !prev);
  }

  return (
    <>
      <Title title = "솔직후기"/>
      <TitleHR/>
      <ContentDiv>
        <InterviewH3>실제 교제 회원 인터뷰 {review.length}</InterviewH3>
        <ReviewWrapper>
          <ReviewBoard info={review} selectView={onlyMe ? 'me' : 'all' }/>
          <BtnDiv>
            <ButtonLink type='button' onClick={handleRecord}>후기 작성하기</ButtonLink>
            <ButtonLink type='button' onClick={handleOnlyMe}>{onlyMe ? '전체 후기글 보기' : '내 후기글 보기'}</ButtonLink>
          </BtnDiv>
        </ReviewWrapper>
      </ContentDiv>
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
  margin-left: 10vw;

  @media (max-width: 768px) {
    position: relative;
    top: 8vw;
  }
`;

const ContentDiv = styled.div`
  position: relative;
  top: 2vw;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 2vw;
  left: 24vw;
`;

const InterviewH3 = styled.h3`
  margin-left: 10vw;
  font-size: 1.1vw;

  @media (max-width: 768px) {
    position: relative;
    top: 12vw;
  }
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

  /* margin-top: 3vw; */
  margin: 0vw 1vw 0vw 1vw;

  cursor: pointer;

  @media (max-width: 768px) {
    position: relative;
    top: 13vw;
  }
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -10vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 46vw;
  }
`;
