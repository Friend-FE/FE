// 사용자 페이지 - Q&A 모아보기 - 자세히 보기

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import QnABoardComponent from '../../components/Board/QnABoard';
import Title from '../../components/title/index';

import styled from 'styled-components';
import Footer from '../../components/footer';
import axios from 'axios';
// import { FooterContainer } from '../ApplicationForMembership/ApplicationForMembershipDetail';

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

const DIV = styled.div`
  position: relative;
  top: -2vw;
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

const ResponseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 5vw; /* 변경된 높이 */
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const ModifyButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  margin-right: 1vw;
  cursor: pointer;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
`;

const DeleteButton = styled.button`
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
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
  position: relative;
  top: 5vw;

  @media (max-width: 768px) {
    top: 34vw;
  }
`;


const QnADetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [qnaData, setQnaData] = useState(state?.item);
  

  useEffect(() => {
    const fetchQnADetail = async () => {
      try {
        
        const apiUrl = qnaData?.privacy === "PRIVATE" ? `https://umcfriend.kro.kr/api/v1/qa/nopassword/${id}?password=${state?.pwd}` : `https://umcfriend.kro.kr/api/v1/qa/nopassword/${id}`;
        
        const response = await axios.get(apiUrl);

        if (response.data.code === 200 && response.data.message === 'SUCCESS') {
          setQnaData(response.data.data); 
          console.log('상세 QnA 조회 성공',response);
        } else {
          console.error('상세 QnA 조회 실패:', response.data.message);
          // 실패 시에 대한 처리
        }
      } catch (error) {
        console.error('상세 QnA 조회 중 오류 발생:', error);
        // 에러 처리
      }
    };

    fetchQnADetail();
  }, [id]);

  const handleModify = () => {
    navigate(`/QnA/write`, { state: { postId: id } });
  };

  const handleDelete = async () => {
    try {
      const userConfirmed = window.confirm('정말 삭제하시겠습니까?');
      if (userConfirmed) {
        const apiUrl = `https://umcfriend.kro.kr/api/v1/qa/${id}`;
        await axios.delete(apiUrl);
        console.log(`${id} 번 리뷰 삭제 완료`);
        navigate(-1);
      } else {
      }
    } catch (error) {
      console.error('리뷰 삭제 실패', error);
    }
  };

  return (
    <>
      <ReviewWrapper>
        <Title title="Q&A" />
        <TitleHR />
        <HeadTitleH3>Q&A 자세히 보기</HeadTitleH3>
          <QnABoardComponent info={qnaData ? [qnaData] : []} />
        <ReviewBox>
        {qnaData?.body}
        </ReviewBox>
        <ResponseBox>
        {qnaData?.answer && qnaData?.answer}
      </ResponseBox>
        <ButtonContainer>
          <ModifyButton onClick={handleModify}>수정</ModifyButton>
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ButtonContainer>
      </ReviewWrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default QnADetail;