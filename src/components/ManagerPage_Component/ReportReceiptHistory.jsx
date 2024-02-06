// 신고 접수 내역

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import * as MAHD from './MatchingAHDetail';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';
import ManagerReportBoard from '../../components/Board/ManagerReportBoard'
import axios from 'axios';

export default function ReportReceiptHistory() {

  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://13.209.145.28:8080/api/v1/reports');
      // console.log(response.data.data);
      setHistory(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      navigate(-1); 
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title = "관리자 페이지"/>
      <ReviewWrapper>
        <TitleHR/>
        <HeadTitleH3>신고 접수 내역 모아보기</HeadTitleH3>
        <ContentDiv>
          <ManagerReportBoard info={history} />
        </ContentDiv>
      </ReviewWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  )
}

const ReviewWrapper = styled.div`
  /* position: relative; */
  /* height: 10vw; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadTitleH3 = styled.h3`
    color: #23CAFF;
    font-size: 3vw;
    font-weight: 900;

    position: relative;
    top: -1vw;
    margin: -0.6vw;

    @media (max-width: 768px) {
    top: 5vw;
  }
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

const ContentDiv = styled.div`
  position: relative;
  top: 3vw;

  @media (max-width: 768px) {
    top: 1vw;
  }
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -5vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 10vw;
  }
`;