// 매칭 신청 내역 - 남자

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Footer from '../footer/index'
import Title from '../title/index'

import * as T from '../MyPage_Component/MyPage'
import * as MAHD from './MatchingAHDetailWoman'

import * as MAHW from './MatchingApplicationHistoryWoman'

import MatchingPersonBlock from '../PersonBlock/MatchingPersonBlock'

export default function MatchingApplicationHistoryMan() {

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
        <MAHD.HeadTitleH3>매칭 신청 내역 모아보기</MAHD.HeadTitleH3>
        <MAHW.FlexDiv>
          <MAHW.GenderBtn>여성</MAHW.GenderBtn>
          <MAHW.SelectGenderBtn>남성</MAHW.SelectGenderBtn>
        </MAHW.FlexDiv>
        <MAHW.PeopleDiv>
            <MatchingPersonBlock info={person} gender={'m'} />
        </MAHW.PeopleDiv>
      </T.TotalDiv>
      <MAHW.FooterContainer>
        <Footer></Footer>
      </MAHW.FooterContainer>
    </>
  )
}