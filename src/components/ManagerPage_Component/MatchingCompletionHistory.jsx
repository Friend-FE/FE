// 매칭 완료 내역

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import Footer from '../footer/index'
import Title from '../title/index'
import * as T from '../MyPage_Component/MyPage'
import * as M from './MatchingApplicationHistoryWoman'
import * as MAHD from './MatchingAHDetailWoman'
// import CoupleBlock from '../PersonBlock/CoupleBlock'

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

  // 컴포넌트가 마운트되었을 때와 날짜가 변경될 때마다 실행
  useEffect(() => {
    // 현재 날짜
    // setCurrentDate(new Date());
    updateDateInfo(currentDate);
    APIupdateDateInfo(currentDate);
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
  };

  const onClickRight = () => {
    // 1일 후의 날짜 계산
    const newCurrentDate = new Date(currentDate);
    newCurrentDate.setDate(newCurrentDate.getDate() + 1);

    // 상태 업데이트
    setCurrentDate(newCurrentDate);
  };

  // API 전송용 현재 날짜
  const APIupdateDateInfo = async (date) => {
    const formattedDate = formatDate(date, koreaTimeOptions);
    
    const [year, MonthAndDay] = formattedDate.split('년');
    const [month, Day] = MonthAndDay.split('월').map(part => part.trim());
    const [day] = Day.split('일').map(part => part.trim());

    const sendData = year + month + day;
    console.log('api 전송용', sendData);

    try {
      const response = await axios.get(`https://umcfriend.kro.kr/api/v1/manager/matchList/{date}?date=${sendData}`);
      console.log(response.data.data);
      setApiData(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      {/* <Header/> */}
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>매칭 완료 내역 모아보기</MAHD.HeadTitleH3>
          <DateDiv>
            <M.DirectionImg onClick={onClickLeft} src={left} alt ="left"/>
            <M.P>{formatDate(currentDate, koreaTimeOptions)}</M.P>
            <M.DirectionImg onClick={onClickRight} src={right} alt ="right"/>
          </DateDiv>
          {apiData.length !== 0 ? (
              <CoupleList>
                {apiData.map((item) => (
                  item ? (
                    <CoupleDiv key={item.id}>
                      <M.PersonDiv>
                        <NameH5>{item.manNickname} 님</NameH5>
                        <P>{item.manPhone}</P>
                        <M.P>{item.matchDate}</M.P>
                      </M.PersonDiv>
                      <M.PersonDiv>
                        <NameH5>{item.womanNickname} 님</NameH5>
                        <P>{item.womanPhone}</P>
                        <M.P>{item.matchDate}</M.P>
                      </M.PersonDiv>
                    </CoupleDiv>
                  ) : null
                ))}
              </CoupleList>
            ) : null}
      </T.TotalDiv>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  )
}

export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40vw;
  height: 4vw;
  margin: 3vw 0 2vw 0;
  
  color: black;
  text-align: center;

  border-radius: 2vw;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
`;

const FooterContainer = styled.div`
  position: relative;
  top: 15vw;
  width: 100%;

  @media (max-width: 768px) {
    top: 5vw;
  }
`;

const CoupleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CoupleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0vw 5vw;
`;

const NameH5 = styled.h5`
  font-size: 2vw;
  font-weight: bold;

  margin: 2.5vw 0 1vw 0;
`;

const P = styled.p`
  font-size: 1vw;
  white-space: pre-wrap;

  margin: 1vw 0 3vw 0;
`;