import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Board from '../Board/ManagerQnABoard';
import Title from '../title/index';
import styled from 'styled-components';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
`;

const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    position: relative;
    top: 5vw;
  }
`;

export const HeadTitleH3 = styled.h3`
    color: #23CAFF;
    font-size: 3vw;
    font-weight: 900;

    position: relative;
    top: -1vw;
    margin: -0.6vw;

    @media (max-width: 768px) {
    position: relative;
    top: 5vw;
  }
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
  height: 5vw;
  border-radius: 2.08vw;
  border: 0.10vw solid #2ECAFD;
  background: #FFF;
  padding: 1.38vw;
  text-align: center;

  font-size: 1vw;
  
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const ResponseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 5vw;
  border-radius: 2.08vw;
  border: 0.10vw solid #2ECAFD;
  background: #FFF;
  padding: 1.38vw;
  text-align: center;
  
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const AnswerButton = styled(Link)`
  width: 10vw;
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
    top: 10vw;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  top: 5vw;

  @media (max-width: 768px) {
    top: 32vw;
  }
`;

const QnADetail = () => {
  const { id } = useParams(); 
  const { state } = useLocation();
  const navigate = useNavigate();
  const [review, setReview] = useState(state?.item);
  

  console.log('Review:', review);

  useEffect(() => {
    const fetchAnswerFromServer = async () => {
      try {
        const apiUrl =  `https://umcfriend.kro.kr/api/v1/qa/${id}`;
        const response = await axios.get(apiUrl);

        if (response.data.code === 200 && response.data.message === 'SUCCESS') {
          setReview(response.data.data); 
          console.log("@@",response.data.data);
        } else {
          console.error('상세 QnA 조회 실패:', response.data.message);
          // 실패 시에 대한 처리
        }
      } catch (error) {
        console.error('상세 QnA 조회 중 오류 발생:', error);
        // 에러 처리
      }
    };

      fetchAnswerFromServer();
    
  }, [id]);


  if (!review) {
    navigate('/not-found');
    return null;
  }
  

    return (
      <>
      <ReviewWrapper>
        <Title title = "관리자 페이지"/>
        <TitleHR/>
        <HeadTitleH3>Q&A 자세히 보기</HeadTitleH3>
        <Board  info={review ? [review] : []} />
        <ReviewBox>
        
          {review.body}
        </ReviewBox>
        <ResponseBox>
        {review.answer && review.answer}
      </ResponseBox>
        <AnswerButton to={`/ManagerPage/QnA/QnAResponse/${review.id}`} state={{ item: review }}  
             >{review.status === 'COMPLETE' ? '답변 수정' : '답변 하기'}</AnswerButton>
      </ReviewWrapper>  
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
    );
  };
  
  export default QnADetail;