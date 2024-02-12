// 관리자 페이지 - 회원 가입 신청 내역 보기

import React, { useState, useEffect } from 'react'

import Footer from '../../components/footer/index'
import Title from '../../components/title/index'

import * as T from '../../components/MyPage_Component/MyPage'
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'
import * as MAH from '../../components/ManagerPage_Component/MatchingApplicationHistoryWoman'
 
import JoinPersonBlock from '../../components/PersonBlock/JoinPersonBlock'


export default function ApplicationForMembership() {

  // 성별 버튼
  const [isWomanSelected, setWomanSelected] = useState(false);
  const [isManSelected, setManSelected] = useState(false); 

  // 컴포넌트가 마운트되었을 때
  // useEffect(() => {
    
  // }, []);

  const onClickWoman = () => {
    setWomanSelected((prev) => !prev);

    setManSelected(false);
  };

  const onClickMan = () => {
    setManSelected((prev) => !prev);

    setWomanSelected(false);
  };

  const person = [
    { id: 1, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 2, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 3, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 4, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 5, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 6, name: '김여자', gender: 'f', date: '2024-01-30T18:14:14.721908' },
    { id: 7, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
    { id: 8, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
    { id: 9, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
    { id: 10, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
    { id: 11, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
    { id: 12, name: '김남자', gender: 'm', date: '2024-01-30T18:14:14.721908' },
  ];

  return (
    <>
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>회원 가입 신청 내역 모아보기</MAHD.HeadTitleH3>
        <MAH.FlexDiv>
          <MAH.GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</MAH.GenderBtn>
          <MAH.GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</MAH.GenderBtn>
        </MAH.FlexDiv>
        <MAH.PeopleDiv>
          <JoinPersonBlock info={person} gender={isWomanSelected ? 'f' : isManSelected ? 'm' : 'all' } />
        </MAH.PeopleDiv>
          <Footer/>
      </T.TotalDiv>
    </>
  )
}