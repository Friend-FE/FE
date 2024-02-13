// 공지사항 수정하기

import React, { useState,useEffect } from 'react';
import Title from '../../components/title/index';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import * as MAHD from '../../components/ManagerPage_Component/MatchingAHDetailWoman'
import Footer from '../../components/footer/index';
import ModifyModal from './ModifyModal';


export default function WritingNotices() {

    //수정을 하는 경우 값 받아오기
    const { state } = useLocation();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { id , title, body } = state.data;
        setId(id || '');
        setTitle(title || '');
        setContent(body || '');
    }, [state]);

    const handleModify = () => {
        setShowModal(true);
    }
      
    const confirmDelete = async () => {
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
            navigate('/ManagerPage/Notices');
            } else {
            console.error('수정 실패');
            }
        } catch (error) {
            console.error('수정 중 오류:', error);
        }
        setShowModal(false); 
    };
    
    const cancelDelete = () => {
        setShowModal(false);
    };

   
    const handleCancel = () => {
      navigate(-1); 
    };

    return (
      <>
        <Title title = "관리자 페이지"/>
        <TitleHR />
        <TextBox>
          <MAHD.HeadTitleH3>공지사항 수정하기</MAHD.HeadTitleH3>
          <TitleInPut>
            <TextInput type="text" placeholder='제목을 입력해주세요.' value={title} onChange={e => setTitle(e.target.value)} />
          </TitleInPut>
          <ContentInPut>
            <TextArea type="text" placeholder='글을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
          </ContentInPut>
          <ButtonWrapper>      
            <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
            <SubmitButton type="submit" onClick={handleModify}>완료</SubmitButton>
            {showModal && (
            <ModifyModal
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
            />
            )}
          </ButtonWrapper>
        </TextBox>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </>
    )
}


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
    top: 8vw;
  }
`;