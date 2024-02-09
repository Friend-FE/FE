// 관리자 페이지 - 신고 접수 내역 보기 - 자세히

import React from 'react'
import { useLocation, useNavigate/*, useParams*/ } from 'react-router-dom';
import ManagerRBD from '../../components/Board/ManagerRBD';
import Title from '../../components/title';
import styled from 'styled-components';
import * as MAHD from '../ManagerPage_Component/MatchingAHDetailWoman';
import Footer from '../footer';
import axios from 'axios';

const ReportReceiptHistoryDetail = () => {
  // const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const content = state?.item;
  console.log(content);
  // const index = state?.index;


  if (!content) {
    navigate('/not-found');
    return null;
  }

  const Processing = async () => {

    const id = content.id;

    console.log('id 잘 넘어왔는지 test', id);

    try {
    const response = await axios.post(`http://13.209.145.28:8080/api/v1/report/complete?id=${id}`);
      if (response.status === 200) {
        console.log('처리하기 정상');
      } else {
        console.error('오류');
      }
    }
    catch (error) {
      console.error('처리하기 중 오류 발생:', error);
      alert('처리하기 오류가 발생했습니다. 다시 시도해주세요.');
    };
  }

  const onTreat = async () => {
    Processing();
    alert('정상 처리 되었습니다.');
    navigate(-1);
  };

  const onWarning = async () => {

    const badMemberId = content.badMemberId;

    console.log('경고 주려는 대상 id 잘 넘어왔는지 test', badMemberId);

    try {
      const response = await axios.post( `http://13.209.145.28:8080/api/v1/report/addReportCount/${badMemberId}` , {
        badMemberId
       });

        if (response.status === 200) {
          console.log('경고주기 정상');
          Processing();
          alert('경고 처리 되었습니다.');
          navigate(-1);
        } else {
          console.error('오류');
        }
      }
      catch (error) {
        console.error('경고주기 중 오류 발생:', error);
        alert('경고 오류가 발생했습니다. 다시 시도해주세요.');
      };
  };

  const onBack = () => {
    navigate(-1);
  };

  console.log(content.status);

  return (
    <>
    <ReviewWrapper>
      <Title title = "관리자 페이지"/>
      <TitleHR/>
      <HeadTitleH3>신고 접수 내용 자세히 보기</HeadTitleH3>
      <ManagerRBD info={[content]} />
      <ReviewBox>
        {content.body}
      </ReviewBox>
    </ReviewWrapper>
    <ButtonWrapper>
    {content.status === 'INCOMPLETE' ? (
        <>
          <Button type="button" onClick={onTreat}>처리하기</Button>
          <Button type="button" onClick={onWarning}>경고주기</Button>
        </>
      ) : (
        <Button type="button" onClick={onBack}>뒤로 가기</Button>
      )
    }
    </ButtonWrapper>
    <FooterContainer>
      <Footer/>
    </FooterContainer>
    </>
  );
};

export default ReportReceiptHistoryDetail;


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

  position: relative;

  @media (max-width: 768px) {
    top: 4vw;
  }
`;

export const HeadTitleH3 = styled.h3`
  color: #23CAFF;
  font-size: 3vw;
  font-weight: 900;

  position: relative;
  top: -2vw;
  margin: -0.6vw;

  @media (max-width: 768px) {
  top: 4vw;
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
    top: 10vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const Button = styled.button`
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

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    bottom: -25vw;
  }
`;