import React, { useEffect, useState } from 'react'
import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from './MyPage'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'
import axios from 'axios';
import { useSelector } from 'react-redux'

export default function Profile_card() {
  const [profileData, setProfileData] = useState({});
  const email = useSelector(state=>state.email.email);

  useEffect(()=>{
    const userEmail = "match1@gmail.com"; //임시 이메일
    const apiEmail = email? email : userEmail;
    axios.get(`http://13.209.145.28:8080/api/v1/myPage/getProfile/${apiEmail}`)
    .then(function (response) {
      // 성공적으로 응답 받았을 때의 처리
      setProfileData(response.data);
    })
    .catch(function (error) {
      // 오류 발생 시의 처리
      console.error("오류 발생:", error);
    });

  },[])

    return (
    <>
      {/* <Header/> */}
      <Title title="마이페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.TitleH3>{profileData.data ? `${profileData.data.nickname} 님의 프로필 카드` : '로딩 중...'}</T.TitleH3>
        <SectionContainer>
          <SectionDiv>
            <ProfileBasicImg src={profileData.data ? profileData.data.imgUrl : ProfileBasic} alt="ProfileBasic" />
            <NameH4>{profileData.data ? profileData.data.nickname : '로딩 중...'}</NameH4>
            <InfoP>년생: {profileData.data ? profileData.data.birthday : '로딩 중...'}</InfoP>
            <InfoP>키: {profileData.data ? profileData.data.height : '로딩 중...'}</InfoP>
            <InfoP>지역: {profileData.data ? profileData.data.region : '로딩 중...'}</InfoP>
          </SectionDiv> 
          <SectionDiv>
            <InfoP>장거리 가능 여부: {profileData.data ? (profileData.data.distance === "SHORT"? "불가능" :"가능"):'로딩 중...'}</InfoP>
            <InfoP>흡연 여부: {profileData.data ? (profileData.data.smoking === "SMOKER" ? "흡연" : "비흡연") : '로딩 중...'}</InfoP>
            <InfoP>음주 여부: {profileData.data ? (profileData.data.drinking === "DRINKER" ? "음주" : "비음주") : '로딩 중...'}</InfoP>
            <InfoP>단과대: {profileData.data ? profileData.data.department : '로딩 중...'}</InfoP>
            <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
            <SelfIntroductionDiv>
              <SelfIntroductionP> {profileData.data ? profileData.data.introduction : '로딩 중...'}</SelfIntroductionP>
            </SelfIntroductionDiv>
          </SectionDiv>
        </SectionContainer>
      </T.TotalDiv>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
    
  )
}


export const NameH4 = styled.h4`
    font-size: 2.4vw;
    font-weight: 600;

    margin: 1.3vw 0;
  `;

export const SectionDiv = styled.div`
  text-align: center;
  /* min-height: 100vh; */

  width: 41vw;
  height: 58.5vw;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);

  margin: 0 2vw;
`;


export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5.3vw 0;
`;

export const ProfileBasicImg = styled.img`
  margin: 2vw 7.33vw;

  width: 27vw;
  height: 27vw;
`;

export const InfoP = styled.p`
  font-size: 1.8vw;
  margin: 4vw 7.2vw;
  text-align: left;
`;

export const SelfIntroductionTitleP = styled.p`
  font-size: 1.8vw;

  margin: 6.5vw 0 0 0;
`;

export const SelfIntroductionDiv = styled.div`
  /* background-color: white; */

  padding: 1.3vw 4.5vw;
  margin: 2.6vw;
  text-align: left;
`;

export const SelfIntroductionP = styled.p`
  font-size: 1.33vw;
`;

export const FooterContainer = styled.div`
  position: relative;
  bottom: -15vw;
  width: 100%;

  @media (max-width: 768px) {
    top: 5vw;
  }
`;