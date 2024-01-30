// 신고 접수 내역

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as MAHD from './MatchingAHDetail';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';
import ManagerReportBoard from '../../components/Board/ManagerReportBoard'
import axios from 'axios';

export default function ReportReceiptHistory() {

  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  // const report = [
  //   { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18' },
  //   { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18' },
  //   { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18' },
  //   { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18' }
  // ];


  const fetchData = async () => {
    try {
      const response = await axios.get('http://13.209.145.28:8080/api/v1/reports');
      console.log(response.data.data);
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
      <TitleHR/>
      <ReviewWrapper>
        <MAHD.HeadTitleH3>신고 접수 내역 모아보기</MAHD.HeadTitleH3>
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
const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const ContentDiv = styled.div`
  position: relative;
  top: 3vw;
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -2vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 25vw;
  }
`;