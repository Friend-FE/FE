// 회원 목록 보기

import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import axios from 'axios';

// import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'
import * as T from '../MyPage_Component/MyPage'
import * as M from './MatchingApplicationHistoryWoman'
import * as MAHD from './MatchingAHDetailWoman'
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

  // API 연결
  const [apiData, setApiData] = useState('');

  // 현재 날짜와 전송용
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sendYear, setSendYear] = useState('');
  const [sendMonth, setSendMonth] = useState('');
  const [sendDay, setSendDay] = useState('');

  // 성별 버튼
  const [isWomanSelected, setWomanSelected] = useState(true);
  const [isManSelected, setManSelected] = useState(false); 

  // 컴포넌트가 마운트되었을 때와 날짜가 변경될 때마다 실행
  useEffect(() => {
    // 현재 날짜
    // setCurrentDate(new Date());
    updateDateInfo(currentDate);
    APIupdateDateInfo(currentDate);
  }, [currentDate, isWomanSelected]);

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
    setWomanSelected(true);

    setManSelected(false);
  };

  const onClickMan = () => {
    setManSelected(true);

    setWomanSelected(false);
  };

  // API 전송용 현재 날짜
  const APIupdateDateInfo = async (date) => {
    const formattedDate = formatDate(date, koreaTimeOptions);
    
    const [year, MonthAndDay] = formattedDate.split('년');
    const [month, Day] = MonthAndDay.split('월').map(part => part.trim());
    const [day] = Day.split('일').map(part => part.trim());

    const sendData = year + month + day;
    console.log('api 전송용', sendData);

    let gender = 0;
    if(isWomanSelected === true){
      gender = 0;
    } else if(isManSelected === true){
      gender = 1;
    }

    console.log(gender);

    try {
      const response = await axios.get(`https://umcfriend.kro.kr/api/v1/memberList?gender=${gender}&date=${sendData}`);
      console.log(response.data.data);
      setApiData(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

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
          <GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</GenderBtn>
          <GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</GenderBtn>
        </M.FlexDiv>
        <M.PeopleDiv>
          <MemberPersonBlock
            info={apiData}/>
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


export const GenderBtn = styled.button`
  width: 12vw; 
  height: 4vw;
  margin: 2vw 2vw 0 2vw;
  
  font-size: 1vw;
  /* @media screen and (max-width: 1070px) {
    font-size : 2vw;
  } */
  color: black;
  background-color: white;

  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  background-color: ${(props) => (props.isSelected ? '#23CAFF' : 'white')};
  
  border: none;
  border-radius: 2vw;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
  
  cursor: pointer;
`;