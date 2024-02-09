// 관리자 페이지 - 매칭 신청 내역 보기 - 여자

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import * as P from '../MyPage_Component/ProfileCard'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

import * as AFMD from '../../pages/ApplicationForMembership/ApplicationForMembershipDetail'
import CheckImageBlue from '../../images/CheckImageBlue.png'
import * as MAHD from './MatchingAHDetailWoman'

export default function MatchingAHDetailMan() {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const onClickAccept = () => {
        setShowModal(true);
    };

    const onClickRealAccept = () => {
        navigate('/ManagerPage/MatchingApplicationHistoryWoman');
    };

      const onClickRefuse = () => {
        navigate(-1);
    };

    return (
        <>
            <Title title="관리자 페이지"/>
            <T.TotalHr></T.TotalHr>
            <T.TotalDiv>
                <MAHD.HeadTitleH3>매칭 신청 내역 모아보기</MAHD.HeadTitleH3>
                <T.TitleH3>제니 님의 프로필 카드</T.TitleH3>
                <P.SectionContainer>
                    <P.SectionDiv>
                        <P.ProfileBasicImg src={ProfileBasic} alt ="ProfileBasic"/>
                        <P.NameH4>제니</P.NameH4>
                        <MAHD.InfoP>년생 : 00년생</MAHD.InfoP>
                        <MAHD.InfoP>키 : 163cm</MAHD.InfoP>
                        <MAHD.InfoP>지역 : 부산광역시 남구</MAHD.InfoP>
                        <MAHD.InfoP>연락처 : 010-1234-5678</MAHD.InfoP>
                    </P.SectionDiv>
                    <P.SectionDiv>
                        <P.InfoP>장거리 가능 여부 : 불가능</P.InfoP>
                        <P.InfoP>흡연 여부 : 비흡연</P.InfoP>
                        <P.InfoP>음주 여부 : 음주</P.InfoP>
                        <P.InfoP>단과대 : 경영대학</P.InfoP>
                        <MAHD.SelfIntroductionTitleP>자기 소개</MAHD.SelfIntroductionTitleP>
                        <MAHD.SelfIntroductionDiv>
                            <MAHD.SelfIntroductionP> 처음에는 많이 뚝딱거릴 수도 있지만 친해지면 엄청 애교도 많고 활발해요! 좋은 인연 만들어 가고 싶어요! </MAHD.SelfIntroductionP>       
                        </MAHD.SelfIntroductionDiv>
                        <MAHD.SelfIntroductionTitleP>내 이상형</MAHD.SelfIntroductionTitleP>
                        <MAHD.SelfIntroductionDiv>
                            <MAHD.SelfIntroductionP> 키 170cm 이상의 마르지 않은 사람을 원해요. 곧 저처럼 졸업하는 사람이었으면 좋겠어요. 배울 점이 많은 사람이면 좋겠어요. 흡연자, 장거리가 아니었으면 좋겠어요.</MAHD.SelfIntroductionP>       
                        </MAHD.SelfIntroductionDiv>
                    </P.SectionDiv>
                </P.SectionContainer>
                <MAHD.SectionDiv>
                    <MAHD.InfoP>매칭 신청 날짜 : 2024/01/05 08:00</MAHD.InfoP>
                    <MAHD.InfoP>비매너 경고 회수 : 0회</MAHD.InfoP>
                    <MAHD.InfoP>매칭 신청 회수 : 3회</MAHD.InfoP>
                    <MAHD.InfoP>매칭 완료 회수 : 1회</MAHD.InfoP>
                </MAHD.SectionDiv>
                <MAHD.BtnDiv>
                    <AFMD.AcceptBtn onClick={onClickAccept}>매칭하기</AFMD.AcceptBtn>
                </MAHD.BtnDiv>
            </T.TotalDiv>
            <MAHD.FooterContainer>
                <Footer/>
            </MAHD.FooterContainer>

            <MAHD.ModalContainer showModal={showModal}>
                <MAHD.CheckImage src={CheckImageBlue} alt="Check Image" />
                <MAHD.ModalText>'제니 님'과 '으이 님'을 매칭하겠습니까?</MAHD.ModalText>
                <MAHD.ModalBtnDiv>
                    <AFMD.OtherBtn onClick={onClickRealAccept}>매칭하기</AFMD.OtherBtn>
                    <AFMD.AcceptBtn onClick={onClickRefuse}>취소하기</AFMD.AcceptBtn>
                </MAHD.ModalBtnDiv>
            </MAHD.ModalContainer>
        </>
    )
}