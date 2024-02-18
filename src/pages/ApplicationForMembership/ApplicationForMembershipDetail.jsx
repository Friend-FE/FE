// 관리자 페이지 - 회원 가입 신청 내용 자세히 보기
// router 등록 아직.

import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import * as T from '../../components/MyPage_Component/MyPage'
import * as P from '../../components/MyPage_Component/ProfileCard'
import styled from 'styled-components'
import Footer from '../../components/footer/index'
import Title from '../../components/title/index'

import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'

export default function ApplicationForMembershipDetail() {

  const navigate = useNavigate();

  const onClickAccept = async (event) => {
    event.preventDefault();

    // API 호출
    try {
      const response = await fetch('https://umcfriend.kro.kr/api/v1/activate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email}),
      });

      if (!response.ok) {
          // 에러 처리
          alert('수락에 실패했습니다.');
          throw new Error('Failed to activate');
      }
    alert('수락되었습니다.');
    navigate(-1);
  }catch (error) {
    console.error('Error during activate:', error.message);
  }
  };

  const onClickRefuse  = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch(`https://umcfriend.kro.kr/api/v1/manager/member/deny/${email}`);
      if(response.ok){
          const data = await response.json();
          console.log(data);
          alert('회원가입 거절되었습니다.');
          navigate(-1);
      }
      else{
        console.error('API 호출 중 오류:');
      }
    }catch (error) {
      console.error('API 호출 중 오류:', error.message);
    }
  };

  const onClickBack = () => {
    navigate(-1);
  };

  const [profile, setProfile] = useState();
  const {email} = useParams();
  console.log(email);

  useEffect(() => {
    axios
      .get(`https://umcfriend.kro.kr/api/v1/myPage/getProfile/${email}`)
      .then(function (response) {
        // 요청이 성공했을 때의 처리
        console.log("응답 데이터:", response.data);
        setProfile(response.data);
      })
      .catch(function (error) {
        // 요청이 실패했을 때의 처리
        console.error("오류 발생:", error);
      });
  }, [email]);
  
  return (
    <>
        <Title title="관리자페이지"/>
        <T.TotalHr></T.TotalHr>
        {profile? <T.TotalDiv>
            <T.TitleH3>{profile.data.nickname} 님 회원 가입 신청 내용</T.TitleH3>
            <P.SectionContainer>
                <P.SectionDiv>
                    <P.ProfileBasicImg src={profile.data.imgUrl} alt ="ProfileBasic"/>
                    <P.NameH4>{profile.data.nickname}</P.NameH4>
                    <P.InfoP>생년월일 :{profile.data.birthday}</P.InfoP>
                    <P.InfoP>키 : {profile.data.height}cm</P.InfoP>
                    <P.InfoP>지역 : {profile.data.region}</P.InfoP>
                </P.SectionDiv>
                <P.SectionDiv>
                    <P.InfoP>장거리 가능 여부 : {profile.data.distance === "SHORT" ? "불가능" : "가능"}</P.InfoP>
                    <P.InfoP>흡연 여부 : {profile.data.smoking === "SMOKER" ? "흡연" : "비흡연"}</P.InfoP>
                    <P.InfoP>음주 여부 : {profile.data.drinking === "DRINKER" ? "음주" : "비음주"}</P.InfoP>
                    <P.InfoP>단과대 :{profile.data.department}</P.InfoP>
                    <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
                    <SelfIntroductionDiv>
                        <MAHD.SelfIntroductionP>{profile.data.introduction} </MAHD.SelfIntroductionP>       
                    </SelfIntroductionDiv>
                </P.SectionDiv>
            </P.SectionContainer>
            <SectionDiv>
                <MAHD.InfoP>연락처 :{profile.data.phone}</MAHD.InfoP>
                <MAHD.InfoP>매칭되고 싶지 않은 조건 </MAHD.InfoP>
                <MAHD.InfoP>지역:{profile.data.nonRegion},&nbsp;학과:{profile.data.nonDepartment},&nbsp;나이:{profile.data.nonAge},&nbsp;학번:{profile.data.nonStudentId}</MAHD.InfoP>
                <MAHD.InfoP>이상형 : {profile.data.preference}</MAHD.InfoP>
            </SectionDiv>
            <BtnDiv>
              <AcceptBtn onClick={onClickAccept}>회원가입 수락</AcceptBtn>
              <OtherBtn onClick={onClickRefuse}>회원가입 거절</OtherBtn>
              <OtherBtn onClick={onClickBack}>뒤로가기</OtherBtn>
            </BtnDiv>
        </T.TotalDiv> : <p>로딩중..</p>}
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