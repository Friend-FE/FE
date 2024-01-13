import React from 'react'
import * as T from '../MyPage'
import styled from 'styled-components'

export default function Matching_history() {

  const ContainerDiv = styled.div`

    width: 700px;
    margin: 60px 0;

    background-color: #DAF6FF;
    border-radius: 20px;
    box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.2);

  `;

  const MatchingHistoryP = styled.p`
    font-size: 20px;
    margin: 80px 40px;
  `;

  return (
    <T.TotalDiv>
      <T.GlobalStyle/>
      <T.TitleH3>제니 님의 매칭 내역</T.TitleH3>
      <ContainerDiv>
        <MatchingHistoryP>00년생 / 부경대최고 / 경영대학 / 2024.01.03</MatchingHistoryP>
        <MatchingHistoryP>02년생 / 부경대미남 / 인문사회과학대학 / 2024.01.02</MatchingHistoryP>
      </ContainerDiv>
      </T.TotalDiv>
  )
}
