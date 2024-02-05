// 관리자 페이지 - Q&A 모아보기 - 자세히 보기

import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ManagerQnABoard from '../../components/Board/ManagerQnABoard';
import Title from '../../components/title/index';
import styled from 'styled-components';
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetail'
import Footer from '../../components/footer';

const QnADetail = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
  
    const review = state?.item;
  
    if (!review) {
      navigate('/not-found');
      return null;
    }

    const onAnswering = () => {
      navigate('/ManagerPage/QnA/QnAResponse');
    };
  
    return (
      <>
      <ReviewWrapper>
        <Title title = "관리자 페이지"/>
        <TitleHR/>
        <HeadTitleH3>Q&A 자세히 보기</HeadTitleH3>
        <Div>
          <ManagerQnABoard info={[review]} />
        </Div>
        <ReviewBox>
          {review.body}
        </ReviewBox>
        <ButtonWrapper>
          <RecordButton type='button' onClick={onAnswering}>답변하기</RecordButton>
        </ButtonWrapper>
      </ReviewWrapper>  
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
    );
  };
  
  export default QnADetail;

const ReviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  @media (max-width: 768px) {
    top: -2vw;
  }
`;

const TitleHR = styled.hr`
  margin-top: 10vh;
  width: 80vw;
  margin-bottom: 10vh;
  @media (max-width: 768px) {
    position: relative;
    top: -2vw;
  }
`;

export const HeadTitleH3 = styled.h3`
  color: #23CAFF;
  font-size: 3vw;
  font-weight: 900;

  position: relative;
  top: -1vw;
  margin: -0.6vw 0 0.6vw 0;
  @media (max-width: 768px) {
  position: relative;
  top: -10vw;
  }
`;

const Div = styled.div`
  position: relative;
  /* height: 100vh; */

  @media (max-width: 768px) {
    top: -18vw;
  }
`;

const ReviewBox = styled.pre`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  /* height: 40vh; */
  border-radius: 2.08vw;
  border: 0.10vw solid #2ECAFD;
  background: #FFF;
  padding: 1.38vw;
  text-align: center;

  font-size: 1vw;

  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: -8vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;

    margin-top: 0vw;
    /* top: 10vw; */
  }
`;

const RecordButton = styled.button`
  width: 13vw;
  height: 3vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  /* text-align: center; */
  font-size: 1vw;
  font-weight: bold;

  /* margin-top: 2vw; */
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);

`;

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    bottom: -10vw;
  }
`;