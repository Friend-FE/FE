// 매칭 신청 내역 - 여자

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import Footer from '../footer/index'
import Title from '../title/index'

import * as T from '../MyPage_Component/MyPage'
import * as MAHD from './MatchingAHDetailWoman'

import MatchingPersonBlock from '../PersonBlock/MatchingPersonBlock'

export default function MatchingApplicationHistory() {

  const [person, setPerson] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://13.209.145.28:8080/api/v1/match/list');
      // console.log(response.data.data);
      setPerson(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title title="관리자 페이지"/>
      <TotalHr></TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>매칭 신청 내역 모아보기</MAHD.HeadTitleH3>
        <FlexDiv>
          <SelectGenderBtn>여성</SelectGenderBtn>
          <GenderBtn>남성</GenderBtn>
        </FlexDiv>
        <PeopleDiv>
            <MatchingPersonBlock info={person} gender={'FEMALE'} />
          </PeopleDiv>
      </T.TotalDiv>
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  )
}

export const TotalHr = styled.hr`
  position: relative;
  top: 8vw;
  width : 80%;
  margin-left: 10vw;
`;

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

  margin: 3vw 0 3vw 0;

  /* @media screen and (max-width: 1070px) {
    font-size: 4vw;
  } */
`;

export const SelectGenderBtn = styled.button`
  width: 12vw; 
  height: 4vw;
  margin: 2vw 2vw 0 2vw;
  
  font-size: 1vw;
  color: white;
  background-color: #23CAFF;
  
  border: none;
  border-radius: 2vw;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
`;

export const GenderBtn = styled.button`
  width: 12vw; 
  height: 4vw;
  margin: 2vw 2vw 0 2vw;
  
  font-size: 1vw;
  color: black;
  background-color: white;
  
  border: none;
  border-radius: 2vw;
  box-shadow: 1vw 0.7vw 0.5vw rgba(0, 0, 0, 0.2);
`;

export const FooterContainer = styled.div`
  position: relative;
  top: 10vw;
  width: 100%;

  @media (max-width: 768px) {
    top: 38vw;
  }
`;
