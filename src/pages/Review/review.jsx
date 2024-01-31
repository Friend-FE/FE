// 솔직후기

import ReviewBoard from '../../components/Board/ReviewBoard';
import { Link } from 'react-router-dom';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';


const Review = () => {
  const review = [
    { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18', view: 8, body: '어쩌고 저쩌고 어쩌고 저쩌고'},
    { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18', view: 8, body: '어쩌고 저쩌고 어쩌고 저쩌고' },
    { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18', view: 8, body: '어쩌고 저쩌고 어쩌고 저쩌고' },
    { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18', view: 8, body: '어쩌고 저쩌고 어쩌고 저쩌고' }
  ];

  return (
    <>
      <Title title = "솔직후기"/>
      <TitleHR/>
      <InterviewH3>실제 교제 회원 인터뷰 4</InterviewH3>
      <ReviewWrapper>
        <ReviewBoard info={review}/>
        <ButtonLink to ="/reviews/write">후기 작성하기</ButtonLink>
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
`
const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const InterviewH3 = styled.h3`
  margin-left: 10vw;

  font-size: 1.1vw;
`;

const ButtonLink = styled(Link)`
  width: 15vw;
  height: 3vw;
  background: #8be3ff;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
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
    top: 10vw;
  }
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -2vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 25vw;
  }
`;
