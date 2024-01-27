import React from 'react'
import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from './MyPage'
import styled from 'styled-components'
// import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'

export default function Profile_card() {
  return (
    <>
      {/* <Header/> */}
      <Title title="마이페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.TitleH3>제니 님의 프로필 카드</T.TitleH3>
        <SectionContainer>
            <SectionDiv>
              <ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
              <NameH4>제니</NameH4>
              <InfoP>년생 : 00년생</InfoP>
              <InfoP>키 : 163cm</InfoP>
              <InfoP>지역 : 부산광역시 남구</InfoP>
            </SectionDiv>
            <SectionDiv>
              <InfoP>장거리 가능 여부 : 불가능</InfoP>
              <InfoP>흡연 여부 : 비흡연</InfoP>
              <InfoP>음주 여부 : 음주</InfoP>
              <InfoP>단과대 : 경영대학</InfoP>
                <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
                <SelfIntroductionDiv>
                  <SelfIntroductionP> 처음에는 많이 뚝딱거릴 수도 있지만 친해지면 엄청 애교도 많고 활발해요! 좋은 인연 만들어 가고 싶어요!</SelfIntroductionP>       
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
  font-size: 2.1vw;
  margin: 4vw 7.2vw;
  text-align: left;
`;

export const SelfIntroductionTitleP = styled.p`
  font-size: 2.1vw;

  margin: 6.5vw 0 0 0;
`;

export const SelfIntroductionDiv = styled.div`
  background-color: white;

  padding: 1.3vw 4.5vw;
  margin: 2.6vw;
  text-align: left;
`;

export const SelfIntroductionP = styled.p`
  font-size: 1.33vw;
`;

export const FooterContainer = styled.div`
  position: relative;
  bottom: -18vw;
  width: 100%;

  @media (max-width: 768px) {
    top: -12vw;
  }
`;