import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBasic from '../images/ProfileBasic.png'
import styled, { createGlobalStyle } from 'styled-components'

// 꾸밈 //

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css'); */
  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
  }
  body {
    font-family: 'SUIT-Regular';
  }
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */

  position: relative;
  top: 420px;
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
  margin: 40px 368px 20px 40px;

  &:hover {
    color: #23CAFF;
  }
`;

// 꾸밈 //

export default function MyPage() {
  return (
    <TotalDiv>
      <GlobalStyle /> 
      {/* 하드 코딩 */}
      <ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
      <TitleH3>제니 님, 안녕하세요.</TitleH3>
      {/* 하드 코딩 */}
      <MoveToDiv>
        <MoveToPageLink to="/MyPage/ModifyingInfo">회원정보 수정</MoveToPageLink>
        <MoveToPageLink to="/MyPage/MatchingHistory">매칭 내역</MoveToPageLink>
        <MoveToPageLink to="/MyPage/ProfileCard">내 프로필 카드 확인하기</MoveToPageLink>
        <MoveToPageLink to="/MyPage/DeactivateAccount">계정 비활성화</MoveToPageLink>
        <MoveToPageLink to="/MyPage/MembershipWithdrawal">회원 탈퇴</MoveToPageLink>
      </MoveToDiv>
    </TotalDiv>
  )
}
