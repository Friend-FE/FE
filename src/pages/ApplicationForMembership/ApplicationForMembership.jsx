// 관리자 페이지 - 회원 가입 신청 내역 보기

import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Footer from '../../components/footer/index'
import Title from '../../components/title/index'
import styled from 'styled-components';

import * as T from '../../components/MyPage_Component/MyPage'
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'
import * as MAH from '../../components/ManagerPage_Component/MatchingApplicationHistoryWoman'
 
import JoinPersonBlock from '../../components/PersonBlock/JoinPersonBlock'


export default function ApplicationForMembership() {

  // 성별 버튼
  const [isWomanSelected, setWomanSelected] = useState(false);
  const [isManSelected, setManSelected] = useState(false); 
  const [userList, setUserList] = useState();

  // 컴포넌트가 마운트되었을 때
  useEffect(() => {
    axios
      .get("https://umcfriend.kro.kr/api/v1/activateList")
      .then(function (response) {
        // 요청이 성공했을 때의 처리
        console.log("응답 데이터:", response.data);
        setUserList(response.data);
      })
      .catch(function (error) {
        // 요청이 실패했을 때의 처리
        console.error("오류 발생:", error);
      });
  }, []);
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
      <Title title="관리자 페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>회원 가입 신청 내역 모아보기</MAHD.HeadTitleH3>
        <MAH.FlexDiv>
          <GenderBtn onClick={onClickWoman} isSelected={isWomanSelected}>여성</GenderBtn>
          <GenderBtn onClick={onClickMan} isSelected={isManSelected}>남성</GenderBtn>
        </MAH.FlexDiv>
        <MAH.PeopleDiv>
          {userList ? <JoinPersonBlock info={userList.data} gender={isWomanSelected ? 'FEMALE' : isManSelected ? 'MALE' : 'all' } /> : <></>}
        </MAH.PeopleDiv>
          <Footer/>
      </T.TotalDiv>
    </>
  )
}

const GenderBtn = styled.button`
  width: 12vw; 
  height: 4vw;
  margin: 2vw 2vw 0 2vw;
  
  font-size: 1vw;
  color: black;
  background-color: white;
  
  border: none;
  border-radius: 2vw;
  box-shadow: 1vw 0.8vw 0.5vw rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.isSelected? '#23CAFF':"white"};
  color: ${(props) => props.isSelected? 'white':"black"};
`;