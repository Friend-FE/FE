// 매칭 신청 내역

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Footer from '../footer/index'
import Title from '../title/index'

import * as T from '../MyPage_Component/MyPage'
import * as MAHD from './MatchingAHDetail'

import MatchingPersonBlock from '../PersonBlock/MatchingPersonBlock'

export default function MatchingApplicationHistory() {

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
        <FlexDiv>
          <GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</GenderBtn>
          <GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</GenderBtn>
        </FlexDiv>
        <PeopleDiv>
            <MatchingPersonBlock info={person} gender={isWomanSelected ? 'f' : isManSelected ? 'm' : 'all' } />
          </PeopleDiv>
      </T.TotalDiv>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  )
}

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40vw; 
  height: 4vw;
  margin: 2vw 8vw 0 0;

  /* font-size: 20vw; */

  color: black;
  text-align: center;

  border-radius: 6vw;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
`;

export const DirectionImg = styled.img`
  width: 1.33vw;
  height: 2vw;
  margin: 0 3vw;

  /* @media screen and (max-width: 1070px) {
    width: 2.5vw;
    height: 3.6vw;
    margin: 0 2.5vw;
  } */

  cursor: pointer;
`;

export const P = styled.p`
  font-size: 1vw;
  white-space: pre-wrap;

  /* @media screen and (max-width: 1070px) {
    font-size : 2vw;
  } */
`;

export const PeopleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin: 1vw 0;
`;

export const PersonDiv = styled.div`
  text-align: center;

  width: 13vw;
  height: 13.5vw;

  background-color: #DAF6FF;
  border-radius: 1.2vw;
  box-shadow: 0.6vw 0.9vw 0.3vw rgba(0, 0, 0, 0.2);
 
  margin: 4vw 1vw;

  /* @media screen and (max-width: 1070px) {
    margin: 3vw 1vw;

    width: 24.6vw;
    height: 25.5vw;

    box-shadow: 1.25vw 1.87vw 0.62vw rgba(0, 0, 0, 0.2);
  } */

`;

export const NameH5 = styled.h5`
  font-size: 2vw;
  font-weight: bold;

  /* @media screen and (max-width: 1070px) {
    font-size: 4vw;
  } */
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

const FooterContainer = styled.div`
  position: absolute;
  top: 88vw;
  width: 100%;

  @media (max-width: 768px) {
  top: 96vw;
  }
`;
