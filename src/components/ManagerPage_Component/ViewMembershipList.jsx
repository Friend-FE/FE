// 회원 목록 보기

import React, { useState, useEffect } from 'react'
import styled from "styled-components";

// import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'
import * as T from '../MyPage_Component/MyPage'
import * as M from './MatchingApplicationHistory'
import * as MAHD from './MatchingAHDetail'
import MemberPersonBlock from '../../components/PersonBlock/MemberPersonBlock'


import left from '../../images/Vector10.png'
import right from '../../images/Vector9.png'

export default function ViewMembershipList() {

  const koreaTimeOptions = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  // 현재 날짜와 전송용
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sendYear, setSendYear] = useState('');
  const [sendMonth, setSendMonth] = useState('');
  const [sendDay, setSendDay] = useState('');

  // 성별 버튼
  const [isWomanSelected, setWomanSelected] = useState(false);
  const [isManSelected, setManSelected] = useState(false); 

  // 컴포넌트가 마운트되었을 때와 날짜가 변경될 때마다 실행
  useEffect(() => {
    // 현재 날짜
    // setCurrentDate(new Date());
    updateDateInfo(currentDate);
  }, [currentDate]);

  // 대한민국 시간으로
  const formatDate = (date, options) => {
    const NewDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
  
    const [year, month, day] = NewDate.split('.');
  
    const formattedMonth = month.trim().padStart(2, '0');
    const formattedDay = day.trim().padStart(2, '0');

    return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
  };

  // 날짜 정보 업데이트 함수
  const updateDateInfo = (date) => {
    const formattedDate = formatDate(date, koreaTimeOptions);
    const [year, MonthAndDay] = formattedDate.split('년');
    setSendYear(year);
    const [month, Day] = MonthAndDay.split('월').map(part => part.trim());
    setSendMonth(month);
    const [day] = Day.split('일').map(part => part.trim());
    setSendDay(day);
  };


  const onClickLeft = () => {
    // 1일 전의 날짜 계산
    const newCurrentDate = new Date(currentDate);
    newCurrentDate.setDate(newCurrentDate.getDate() - 1);

    // 상태 업데이트
    setCurrentDate(newCurrentDate);
    // updateDateInfo(newCurrentDate);
  };

  const onClickRight = () => {
    // 1일 후의 날짜 계산
    const newCurrentDate = new Date(currentDate);
    newCurrentDate.setDate(newCurrentDate.getDate() + 1);

    // 상태 업데이트
    setCurrentDate(newCurrentDate);
    // updateDateInfo(newCurrentDate);
  };

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

  console.log('페이지에서 검사 :', sendYear, sendMonth, sendDay);

  return (
    <>
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>회원 목록 보기</MAHD.HeadTitleH3>
        <M.FlexDiv>
          <M.DateDiv>
            <M.DirectionImg onClick={onClickLeft} src={left} alt ="left"/>
            <M.P>{formatDate(currentDate, koreaTimeOptions)}</M.P>
            <M.DirectionImg onClick={onClickRight} src={right} alt ="right"/>
          </M.DateDiv>
          <M.GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</M.GenderBtn>
          <M.GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</M.GenderBtn>
        </M.FlexDiv>
        <M.PeopleDiv>
          <MemberPersonBlock
            info={person}
            gender={isWomanSelected ? 'f' : isManSelected ? 'm' : 'all' }
            year={sendYear}
            month={sendMonth}
            day={sendDay}/>
        </M.PeopleDiv>
      </T.TotalDiv>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
  position: relative;
  top: 15vw;
  width: 100%;

  @media (max-width: 768px) {
  top: 8vw;
  }
`;
