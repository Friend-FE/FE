import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBasic from '../../images/ProfileBasic.png'
import styled from 'styled-components'
import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'



export default function MyPage() {
  return (
    <>
      <Header/>
      <Title title="마이페이지"/>
      <TotalHr></TotalHr>
      <TotalDiv>
        <ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
        <TitleH3>제니 님, 안녕하세요.</TitleH3>
        <MoveToDiv>
          <MoveToPageLink to="/MyPage/ModifyingInfo">회원정보 수정</MoveToPageLink>
          <MoveToPageLink to="/MyPage/MatchingHistory">매칭 내역</MoveToPageLink>
          <MoveToPageLink to="/MyPage/ProfileCard">내 프로필 카드 확인하기</MoveToPageLink>
          <MoveToPageLink to="/MyPage/DeactivateAccount">계정 비활성화</MoveToPageLink>
          <MoveToPageLink to="/MyPage/MembershipWithdrawal">회원 탈퇴</MoveToPageLink>
          <MoveToPageLink to="/MyPage/NonMannerUsers">비매너 유저 신고하기</MoveToPageLink>
        </MoveToDiv>
      </TotalDiv>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  )
}

// 꾸밈 //

export const TotalHr = styled.hr`
  position: relative;
  top: 100px;

  width : 90%;

  color: #B8B8B8;
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */

  position: relative;
  top: 220px;
`;

export const ProfileBasicImg = styled.img`
  width: 184px;
  height: 183px;
`;

export const TitleH3 = styled.h3`
  font-size: 32px;
  font-weight: 500;
`;

export const MoveToDiv = styled.div`
  width: 630px;
  max-width: 100%;
  height: 734px;

  background-color: #DAF6FF;
  border-radius: 20px;
  box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const MoveToPageLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;

  display: block;
  margin: 60px 368px 20px 40px;

  color: black;
  &:hover {
    color: #23CAFF;
  }
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: -1100px;
  width: 100%;
`;

// 꾸밈 //

