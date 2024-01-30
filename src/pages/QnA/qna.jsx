// Q&A (이용자가 헤더에서 접근하는 경우!!)

import QnABoard from '../../components/Board/QnABoard';
import { Link } from 'react-router-dom';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

const Question = () => {
  const question = [
    { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18' },
    { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18' },
    { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18' },
    { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18' }
  ];

  return (
    <>
    <Title title = "Q&A"/>
    <TitleHR/>
    <ReviewWrapper>
      <QnABoard info={question} />
      <ButtonLink to ="/QnA/write">문의하기</ButtonLink>
    </ReviewWrapper>
    <FooterContainer>
      <Footer/>
    </FooterContainer>
  </>
  );
};

export default Question;

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