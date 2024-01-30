// 매칭 완료 내역

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Footer from '../footer/index'
import Title from '../title/index'
import * as T from '../MyPage_Component/MyPage'
import * as M from './MatchingApplicationHistory'
import * as MAHD from './MatchingAHDetail'

import left from '../../images/Vector10.png'
import right from '../../images/Vector9.png'

export default function ViewMembershipList() {

  const koreaTimeOptions = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  // 현재 날짜
  const [currentDate, setCurrentDate] = useState(new Date());

  // 6일 후의 날짜
  const [sixDaysAgo, setSixDays] = useState(new Date());

  // 컴포넌트가 마운트되었을 때
  useEffect(() => {
    // 현재 날짜
    setCurrentDate(new Date());

    // 6일 후의 날짜
    const newSixDaysLater = new Date();
    newSixDaysLater.setDate(newSixDaysLater.getDate() - 6);
    setSixDays(newSixDaysLater);
  }, []);

  // 대한민국 시간으로
  const formatDate = (date, options) => {
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
  };

  const onClickLeft = () => {
    // 6일 전의 날짜 계산
    const newCurrentDate = new Date(currentDate);
    newCurrentDate.setDate(newCurrentDate.getDate() - 7);

    // 6일 전의 날짜로부터 6일 후의 날짜 계산
    const newSixDaysLater = new Date(newCurrentDate);
    newSixDaysLater.setDate(newSixDaysLater.getDate() - 6);

    // 상태 업데이트
    setCurrentDate(newCurrentDate);
    setSixDays(newSixDaysLater);
  };

  const onClickRight = () => {
    // 6일 후의 날짜 계산
    const newSixDaysLater = new Date(sixDaysAgo);
    newSixDaysLater.setDate(newSixDaysLater.getDate() + 7);

    // 6일 후의 날짜로부터 6일 전의 날짜 계산
    const newCurrentDate = new Date(newSixDaysLater);
    newCurrentDate.setDate(newCurrentDate.getDate() + 6);

    // 상태 업데이트
    setCurrentDate(newCurrentDate);
    setSixDays(newSixDaysLater);
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
            <M.P>{formatDate(sixDaysAgo, koreaTimeOptions)} ~ {formatDate(currentDate, koreaTimeOptions)}</M.P>
            <M.DirectionImg onClick={onClickRight} src={right} alt ="right"/>
          </DateDiv>
        <M.PeopleDiv>
          <CoupleDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
          </CoupleDiv>
          <CoupleDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
          </CoupleDiv>
          <CoupleDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
          </CoupleDiv>
          <CoupleDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
            <M.PersonDiv>
              <M.NameH5>가나 님</M.NameH5>
              <M.P>2024/01/05 07:00</M.P>
            </M.PersonDiv>
          </CoupleDiv>
          </M.PeopleDiv>
          <Footer/>
      </T.TotalDiv>
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

const CoupleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 1vw 8vw;
`;