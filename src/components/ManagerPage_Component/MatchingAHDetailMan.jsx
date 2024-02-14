// 관리자 페이지 - 매칭 신청 내역 보기 - 남자

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

// redux
import { connect } from "react-redux";
import { addId } from '../../REDUX/matchingCheck';
import { removeId } from '../../REDUX/matchingCheck';

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import * as P from '../MyPage_Component/ProfileCard'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

import * as AFMD from '../../pages/ApplicationForMembership/ApplicationForMembershipDetail'
import CheckImageBlue from '../../images/CheckImageBlue.png'
import * as MAHD from './MatchingAHDetailWoman'

function MatchingAHDetailMan({personData, onRemoveRedux}) {

    const navigate = useNavigate();

    const { id } = useParams();
    const [userId, setUserId] = useState(id);
    // console.log(userId);
    
    const [person, setPerson] = useState(id);

    const { state } = useLocation();
    const useLocationContent = state?.item;
    // console.log(useLocationContent);

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
    
    // console.log('setSendData test', sendIds);

    const [showModal, setShowModal] = useState(false);

    const onClickAccept = () => {
        setShowModal(true);
    };

    const onClickRealAccept = async () => {
        const manId = userId;
        const womanId = personData.matching[0].id;

        console.log(manId);
        console.log(womanId);

        try {
            const response = await axios.get( `http://13.209.145.28:8080/api/v1/match/make/${manId}/${womanId}` , {
                manId,
                womanId
            });

            if (response.status === 200) {
                console.log('정상');
                alert('매칭 되었습니다.');
                navigate('/ManagerPage/MatchingApplicationHistoryWoman'); 
            } else {
                console.error('오류');
            }
        } catch (error) {
            console.error('매칭 중 오류 발생:', error);
            alert('오류가 발생했습니다. 다시 시도해주세요.');
            setShowModal(false);
        }
    };

    // const test = () => {
    // }


    const onClickRefuse = () => {
        setShowModal(false);
    };

    const editBirthYear = (props) => {
        const year = props.slice(0, 4);
        const yearDigits = year.slice(2);

        return yearDigits;
    }

    // const editPhoneNumber = (props) => {
    //     const first = props.slice(0, 3);
    //     console.log(first);
    //     const second = props.slice(3, 7);
    //     console.log(second);
    //     const third = props.slice(7, 11);

    //     return (first + `-` + second + `-` + third);
    // }

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
                <MAHD.HeadTitleH3>매칭 신청 내역 모아보기</MAHD.HeadTitleH3>
                <T.TitleH3>{person.profile? person.profile.nickname : '로딩 중...'} 님의 프로필 카드</T.TitleH3>
                <P.SectionContainer>
                    <P.SectionDiv>
                        <P.ProfileBasicImg src={person.profile ? person.profile.imgUrl : ProfileBasic } alt ="ProfileBasic"/>
                        <P.NameH4>{person.profile? person.profile.nickname : '로딩 중...'}</P.NameH4>
                        <MAHD.InfoP>년생 : {person.profile? editBirthYear(person.profile.birthday) + '년생' : '로딩 중...'}</MAHD.InfoP>
                        <MAHD.InfoP>키 : {person.profile? person.profile.height + 'cm' : '로딩 중...'}</MAHD.InfoP>
                        <MAHD.InfoP>지역 : {person.profile? person.profile.region : '로딩 중...'}</MAHD.InfoP>
                        <MAHD.InfoP>연락처 : {person.profile? person.profile.phone : '로딩 중...'}</MAHD.InfoP>
                    </P.SectionDiv>
                    <P.SectionDiv>
                        <P.InfoP>장거리 가능 여부 : {person.profile ? (person.profile.distance === "SHORT" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>흡연 여부 : {person.profile ? (person.profile.smoking === "NONSMOKER" ? "비흡연" : "흡연") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>음주 여부 : {person.profile ? (person.profile.drinking === "NONDRINKER" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>단과대 : {person.profile? person.profile.department : '로딩 중...'}</P.InfoP>
                        <MAHD.SelfIntroductionTitleP>자기 소개</MAHD.SelfIntroductionTitleP>
                        <MAHD.SelfIntroductionDiv>
                            <MAHD.SelfIntroductionP>{person.profile ? person.profile.introduction : '로딩 중...'}</MAHD.SelfIntroductionP>       
                        </MAHD.SelfIntroductionDiv>
                        <MAHD.SelfIntroductionTitleP>내 이상형</MAHD.SelfIntroductionTitleP>
                        <MAHD.SelfIntroductionDiv>
                            <MAHD.SelfIntroductionP>{person.profile ? person.profile.preference : '로딩 중...'}</MAHD.SelfIntroductionP>       
                        </MAHD.SelfIntroductionDiv>
                    </P.SectionDiv>
                </P.SectionContainer>
                <MAHD.SectionDiv>
                    <MAHD.InfoP>매칭 신청 날짜 : {editApplicationDate(useLocationContent.date)}</MAHD.InfoP>
                    <MAHD.InfoP>비매너 경고 회수 : {person.warningCount ? person.warningCount + '회' : 0 + '회' }</MAHD.InfoP>
                    <MAHD.InfoP>매칭 신청 회수 : {person.matchCount ? person.matchCount + '회' : 0 + '회' }</MAHD.InfoP>
                    <MAHD.InfoP>매칭 완료 회수 : {person.matchCompleteCount ? person.matchCompleteCount + '회' : 0 + '회' }</MAHD.InfoP>
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
                <MAHD.ModalText>'{personData.matching[0]? personData.matching[0].name : '여성 신청자'}' 님과 '{person.profile? person.profile.nickname : '현재 신청자'}' 님 을 매칭하겠습니까?</MAHD.ModalText>
                <MAHD.ModalBtnDiv>
                    <AFMD.OtherBtn onClick={onClickRealAccept}>매칭하기</AFMD.OtherBtn>
                    <AFMD.AcceptBtn onClick={onClickRefuse}>취소하기</AFMD.AcceptBtn>
                </MAHD.ModalBtnDiv>
            </MAHD.ModalContainer>
        </>
    )
}



// redux
function mapStateToProps(state) {
    return { personData: state };
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveRedux: () => {
            dispatch(removeId());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchingAHDetailMan);