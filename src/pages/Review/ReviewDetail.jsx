// 솔직후기 - 자세히

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReviewBoard from '../../components/Board/ReviewBoard';
import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

const ReviewDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [review, setReview] = useState(state?.item);  
  //지금은 이미 revire 에 body가 있지만, api 호출로 body 를 받아오도록 설계 해야함 


  const handleDelete = async () => {
    try {
      const response = await fetch(`http://13.209.145.28:8080/api/v1/review/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //body 필요 ?
        }),
      });
  
      if (response.ok) {
        console.log('삭제 성공');
        navigate(-1);
      } else {
        console.error('삭제 실패');
      }
    } catch (error) {
      console.error('삭제 중 오류:', error);
    }
  };

  const handleModify = () => {
    const data = {
      id : id,
      title : review.title,
      body : review.body
    };
    navigate("/reviews/write" , {state : {data}} );
  };

  const onClickBtn = () => {
    navigate(-1);
  }

  return (
    <>
      <ReviewWrapper>
      <Title title = "솔직후기"/>
      <TitleHR/>
      <HeadTitleH3>솔직후기 자세히 보기</HeadTitleH3>
      <Div>
        <ReviewBoard info={[review]} />
      </Div>
      <ReviewBox>
        {review.body}
      </ReviewBox>
      </ReviewWrapper>
        {/* 나중에 피그마로 수정해야할 부분  */}
      <ButtonWrapper>
        <SubmitButton type="button" onClick={onClickBtn}>목록으로 돌아가기</SubmitButton>
      </ButtonWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
    
  );
};

export default ReviewDetail;

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
const SubmitButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: 0.41vw 0.55vw 0.41vw 0vw rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    bottom: -10vw;
  }
`;