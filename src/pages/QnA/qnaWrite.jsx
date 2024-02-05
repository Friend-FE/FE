// Q&A - 글 작성 (이용자가 질문 남기는 경우)

import React, { useState } from 'react';

import Title from '../../components/title/index';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';

export default function QuestionWrite() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('제출되었습니다.');
    navigate(-1); 
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
        <DetailDiv>
          <FormCheckbox type="checkbox"/>
          <SecretLabel>비밀글로 작성</SecretLabel>
          <Label>비밀번호</Label>
          <Input/>
          <CompleteBtn>완료</CompleteBtn>
        </DetailDiv>
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

const TitleHR = styled.hr`
  margin-top: 8vw;
  border: 0;
  border-top: 0.06vw solid #B8B8B8;
  width: 80vw; 
  margin-left: 10vw;


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
  /* margin-top: 2vw; */
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

const CompleteBtn = styled.button`
  width: 3vw;
  height: 1.4vw;

  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);

  font-size: 0.8vw;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 3.8vw;
    height: 1vw;
  }
`;

/////////////

const DetailDiv = styled.div`
  position: relative;
  top: 1vw;

  @media (max-width: 768px) {
    top: 1vw;
  }
`;

export const FormCheckbox = styled.input`
  width: 1vw;
  height: 1vw;
  margin: 0  0.5vw 0 0;

  position: relative;
  top: 0.3vw;

  appearance: none;
  border: 0.13vw solid black;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-radius: 0.13vw;

  &:checked::before {
    content: '\u2713';
    position: absolute;
    left: -0.05vw;
    top: -0.23vw;
    font-size: 1vw;
    font-weight: bold;
  }
`;

export const SecretLabel = styled.label`
  font-size: 1vw;
  margin-right: 10vw;
`;

export const Label = styled.label`
  font-size: 1vw;
`;

export const Input = styled.input`
  margin: 0 1vw 0 1vw;

  width: 15vw;
  height: 1vw;
  font-size: 1vw;
`;

/////////////

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

  cursor: pointer;
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
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    top: 10vw;
  }
`;