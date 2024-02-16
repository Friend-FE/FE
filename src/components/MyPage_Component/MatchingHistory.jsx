// 매칭 내역

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'; 

import * as T from './MyPage'
import styled from 'styled-components'
import Footer from '../footer/index'
import Title from '../title/index'

import MatchingHistoryBoard from '../Board/MatchingHistoryBoard'

export default function Matching_history() {

  const id = useSelector(state => state.login.id);
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  const fetchData = async () => {
    const userId = 20; // 현재 user Id 임의로 설정
    const idOrUserId = id ? id : userId;

    // console.log(id);
    try {
        const response = await axios.get(`http://13.209.145.28:8080/api/v1/myPage/getImgName/${idOrUserId}`, {idOrUserId});
        // console.log('성공', response.data.data);
        setUserData(response.data.data);
    } catch (error) {
      console.error('오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      navigate(-1);
    }
  }

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
      {/* <Header/> */}
      <Title title="마이페이지"/>
      <T.TotalHr></T.TotalHr>
      <T.TotalDiv>
        <T.TitleH3>{userData? userData.nickname +  ' 님의 매칭 내역' : ''}</T.TitleH3>
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