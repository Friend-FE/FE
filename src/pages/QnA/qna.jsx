// Q&A (이용자가 헤더에서 접근)

import React, { useState, useEffect } from 'react';
import QnABoardComponent from '../../components/Board/QnABoard'; 
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleHR = styled.hr`
  margin-top: 5vw;
  margin-left: 10vw;

  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 53.3333vw) {
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

const Qna = () => {
  const [qnaData, setQnaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchQnaData = async () => {
    try {
      const response = await fetch('http://13.209.145.28:8080/api/v1/qas', {
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      setQnaData(data.data);
      console.log('모든 QnA 조회 완료:', data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQnaData();
  }, []);

  
  if (loading) {
    return <div>Loading QnA data...</div>;
  }


  return (
    <>
      <Title title="Q&A" />
      <TitleHR />
      <ReviewWrapper>
        <QnABoardComponent info={qnaData} />
        <ButtonLink to="/QnA/write">문의하기</ButtonLink>
      </ReviewWrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default Qna;