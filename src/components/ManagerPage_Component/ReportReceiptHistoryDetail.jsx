import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Board from '../../components/Board/ReviewBoard';
import Title from '../../components/title';
import styled from 'styled-components';
import * as MAHD from '../ManagerPage_Component/MatchingAHDetail';
import Footer from '../footer';

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

const ReportReceiptHistoryDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const review = state?.item;

  if (!review) {
    navigate('/not-found');
    return null;
  }

  return (
    <>
    <ReviewWrapper>
      <Title title = "관리자 페이지"/>
      <TitleHR/>
      <MAHD.HeadTitleH3> {id}번째 신고 접수 내용 자세히 보기</MAHD.HeadTitleH3>
      <Board info={[review]} />
      <ReviewBox>
        {review.body}
      </ReviewBox>
    </ReviewWrapper>
    <Footer/>
    </>
  );
};

export default ReportReceiptHistoryDetail;
