// 관리자 페이지 - 회원 가입 신청 내용 자세히 보기
// router 등록 아직.

import React from 'react'
import { useNavigate } from 'react-router-dom';

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../../components/MyPage_Component/MyPage'
import * as P from '../../components/MyPage_Component/ProfileCard'
import styled from 'styled-components'
import Footer from '../../components/footer/index'
import Title from '../../components/title/index'

import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'

export default function ApplicationForMembershipDetail() {

  const navigate = useNavigate();

  const onClickAccept = () => {
    alert('수락되었습니다.');
    navigate(-1);
  };

  const onClickRefuse = () => {
    alert('거절되었습니다.');
    navigate(-1);
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <>
        <Title title="마이페이지"/>
        <T.TotalHr></T.TotalHr>
        <T.TotalDiv>
            <T.TitleH3>가나 님 회원 가입 신청 내용</T.TitleH3>
            <P.SectionContainer>
                <P.SectionDiv>
                    <P.ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
                    <P.NameH4>가나</P.NameH4>
                    <P.InfoP>생년월일 : 1998년생 2월 3일</P.InfoP>
                    <P.InfoP>키 : 168cm</P.InfoP>
                    <P.InfoP>지역 : 부산광역시 남구</P.InfoP>
                </P.SectionDiv>
                <P.SectionDiv>
                    <P.InfoP>장거리 가능 여부 : 가능</P.InfoP>
                    <P.InfoP>흡연 여부 : 비흡연</P.InfoP>
                    <P.InfoP>음주 여부 : 음주</P.InfoP>
                    <P.InfoP>단과대 : 경영대학</P.InfoP>
                    <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
                    <SelfIntroductionDiv>
                        <MAHD.SelfIntroductionP> 처음에는 많이 뚝딱거릴 수도 있지만 친해지면 엄청 애교도 많고 활발해요! 좋은 인연 만들어 가고 싶어요! </MAHD.SelfIntroductionP>       
                    </SelfIntroductionDiv>
                </P.SectionDiv>
            </P.SectionContainer>
            <SectionDiv>
                <MAHD.InfoP>연락처 : 010-2949-8484</MAHD.InfoP>
                <MAHD.InfoP>키 : 168cm</MAHD.InfoP>
                <MAHD.InfoP>지역 : 부산광역시 남구</MAHD.InfoP>
                <MAHD.InfoP>매칭 받고 싶지 않은 조건 따로 없음</MAHD.InfoP>
            </SectionDiv>
            <BtnDiv>
              <AcceptBtn onClick={onClickAccept}>회원가입 수락</AcceptBtn>
              <OtherBtn onClick={onClickRefuse}>회원가입 거절</OtherBtn>
              <OtherBtn onClick={onClickBack}>뒤로가기</OtherBtn>
            </BtnDiv>
        </T.TotalDiv>
        <FooterContainer>
            <Footer/>
        </FooterContainer>
    </>
  )
}

export const SelfIntroductionTitleP = styled.p`
    font-size: 1.8vw;

    margin: 5vw 0 0 0;

    position: relative;
    top: -1.5vw;
`;

export const SelfIntroductionDiv = styled.div`
    background-color: white;

    padding: 0.66vw 4vw;
    margin: 1vw 3vw;

    position: relative;
    top: -1.33vw;

    height: 20vw;

    text-align: left;
`;

export const SectionDiv = styled.div`
  text-align: left;

  width: 86vw;
  height: 24vw;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);

  margin: 0 2vw;
`;

export const BtnDiv = styled.div`

  position: relative;
  top: 10vw;
`;

export const AcceptBtn = styled.button`
  background-color: rgb(139, 227, 255);
  color: white;
  padding: 1.38vw;
  width: 13.88vw;
  margin: 0 1vw 0 1vw;
  cursor: pointer;
  font-size: 1vw;
  font-weight: bold;
  border: none;
  box-shadow: -0.13vw 0.34vw 0.34vw 0 rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 0.20vw 0.34vw rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

export const OtherBtn = styled.button`
  background-color: white;
  padding: 1.38vw;
  width: 13.88vw;
  margin: 0 1vw 0 1vw;
  cursor: pointer;
  font-size: 1vw;
  font-weight: bold;
  border: none;
  box-shadow: -0.13vw 0.34vw 0.34vw 0 rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 0.20vw 0.34vw rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

export const FooterContainer = styled.div`
    position: relative;
    bottom: -30vw;
    width: 100%;

    @media (max-width: 768px) {
        bottom: -20vw;
    }
`;