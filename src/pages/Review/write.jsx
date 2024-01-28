import React, { useState } from 'react';

import Title from '../../components/title';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TitleHR = styled.hr`
  margin-top: 10vh;
  border: 0;
  border-top: 1px solid #B8B8B8;
  width: 80vw; 
`;

const TextInput = styled.input`
  width: 80vw;
  height: 7vh;
  flex-shrink: 0;
`;

const TextArea = styled.textarea`
  width: 80vw;
  height: 576px;
  flex-shrink: 0;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleInPut = styled.div`
  margin-top: 5vh;
  font-size: 20px;
  font-weight: 400;
`;

const ContentInPut = styled.div`
  margin-top: 5vh;
  font-size: 20px;
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  width: 190px;
  height: 36px;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  margin-right: 10px;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const SubmitButton = styled.button`
  width: 190px;
  height: 36px;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  margin-left: 10px;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const ReviewWrite = () => {
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
    <TextBox>
      <Title title = "후기 작성하기"/>
      <TitleHR />
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
  );
};

export default ReviewWrite;
