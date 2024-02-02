// 관리자 페이지 - Q&A 답변하기

import React, { useState } from 'react';

import Title from '../../components/title/index';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetail'

export default function QnAResponse() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => {
    navigate(-1); 
  }; 

  return (
    <>
      <Title title = "관리자 페이지"/>
      <TitleHR />
      <TextBox>
        <MAHD.HeadTitleH3>답변하기</MAHD.HeadTitleH3>
        <form onSubmit={handleSubmit}>
        <TitleInPut>
          <TextInput type="text" placeholder='제목을 입력해주세요.' value={title} onChange={e => setTitle(e.target.value)} />
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
      <Footer/>
    </>
  )
}

const TitleHR = styled.hr`
  margin-top: 10vh;
  border: 0;
  border-top: 1px solid #B8B8B8;
  width: 80vw; 
`;

const TextInput = styled.input`
  width: 60vw;
  height: 7vh;
  /* flex-shrink: 0; */
  font-weight: bold;
  font-size: 1.1vw;
  padding-left: 1vw;

  border: 0.05vw solid #888;

  @media (max-width: 768px) {
    width: 60vw;
    height: 2vh;
  }
`;

const TextArea = styled.textarea`
  width: 60vw;
  height: 50vh;
  /* flex-shrink: 0; */
  font-weight: bold;
  font-size: 1.1vw;
  resize: none;
  padding-left: 1vw;
  padding-top: 0.5vw;

  border: 0.05vw solid #888;

  @media (max-width: 768px) {
    position: relative;
    top: -6vw;
    width: 60vw;
    height: 10vh;
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
  margin-top: 5vh;
  font-size: 1vw;
  font-weight: 400;
  
`;

const ContentInPut = styled.div`
  margin-top: 5vh;
  font-size: 1vw;
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-top: 1vw;
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
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
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
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;