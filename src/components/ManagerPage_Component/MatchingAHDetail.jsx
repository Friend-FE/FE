// 관리자 페이지 - 매칭 신청 내역 확인하기 2

import React from 'react'
import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import * as P from '../MyPage_Component/ProfileCard'
import styled from 'styled-components'
// import Header from '../header/index'
// import Footer from '../footer/index'
import Title from '../title/index'


export default function MatchingAHDetail() {
  return (
    <>
        {/* <Header/> */}
        <Title title="마이페이지"/>
        <T.TotalHr></T.TotalHr>
        <T.TotalDiv>
            <HeadTitleH3>매칭 신청 내역 모아보기</HeadTitleH3>
            <T.TitleH3>제니 님의 프로필 카드</T.TitleH3>
            <P.SectionContainer>
                <P.SectionDiv>
                    <P.ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
                    <P.NameH4>제니</P.NameH4>
                    <P.InfoP>년생 : 00년생</P.InfoP>
                    <P.InfoP>키 : 163cm</P.InfoP>
                    <P.InfoP>지역 : 부산광역시 남구</P.InfoP>
                </P.SectionDiv>
                <P.SectionDiv>
                    <P.InfoP>장거리 가능 여부 : 불가능</P.InfoP>
                    <P.InfoP>흡연 여부 : 비흡연</P.InfoP>
                    <P.InfoP>음주 여부 : 음주</P.InfoP>
                    <P.InfoP>단과대 : 경영대학</P.InfoP>
                    <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
                    <SelfIntroductionDiv>
                        <SelfIntroductionP> 처음에는 많이 뚝딱거릴 수도 있지만 친해지면 엄청 애교도 많고 활발해요! 좋은 인연 만들어 가고 싶어요! </SelfIntroductionP>       
                    </SelfIntroductionDiv>
                    <SelfIntroductionTitleP>내 이상형</SelfIntroductionTitleP>
                    <SelfIntroductionDiv>
                        <SelfIntroductionP> 키 170cm 이상의 마르지 않은 사람을 원해요. 곧 저처럼 졸업하는 사람이었으면 좋겠어요. 배울 점이 많은 사람이면 좋겠어요. 흡연자, 장거리가 아니었으면 좋겠어요.</SelfIntroductionP>       
                    </SelfIntroductionDiv>
                </P.SectionDiv>
            </P.SectionContainer>
            <SectionDiv>
                <InfoP>매칭 신청 날짜 : 2024/01/05 08:00</InfoP>
                <InfoP>비매너 경고 회수 : 0회</InfoP>
                <InfoP>매칭 신청 회수 : 3회</InfoP>
                <InfoP>매칭 완료 회수 : 1회</InfoP>
            </SectionDiv>
        </T.TotalDiv>
        {/* <FooterContainer>
            <Footer/>
        </FooterContainer> */}
    </>
  )
}

export const HeadTitleH3 = styled.h3`
    color: #23CAFF;
    font-size: 3vw;
    /* @media screen and (max-width: 1070px) {
        font-size : 5vw;
    } */
    font-weight: 900;

    position: relative;
    top: -1vw;
    margin: -0.6vw;
`;

const SelfIntroductionTitleP = styled.p`
    font-size: 2.1vw;

    margin: 0;

    position: relative;
    top: -1.5vw;
`;

const SelfIntroductionDiv = styled.div`
    background-color: white;

    padding: 0.66vw 4vw;
    margin: 1vw 3vw;

    position: relative;
    top: -1.33vw;

    text-align: left;
`;

const SelfIntroductionP = styled.p`
    font-size: 1.33vw;
`;

const SectionDiv = styled.div`
  text-align: left;

  width: 41vw;
  height: 24vw;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);

  margin: 0 2vw;
`;

const InfoP = styled.p`
    font-size: 2.1vw;

    margin: 2.66vw 0 1.33vw 6vw;
    text-align: left;
`;

// const FooterContainer = styled.div`
//     position: absolute;
//     bottom: -1600px;
//     width: 100%;
// `;