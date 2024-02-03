// 공지사항 쓰러가기

import React, { useState,useEffect } from 'react';
import Title from '../title/index';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import * as MAHD from '../ManagerPage_Component/MatchingAHDetail'
import Footer from '../footer/index';


export default function WritingNotices() {

    //수정을 하는 경우 값 받아오기
    const { state } = useLocation();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      // state에 데이터가 있으면 수정 모드로 간주
      if (state && state.data) {
        const { id , title, body } = state.data;
        setId(id || '');
        setTitle(title || '');
        setContent(body || '');
        setIsEditing(true);
      }
    }, [state]);
   
    const handleSubmit = async (event) => {
      event.preventDefault();

      //게시글 작성
      if(!isEditing)
      {
            // API 엔드포인트와 기타 세부 정보 설정
            const apiUrl = 'http://13.209.145.28:8080/api/v1/post'; // 실제 엔드포인트로 변경해야 합니다.

            // Request body 구성
            const requestBody = {
              title: title,
              body: content,
              author: 'author',
              password: 'password', 
            };

            try {
              // API 호출
              const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
              });

              if (response.ok) {
                console.log('API 호출 성공');
                navigate('/notice');
              } else {
                // API 호출이 실패한 경우에 대한 처리
                console.error('API 호출 실패');
              }
            } catch (error) {
              // 네트워크 오류 등의 예외 처리
              console.error('API 호출 중 오류:', error);
            };
      }

      //게시글 수정
      else
      {
          // API 엔드포인트와 기타 세부 정보 설정
          const apiUrl = `http://13.209.145.28:8080/api/v1/post/${id}`; // 실제 엔드포인트로 변경해야 합니다.

          const requestBody = {
            title: title,
            body: content,
          };
          try {
            const response = await fetch(apiUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            });
        
            if (response.ok) {
              console.log('수정 성공');
              navigate('/notice');
            } else {
              console.error('수정 실패');
            }
          } catch (error) {
            console.error('수정 중 오류:', error);
          }
      }
    }
    

    const handleCancel = () => {
      navigate(-1); 
    };

    return (
      <>
        <Title title = "관리자 페이지"/>
        <TitleHR />
        <TextBox>
          <MAHD.HeadTitleH3>공지사항 작성하기</MAHD.HeadTitleH3>
          <form onSubmit={handleSubmit}>
          <TitleInPut>
            <TextInput type="text" placeholder='제목을 입력해주세요.' value={title} onChange={e => setTitle(e.target.value)} />
          </TitleInPut>
          <ContentInPut>
            <TextArea type="text" placeholder='글을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
          </ContentInPut>
          <ButtonWrapper>      
            <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
            <SubmitButton type="submit" onClick={handleSubmit}>완료</SubmitButton>
          </ButtonWrapper>
          </form>   
        </TextBox>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </>
    )
}


const TitleHR = styled.hr`
  margin-top: 8vw;
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
  cursor: pointer;
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