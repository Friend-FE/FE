import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Header from '../header/index'
import Footer from '../footer/index'
import Title from '../title/index'
import * as T from '../MyPage_Component/MyPage'
import * as M from './MatchingAHDetail'

import left from '../../images/Vector10.png'
import right from '../../images/Vector9.png'

export default function MatchingApplicationHistory() {

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

  // 성별 버튼
  const [isWomanSelected, setWomanSelected] = useState(false);
  const [isManSelected, setManSelected] = useState(false); 

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

  const onClickWoman = () => {
    setWomanSelected((prev) => !prev);

    setManSelected(false);
  };

  const onClickMan = () => {
    setManSelected((prev) => !prev);

    setWomanSelected(false);
  };

  return (
    <>
      <Header/>
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <M.HeadTitleH3>매칭 신청 내역 모아보기</M.HeadTitleH3>
        <FlexDiv>
          <DateDiv>
            <DirectionImg onClick={onClickLeft} src={left} alt ="left"/>
            <P>{formatDate(sixDaysAgo, koreaTimeOptions)} ~ {formatDate(currentDate, koreaTimeOptions)}</P>
            <DirectionImg onClick={onClickRight} src={right} alt ="right"/>
          </DateDiv>
          <GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</GenderBtn>
          <GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</GenderBtn>
        </FlexDiv>
        <PeopleDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
              <PersonDiv>
                <NameH5>가나 님</NameH5>
                <P>2024/01/05 07:00</P>
              </PersonDiv>
          </PeopleDiv>
          <Footer/>
      </T.TotalDiv>
    </>
  )
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40vw; 
  height: 8vh;
  margin: 2vw 8vw 0 0;

  font-size: 16px;
  @media screen and (max-width: 1070px) {
    font-size : 2vw;
  }

  color: black;
  text-align: center;

  border-radius: 30px;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
`;

const DirectionImg = styled.img`
  width: 20px;
  height: 29px;
  margin: 0 3vw; /* 가로 여백 추가 */

  @media screen and (max-width: 1070px) {
    width: 2.5vw;
    height: 3.6vw;
    margin: 0 2.5vw;
  }

  cursor: pointer;
`;

const P = styled.p`
  font-size: 16px;
  @media screen and (max-width: 1070px) {
    font-size : 2vw;
    /* margin: 3.5vw 0; */
  }
`;

const PeopleDiv = styled.div`
  /* background-color: tomato; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const PersonDiv = styled.div`
  text-align: center;

  width: 13vw;
  height: 204px;

  background-color: #DAF6FF;
  border-radius: 1.2vw;
  box-shadow: 0.6vw 0.9vw 0.3vw rgba(0, 0, 0, 0.2);
 
  margin: 4vw 1vw;

  @media screen and (max-width: 1070px) {
    margin: 3vw 1vw;

    width: 24.6vw;
    height: 25.5vw;

    box-shadow: 1.25vw 1.87vw 0.62vw rgba(0, 0, 0, 0.2);
  }

`;

const NameH5 = styled.h5`
  font-size: 32px;
  font-weight: bold;

  @media screen and (max-width: 1070px) {
    font-size: 4vw;
  }
`;

// const GenderBtn = styled.button`
//   width: 12vw; 
//   height: 8vh; 
//   margin: 2vw 2vw 0 2vw;
  
//   font-size: 16px;
//   @media screen and (max-width: 1070px) {
//     font-size : 2vw;
//   }
//   color: white;
  
//   border: none;
//   border-radius: 30px;
//   background-color: #23CAFF;
//   box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
  
//   cursor: pointer;
// `;

const GenderBtn = styled.button`
  width: 12vw; 
  height: 8vh; 
  margin: 2vw 2vw 0 2vw;
  
  font-size: 16px;
  @media screen and (max-width: 1070px) {
    font-size : 2vw;
  }
  color: black;
  background-color: white;

  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  background-color: ${(props) => (props.isSelected ? '#23CAFF' : 'white')};
  
  border: none;
  border-radius: 30px;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
  
  cursor: pointer;
`;