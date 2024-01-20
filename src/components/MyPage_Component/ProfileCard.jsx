import React from 'react'
import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from './MyPage'
import styled from 'styled-components'
import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'

export const NameH4 = styled.h4`
    font-size: 36px;
    font-weight: 600;

    margin: 20px 0;
  `;

export const SectionDiv = styled.div`
  text-align: center;
  /* min-height: 100vh; */

  width: 630px;
  height: 897px;

  background-color: #DAF6FF;
  border-radius: 20px;
  box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.2);

  margin: 0 25px;

`;


export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
`;

export const ProfileBasicImg = styled.img`
  margin: 30px 110px;

  width: 410px;
  height: 434px;
`;

export const InfoP = styled.p`
  font-size: 32px;
  margin: 60px 110px;
  text-align: left;
`;

export const SelfIntroductionTitleP = styled.p`
  font-size: 32px;

  margin: 100px 0 0 0;
`;

export const SelfIntroductionDiv = styled.div`
  background-color: white;

  padding: 20px 70px;
  margin: 40px;
  text-align: left;
`;

export const SelfIntroductionP = styled.p`
  font-size: 20px;
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: -1200px;
  width: 100%;
`;

export default function Profile_card() {
  return (
    <>
      <Header/>
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
