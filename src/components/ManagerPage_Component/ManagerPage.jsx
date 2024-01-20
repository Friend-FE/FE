// 관리자 페이지

import React from 'react'
// import { Link } from 'react-router-dom'

import ProfileBasic from '../../images/ProfileBasic.png'

import * as T from '../MyPage_Component/MyPage'

import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'

export default function ManagerPage() {
  return (
    <>
      <Header/>
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
        <T.TitleH3>관리자 솔로 님, 안녕하세요.</T.TitleH3>
        <T.MoveToDiv>
          <T.MoveToPageLink to="/ManagerPage/ModifyingManagerInfo">관리자 정보 수정</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/QnA">Q&A 모아보기</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/WritingNotices">공지사항 쓰러가기</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/ReportReceiptHistory">신고 접수 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/MatchingApplicationHistory">매칭 신청 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/MatchingCompletionHistory">매칭 완료 내역</T.MoveToPageLink>
          <T.MoveToPageLink to="/ManagerPage/ViewMembershipList">회원 목록 보기</T.MoveToPageLink>
        </T.MoveToDiv>
      </T.TotalDiv>
      <T.FooterContainer>
        <Footer/>
      </T.FooterContainer>
    </>
  )
}