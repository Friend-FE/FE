// Q&A 모아보기 (관리자 페이지)

import React, { useState, useEffect } from 'react';
import ManagerQnABoard from '../Board/ManagerQnABoard';
import Title from '../title';
import styled from 'styled-components';
import Footer from '../footer';

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;
  margin-left: 10vw;

  @media (max-width: 768px) {

    margin-top: 3vw;
    margin-bottom: 6vw;

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

const QnA = () => {
  const [userQuestions, setUserQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserQuestions = async () => {
    try {
      const response = await fetch('https://umcfriend.kro.kr/api/v1/qas', {
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      
      setUserQuestions(data.data);
      console.log('모든 QnA 조회 완료:', data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserQuestions();
  }, []);

  if (loading) {
    return <div>Loading QnA data...</div>;
  }

  return (
    <>
      <Title title="관리자 페이지" />
      <TitleHR />
      <ReviewWrapper>
        <ManagerQnABoard info={userQuestions} />
    
      </ReviewWrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default QnA;