// 관리자 페이지 - 회원 목록 보기 - 자세히

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import * as P from '../MyPage_Component/ProfileCard'
import * as AFMD from '../../pages/ApplicationForMembership/ApplicationForMembershipDetail'
import * as MAHDW from '../ManagerPage_Component/MatchingAHDetailWoman'
import Footer from '../footer/index'
import Title from '../title/index'

export default function ViewMembershipDetail() {

    const { id } = useParams();
    const [userId, setUserId] = useState(id);

    const [person, setPerson] = useState(id);

    const { state } = useLocation();
    const useLocationContent = state?.item;
    // console.log(useLocationContent);

    const navigate = useNavigate();

    const fetchData = async () => {
        const id = userId;
        // console.log(id);
        try {
            const response = await axios.get(`http://13.209.145.28:8080/api/v1/manager/profileDetail/${id}`, {id});
            console.log(response.data.data);
            setPerson(response.data.data);
        } catch (error) {
          console.error('오류 발생:', error);
          alert('오류가 발생했습니다. 다시 시도해주세요.');
          navigate(-1); 
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const editBirthYear = (props) => {
        const year = props.slice(0, 4);
        const yearDigits = year.slice(2);

        return yearDigits;
    }

    const editApplicationDate = (props) => {
        const year = props.slice(0, 4);
        const month = props.slice(5, 7);
        const day = props.slice(8, 10);

        return (year + '/' + month + '/' + day);
    }

    return (
        <>
            <Title title="관리자 페이지"/>
            <T.TotalHr></T.TotalHr>
            <T.TotalDiv>
                <MAHDW.HeadTitleH3>매칭 신청 내역 모아보기</MAHDW.HeadTitleH3>
                <T.TitleH3>{person.profile? person.profile.nickname : '로딩 중...'} 님의 프로필 카드</T.TitleH3>
                <P.SectionContainer>
                    <P.SectionDiv>
                        <P.ProfileBasicImg src={person.profile ? person.profile.imgUrl : ProfileBasic } alt ="ProfileBasic"/>
                        <P.NameH4>{person.profile? person.profile.nickname : '로딩 중...'}</P.NameH4>
                        <MAHDW.InfoP>년생 : {person.profile? editBirthYear(person.profile.birthday) + '년생' : '로딩 중...'}</MAHDW.InfoP>
                        <MAHDW.InfoP>키 : {person.profile? person.profile.height + 'cm' : '로딩 중...'}</MAHDW.InfoP>
                        <MAHDW.InfoP>지역 : {person.profile? person.profile.region : '로딩 중...'}</MAHDW.InfoP>
                        <MAHDW.InfoP>연락처 : {person.profile? person.profile.phone : '로딩 중...'}</MAHDW.InfoP>
                    </P.SectionDiv>
                    <P.SectionDiv>
                        <P.InfoP>장거리 가능 여부 : {person.profile ? (person.profile.distance === "SHORT" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>흡연 여부 : {person.profile ? (person.profile.smoking === "NONSMOKER" ? "비흡연" : "흡연") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>음주 여부 : {person.profile ? (person.profile.drinking === "NONDRINKER" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>단과대 : {person.profile? person.profile.department : '로딩 중...'}</P.InfoP>
                        <MAHDW.SelfIntroductionTitleP>자기 소개</MAHDW.SelfIntroductionTitleP>
                        <MAHDW.SelfIntroductionDiv>
                            <MAHDW.SelfIntroductionP>{person.profile ? person.profile.introduction : '로딩 중...'}</MAHDW.SelfIntroductionP>       
                        </MAHDW.SelfIntroductionDiv>
                        <MAHDW.SelfIntroductionTitleP>내 이상형</MAHDW.SelfIntroductionTitleP>
                        <MAHDW.SelfIntroductionDiv>
                            <MAHDW.SelfIntroductionP>{person.profile ? person.profile.preference : '로딩 중...'}</MAHDW.SelfIntroductionP>       
                        </MAHDW.SelfIntroductionDiv>
                    </P.SectionDiv>
                </P.SectionContainer>
                <MAHDW.SectionDiv>
                    <MAHDW.InfoP>매칭 신청 날짜 : {person.matchDate ? editApplicationDate(person.matchDate)  : '없음'}</MAHDW.InfoP>
                    <MAHDW.InfoP>비매너 경고 회수 : {person.warningCount ? person.warningCount + '회' : 0 + '회'}</MAHDW.InfoP>
                    <MAHDW.InfoP>매칭 신청 회수 : {person.matchCount ? person.matchCount + '회' : 0 + '회'}</MAHDW.InfoP>
                    <MAHDW.InfoP>매칭 완료 회수 : {person.matchCompleteCount ? person.matchCompleteCount + '회' : 0 + '회'}</MAHDW.InfoP>
                </MAHDW.SectionDiv>
            </T.TotalDiv>
            <MAHDW.FooterContainer>
                <Footer/>
            </MAHDW.FooterContainer>
        </>
    )
}
