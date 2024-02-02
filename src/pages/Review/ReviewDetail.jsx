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

  return (
    <>
      <ReviewWrapper>
      <Title title = "솔직후기 자세히 보기"/>
      <TitleHR/>
      <ReviewBoard info={[review]} />
      <ReviewBox>
        {review.body}
      </ReviewBox>
      </ReviewWrapper>

      {/* 나중에 피그마로 수정해야할 부분  */}
      <ButtonWrapper>      
          <CancelButton type="button" onClick={handleDelete}>삭제하기</CancelButton>
          <SubmitButton type="button" onClick={handleModify}>수정하기</SubmitButton>
      </ButtonWrapper>

      <Footer/>
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
  height: 100vh;
`;

const TitleHR = styled.hr`
  margin-top: 10vh;
  width: 80vw;
  margin-bottom: 10vh;
`;

// const HR = styled.hr`
//   height: 2px;
//   background: #000;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;

const ReviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 40vh;
  border-radius: 30px;
  border: 1.5px solid #2ECAFD;
  background: #FFF;
  padding: 20px;
  text-align: center;

  margin-top: 3vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-top: 1vw;
  }
`;

const CancelButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-right: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const SubmitButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;