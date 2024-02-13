// 관리자 페이지 - Q&A 답변하기

import React, { useState, useEffect } from 'react';
import Title from '../title/index';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import * as MAHD from './MatchingAHDetail';
import { useLocation } from 'react-router-dom';

const TitleHR = styled.hr`
  margin-top: 10vh;
  border: 0;
  border-top: 1px solid #B8B8B8;
  width: 80vw; 
`;

const TextInput = styled.input`
  width: 60vw;
  height: 7vh;
  font-weight: bold;
  font-size: 1.1vw;
  padding-left: 1vw;
  border: 0.05vw solid #888;
  pointer-events: none; // 입력 방지
  @media (max-width: 768px) {
    width: 60vw;
    height: 2vh;
  }
`;

const TextArea = styled.textarea`
  width: 60vw;
  height: 50vh;
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

const QnAResponse = () => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  useState(() => {
    if (location.state && location.state.item && location.state.item.title) {
      const originalTitle = location.state.item.title;
      setTitle(`RE: ${originalTitle}`);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = `http://13.209.145.28:8080/api/v1/???`;

      const requestClass = {
        answer: content, 
      };

      const response = await fetch(apiUrl, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestClass),
      });

      const responseJson = await response.json();
      console.log('Server Response Data:', responseJson);

      if (response.ok) {
        console.log('답변 작성 완료!');
        navigate(-1, { state: { newAnswer: responseJson } });
      } else {
        console.error('답변 작성 실패:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('답변 작성 중 오류 발생:', error);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Title title="관리자 페이지" />
      <TitleHR />
      <TextBox>
        <MAHD.HeadTitleH3>답변하기</MAHD.HeadTitleH3>
        <form onSubmit={handleSubmit}>
           <TitleInPut>
          <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </TitleInPut>
          <ContentInPut>
            <TextArea type="text" placeholder='답변을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
          </ContentInPut>
          <ButtonWrapper>
            <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
            <SubmitButton type="submit">완료</SubmitButton>
          </ButtonWrapper>
        </form>
      </TextBox>
      <Footer />
    </>
  );
};

export default QnAResponse;