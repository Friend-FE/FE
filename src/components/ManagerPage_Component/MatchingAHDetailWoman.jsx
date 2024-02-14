// 관리자 페이지 - 매칭 신청 내역 보기 - 여자

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

// redux
import { connect } from "react-redux";
import { addId } from '../../REDUX/matchingCheck';

import ProfileBasic from '../../images/ProfileBasic.png'
import * as T from '../MyPage_Component/MyPage'
import * as P from '../MyPage_Component/ProfileCard'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

import * as AFMD from '../../pages/ApplicationForMembership/ApplicationForMembershipDetail'
// import CheckImageBlue from '../../images/CheckImageBlue.png'

function MatchingAHDetailWoman({onAddRedux}) {

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


    const navigate = useNavigate();

    const onClickAccept = () => {
        // setShowModal(true);
        const userNickname = person.profile.nickname;
        onAddRedux(userId, userNickname);
        navigate('/ManagerPage/MatchingApplicationHistoryMan');
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
                <HeadTitleH3>매칭 신청 내역 모아보기</HeadTitleH3>
                <T.TitleH3>{person.profile? person.profile.nickname +  '님의 프로필 카드' : '로딩 중...'}</T.TitleH3>
                <P.SectionContainer>
                    <P.SectionDiv>
                        <P.ProfileBasicImg src={person.profile ? person.profile.imgUrl : ProfileBasic } alt ="ProfileBasic"/>
                        <P.NameH4>{person.profile? person.profile.nickname : '로딩 중...'}</P.NameH4>
                        <InfoP>년생 : {person.profile? editBirthYear(person.profile.birthday) + '년생' : '로딩 중...'}</InfoP>
                        <InfoP>키 : {person.profile? person.profile.height + 'cm' : '로딩 중...'}</InfoP>
                        <InfoP>지역 : {person.profile? person.profile.region : '로딩 중...'}</InfoP>
                        <InfoP>연락처 : {person.profile? person.profile.phone : '로딩 중...'}</InfoP>
                    </P.SectionDiv>
                    <P.SectionDiv>
                        <P.InfoP>장거리 가능 여부 : {person.profile ? (person.profile.distance === "SHORT" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>흡연 여부 : {person.profile ? (person.profile.smoking === "NONSMOKER" ? "비흡연" : "흡연") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>음주 여부 : {person.profile ? (person.profile.drinking === "NONDRINKER" ? "불가능" : "가능") : '로딩 중...'}</P.InfoP>
                        <P.InfoP>단과대 : {person.profile? person.profile.department : '로딩 중...'}</P.InfoP>
                        <SelfIntroductionTitleP>자기 소개</SelfIntroductionTitleP>
                        <SelfIntroductionDiv>
                            <SelfIntroductionP>{person.profile ? person.profile.introduction : '로딩 중...'}</SelfIntroductionP>       
                        </SelfIntroductionDiv>
                        <SelfIntroductionTitleP>내 이상형</SelfIntroductionTitleP>
                        <SelfIntroductionDiv>
                            <SelfIntroductionP>{person.profile ? person.profile.preference : '로딩 중...'}</SelfIntroductionP>       
                        </SelfIntroductionDiv>
                    </P.SectionDiv>
                </P.SectionContainer>
                <SectionDiv>
                    <InfoP>매칭 신청 날짜 : {editApplicationDate(useLocationContent.date)}</InfoP>
                    <InfoP>비매너 경고 회수 : {person.warningCount ? person.warningCount + '회' : 0 + '회' }</InfoP>
                    <InfoP>매칭 신청 회수 : {person.matchCount ? person.matchCount + '회' : 0 + '회' }</InfoP>
                    <InfoP>매칭 완료 회수 : {person.matchCompleteCount ? person.matchCompleteCount + '회' : 0 + '회' }</InfoP>
                </SectionDiv>
                <BtnDiv>
                    <AFMD.AcceptBtn onClick={onClickAccept}>매칭하기</AFMD.AcceptBtn>
                </BtnDiv>
            </T.TotalDiv>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </>
    )
}

// redux
function mapDispatchToProps(dispatch) {
    return {
        onAddRedux: (userId, userNickname) => {
            dispatch(addId({userId, userNickname}));
            // console.log('onAddRedux 함수 props 검사', userId, userNickname);
        }
    };
}

export default connect(null, mapDispatchToProps)(MatchingAHDetailWoman);

export const HeadTitleH3 = styled.h3`
    color: #23CAFF;
    font-size: 3vw;
    font-weight: 900;

    position: relative;
    top: -1vw;
    margin: -0.6vw;
`;

export const SelfIntroductionTitleP = styled.p`
    font-size: 1.8vw;

    margin: 0;

    position: relative;
    top: -1.5vw;
`;

export const SelfIntroductionDiv = styled.div`
    background-color: white;

    padding: 0.66vw 4vw;
    margin: 1vw 3vw;

    position: relative;
    top: -1.33vw;

    text-align: left;
`;

export const SelfIntroductionP = styled.p`
    font-size: 1.33vw;
`;

export const SectionDiv = styled.div`
  text-align: left;

  width: 41vw;
  height: 24vw;

  background-color: #DAF6FF;
  border-radius: 1.3vw;
  box-shadow: 0.6vw 1vw 0.3vw rgba(0, 0, 0, 0.2);

  margin: 0 2vw;
`;

export const InfoP = styled.p`
    font-size: 1.8vw;

    margin: 2.66vw 0 1.33vw 6vw;
    text-align: left;
`;

export const BtnDiv = styled.div`

  position: relative;
  top: 8vw;
`;

export const FooterContainer = styled.div`
    position: relative;
    bottom: -25vw;
    width: 100%;

    @media (max-width: 768px) {
        bottom: -20vw;
    }
`;

export const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  align-items: center; 

  width: 43.75vw;
  height: 31.66vw;

  top: 215%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  border: 0.1vw solid black;
  border-radius: 3.47vw;

  justify-content: center;

  @media (max-width: 768px) {
        top: 97%;
    }
`;

export const CheckImage = styled.img`
  width: 8.33vw;
  height: 6.9vw;
  margin-bottom: 0vw;
`;

export const ModalText = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 2vw;
  user-select: none;
`;

export const ModalBtnDiv = styled.div`
    position: relative;
    top: 3vw;
`;