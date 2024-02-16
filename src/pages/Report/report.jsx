// 비매너 유저 신고하기 - 더 자세한 신고 내용 입력

import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'; 


import Title from '../../components/title';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'
import Footer from '../../components/footer';

const Report = () => {

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [userData, setUserData] = useState('');


  const { state } = useLocation();
  const navigate = useNavigate();

  const id = useSelector(state => state.login.id);

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


  // 서버 통신 !!
  const handleSubmit = async (event) => {
    // 폼 제출 막음
    event.preventDefault();

    const idOrUserNickname = userData.nickname ? userData.nickname : '김익명';

    // 서버에 post 할 data
    const title = name;
    const body = content;
    const author = idOrUserNickname;
    const badMemberId = state?.id;
    const badMemberNickname = state?.opponentNickname;

    // post try
    try {
    const response = await axios.post( 'http://13.209.145.28:8080/api/v1/report' , {
      title,
      body,
      author,
      badMemberId,
      badMemberNickname
     });

      if (response.status === 200) {
        console.log('정상');
        // console.log(response.data.data);
        alert('접수 되었습니다.');
        navigate('/Mypage'); 
      } else {
        console.error('오류');
      }
    }
    
    catch (error) {
      console.error('신고 제출 중 오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      navigate(-1); 
    };

  }

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <>
      <Title title = "마이페이지"/>
      <TitleHR />
      <TextBox>
        <MAHD.HeadTitleH3>신고 내용 작성하기</MAHD.HeadTitleH3>
        <form onSubmit={handleSubmit}>
        <TitleInPut>
          <TextInput type="text" placeholder='제목을 입력해주세요.' value={name} onChange={e => setName(e.target.value)} />
        </TitleInPut>
        <ContentInPut>
          <TextArea type="text" placeholder='글을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
        </ContentInPut>
        <ButtonWrapper>      
          <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
          <SubmitButton type="submit">완료</SubmitButton>
        </ButtonWrapper>
        </form>   
      </TextBox>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
};

export default Report;

const TitleHR = styled.hr`
  margin-top: 8vw;
  margin-left: 10vw;
  border: 0;
  border-top: 0.06vw solid #B8B8B8;
  width: 80vw; 

  @media (max-width: 768px) {
    margin-top: 10vw;
  }
`;

const TextInput = styled.input`
  width: 60vw;
  height: 3.5vw;
  /* flex-shrink: 0; */
  font-weight: bold;
  font-size: 1.1vw;
  padding-left: 1vw;

  border: 0.05vw solid #888;

  @media (max-width: 768px) {
    width: 60vw;
    height: 2vw;
  }
`;

const TextArea = styled.textarea`
  width: 60vw;
  height: 30vw;
  font-weight: bold;
  font-size: 1.1vw;
  resize: none;
  padding-left: 1vw;
  padding-top: 0.5vw;
  border: 0.05vw solid #888;

  /* white-space 속성 추가 */
  white-space: normal;

  @media (max-width: 768px) {
    position: relative;
    top: -6vw;
    width: 60vw;
    height: 30vw;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vw 0 0 0;
`;

const TitleInPut = styled.div`
  margin-top: 4vw;
  font-size: 1vw;
  font-weight: 400;

  @media (max-width: 768px) {
    position: relative;
    top: -1vw;
  }
`;

const ContentInPut = styled.div`
  margin-top: 1vw;
  font-size: 1vw;
  font-weight: 400;

  @media (max-width: 768px) {
    position: relative;
    top: 6vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: 3vw;
  }
`;

const CancelButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-right: 1vw;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
`;

const SubmitButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    top: 5vw;
  }
`;