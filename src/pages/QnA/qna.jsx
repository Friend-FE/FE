import Board from '../../components/Board/Board';
import { Link } from 'react-router-dom';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';

const ReviewWrapper = styled.div`
  position: relative;
  height: 100vh;
`
const TitleHR = styled.hr`
  margin-top: 10vh;
  width: 80vw;
  margin-bottom: 10vh;
`;

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #8be3ff;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
`;

const Question = () => {
  const question = [
    { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18' },
    { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18' },
    { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18' },
    { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18' }
  ];

  return (
    <ReviewWrapper>
      <Title title = "Q&A"/>
      <TitleHR/>
      <Board info={question} />
      <ButtonLink to ="/write">문의하기</ButtonLink>
    </ReviewWrapper>
  );
};

export default Question;
