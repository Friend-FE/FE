// 매칭 내역

import React from 'react'

import * as T from './MyPage'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

import MatchingHistoryBoard from '../Board/MatchingHistoryBoard'

export default function Matching_history() {

  // redux 사용해서 user 이름 가지고 와야 함.

  return (
    <>
      {/* <Header/> */}
      <Title title="마이페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.TitleH3>제니 님의 매칭 내역</T.TitleH3>
        <ContainerDiv>
          <MatchingHistoryBoard/>
        </ContainerDiv>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </T.TotalDiv>
    </>
    
  )
}


const ContainerDiv = styled.div`

  width: 45vw;
  margin: 4vw 0;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);

`;

const FooterContainer = styled.div`
  position: relative;
  bottom: -20px;
  width: 100%;

  @media (max-width: 768px) {
    top: 7vw;
  }
`;