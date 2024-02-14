// 관리자페이지 홈

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import Footer from '../footer/index'
import Title from '../title/index'

export default function ManagerPage() {

  // 리덕스로 아이디 들고 와야 함
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  const fetchData = async () => {
    const userId = 20; // 현재 user Id 임의로 설정
    // console.log(id);
    try {
        const response = await axios.get(`http://13.209.145.28:8080/api/v1/myPage/getImgName/${userId}`, {userId});
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
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.ProfileBasicImg src={userData? userData.imgUrl : ProfileBasic} alt ="ProfileBasic"/>
        <T.TitleH3>{userData? userData.nickname +  ' 님, 안녕하세요.' : ''}</T.TitleH3>
        <T.MoveToDiv>
          <T.MoveToPageLink to="/ManagerPage/QnA">Q&A 모아보기</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/Notices">공지사항</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/Review">솔직후기</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/ReportReceiptHistory">신고 접수 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/MatchingApplicationHistoryWoman">매칭 신청 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/MatchingCompletionHistory">매칭 완료 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/ViewMembershipList">회원 목록 보기</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/ApplicationForMembership">회원 가입 신청 내역</T.MoveToPageLink>
        </T.MoveToDiv>
      </T.TotalDiv>
      <T.FooterContainer>
        <Footer/>
      </T.FooterContainer>
    </>
  )
}