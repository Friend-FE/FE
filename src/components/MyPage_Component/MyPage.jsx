// 마이 페이지

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

import ProfileBasic from '../../images/ProfileBasic.png'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

export default function MyPage() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  const id = useSelector(state => state.login.id);

  const fetchData = async () => {
    const userId = 20; // 현재 user Id 임의로 설정

    const idOrUserId = id ? id : userId;

    // console.log(id);
    try {
        const response = await axios.get(`https://umcfriend.kro.kr/api/v1/myPage/getImgName/${idOrUserId}`, {idOrUserId});
        // console.log('성공', response.data.data);
        setUserData(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      navigate(-1);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);


  return (
    <>
      <Title title="마이페이지"/>
      <TotalHr></TotalHr>
      <TotalDiv>
        <ProfileBasicImg src={userData? userData.imgUrl : ProfileBasic} alt ="ProfileBasic"/>
        <TitleH3>{userData? userData.nickname +  ' 님, 안녕하세요.' : ''}</TitleH3>
        <MoveToDiv>
          <MoveToPageLink to="/MyPage/ModifyingInfo">회원정보 수정</MoveToPageLink>
          <MoveToPageLink to="/MyPage/MatchingHistory">매칭 내역</MoveToPageLink>
          <MoveToPageLink to="/MyPage/ProfileCard" >내 프로필 카드 확인하기</MoveToPageLink>
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


