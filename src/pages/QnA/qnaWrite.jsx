// Q&A - 글 작성 (이용자가 질문 남기는 경우)

import React, { useState, useEffect, useRef } from 'react';
import Title from '../../components/title/index';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
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
  margin: 2vw 0 0 0;
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

const SecretContainer = styled.div`
  margin-top: 2.5vh;
  display: flex;
  align-items: center;
  font-size: 1vw;
`;

const Origin = styled.div`
  margin-top: 1.25vw;
  display: flex;
  align-items: center;
`;

const After = styled.div`
  display: flex;
  align-items: center;
`;

const PasswordInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1vh;
  margin-left: 10vh;
`;

const CheckBoxLabel = styled.label`
  display: flex;
`;

const PasswordInput = styled.input`
  width: 15vw;
  height: 4vh;
  font-size: 1vw;
  margin-right: 1vw;
  padding-left: 1vw;
  border: 0.05vw solid #888;
`;

const CompleteButton = styled.button`
  width: 5vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  font-size: 1vw;
  font-weight: 700;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
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
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -5vw;
    width: 100%;

    @media (max-width: 768px) {
        bottom: -10vw;
    }
`;

export default function QuestionWrite() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const postIdToEdit = location.state?.postId;
    if (postIdToEdit) {
      setId(postIdToEdit);
      setIsEditing(true);
  
      // TODO: 해당 id에 해당하는 글의 정보를 가져와서 title, content에 설정
      // fetch 또는 API 호출 등을 사용하여 서버에서 정보를 가져올 수 있음
    }
  }, [location]);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = isEditing
        ? `http://13.209.145.28:8080/api/v1/Qa/${id}`
        : 'http://13.209.145.28:8080/api/v1/qa';
  
      const requestClass = {
        title: title,
        body: content, 
        author: 'author',
        password: '???',
      };
      requestClass.time = new Date();

  
      const response = await fetch(apiUrl, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestClass),
      });
  
      const responseJson = await response.json();
      console.log('Server Response Data:', responseJson);
  
      if (response.ok) {
        console.log(isEditing ? '글 수정 완료!' : '글 작성 완료!');
        navigate(-1);
      } else {
        console.error('글 작성/수정 실패:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('글 작성/수정 중 오류 발생:', error);
    }
  };

  const handleComplete = () => {
  // // 비밀번호 전송 api 필요, isPrivate: true or false, password: ???
  //try {
  //  const apiUrl = `http://13.209.145.28:8080/api/v1/???`;

  //  const requestData = {
  //    isPrivate: isPrivate,
  //    // Add password to the request data if it is a private post
  //    ...(isPrivate && { password: password }),
  //  };

  //  const response = await fetch(apiUrl, {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json',
  //    },
  //    body: JSON.stringify(requestData),
  //  });

  //  const responseJson = await response.json();

  //  // Handle the response as needed
  //  console.log(responseJson);
  //} catch (error) {
  //  // Handle errors
  //  console.error('Error completing the form:', error);
  //}
  };


  const handleCancel = () => {
    navigate(-1);
  };
  
  return (
    <>
      <Title title = "글 작성하기"/>
      <TitleHR />
      <TextBox>
        <form onSubmit={handleSubmit}>
        <TitleInPut>
          <TextInput type="text" placeholder='제목을 입력해주세요.' value={title} onChange={e => setTitle(e.target.value)} />
        </TitleInPut>
        <ContentInPut>
          <TextArea type="text" placeholder='글을 입력해주세요.' value={content} onChange={e => setContent(e.target.value)} />
        </ContentInPut>

        <SecretContainer>
          <Origin>
            <input
              type="checkbox"
              id="privateCheck"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            <CheckBoxLabel htmlFor="privateCheck">비밀글로 작성</CheckBoxLabel>
            </Origin>
            {isPrivate && (
              <>
              <After>
                <PasswordInfo>비밀번호 </PasswordInfo>
                <PasswordInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <CompleteButton type="button" onClick={handleComplete}>
              완료
            </CompleteButton>
            </After>
              </>
            )}
          </SecretContainer>

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