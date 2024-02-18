// 매칭 신청 내역 - 남자

import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import axios from 'axios';

import Footer from '../footer/index'
import Title from '../title/index'

import * as T from '../MyPage_Component/MyPage'
import * as MAHD from './MatchingAHDetailWoman'

import * as MAHW from './MatchingApplicationHistoryWoman'

import MatchingPersonBlock from '../PersonBlock/MatchingPersonBlock'

export default function MatchingApplicationHistoryMan() {

  const [person, setPerson] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://umcfriend.kro.kr/api/v1/match/list');
      console.log(response.data.data);
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
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <MAHD.HeadTitleH3>매칭 신청 내역 모아보기</MAHD.HeadTitleH3>
        <MAHW.FlexDiv>
          <MAHW.GenderBtn>여성</MAHW.GenderBtn>
          <MAHW.SelectGenderBtn>남성</MAHW.SelectGenderBtn>
        </MAHW.FlexDiv>
        <MAHW.PeopleDiv>
            <MatchingPersonBlock info={person} gender={'MALE'} />
        </MAHW.PeopleDiv>
      </T.TotalDiv>
      <MAHW.FooterContainer>
        <Footer></Footer>
      </MAHW.FooterContainer>
    </>
  )
}