// 마이 페이지

import React from 'react'
import { Link } from 'react-router-dom'
import ProfileBasic from '../../images/ProfileBasic.png'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

export default function MyPage() {
  return (
    <>
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

export const TotalHr = styled.hr`
  position: relative;
  top: 10vw;
  margin-left: 10vw;


  width : 80%;

  color: #B8B8B8;
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 13vw;
`;

export const ProfileBasicImg = styled.img`
  width: 16.7vw;
  height: 16.7vw;
`;

export const TitleH3 = styled.h3`
  font-size: 2vw;
  font-weight: 500;

  margin-top: 2vw;
`;

export const MoveToDiv = styled.div`
  width: 41vw;
  height: 48vw;

  position: relative;
  top: 2vw;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);
`;

export const MoveToPageLink = styled(Link)`
  font-size: 1.3vw;
  text-decoration: none;
  color: #000;

  display: block;
  margin: 4vw 24.5vw 1.3vw 2.6vw;

  color: black;
  &:hover {
    color: #23CAFF;
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  top: 40vh;
  width: 100%;

  @media (max-width: 768px) {
    top: 15vw;
  }
`;


