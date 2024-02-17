// 관리자 페이지 - 신고 접수 내역 모아보기에 쓰이는 Board입니다.

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ManagerReportBoard = ({ info }) => {
  const infoLength = info.length;
  const navigate = useNavigate();

  const handleRowClick = (item, index) => {
    // console.log(item);
    // console.log(index);
    navigate(`/ManagerPage/ReportReceiptHistory/${item.id}`, { state: { item, index } });
  };

  // 작성자 이름 두 번째 글자부터를 가려서 보여주는 함수
  const formatAuthor = (author) => {
    if (author.length > 1) {
      return author[0] + '**';
    } else {
      return author;
    }
  };

  // Date 깔끔하게 보이도록 하는 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <BoardWrapper>
      <HR />
      <HeaderRow as="div">
        <Title>제목</Title>
        <Author>작성자</Author>
        <Time>작성 시간</Time>
      </HeaderRow>
      <ThinHR />
      {info && [...info].reverse().map((item, index) => (
        <div key={item.id}>
          <Row onClick={() => handleRowClick(item, index)}>
            <Div>
              <TitleContent>{item.title}</TitleContent>
              {item.status === 'INCOMPLETE' ? (
              <StateBtn>처리하기</StateBtn>
            ) : (
              <StateBtn>처리완료</StateBtn>
            )}
            </Div>
            <AuthorContent>{formatAuthor(item.author)}</AuthorContent>
            <TimeContent>{formatDate(item.updatedAt)}</TimeContent>
          </Row>
          {index !== infoLength - 1 ? <ThinHR /> : <HR />}
        </div>
      ))}
    </BoardWrapper>
  );
};

export default ManagerReportBoard;

const Title = styled.div`
flex: 4;  
text-align: center;
`;

const Author = styled.div`
flex: 1;
`;

const Time = styled.div`
flex: 1;
`;

const Row = styled.div`
display: flex;
justify-content: space-around;
padding: 1vw;
text-decoration: none;
color: inherit;
cursor: pointer;

font-size: 1vw;
`;

const Div = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
`;

const TitleContent = styled.div`
  text-align: right;

  position: relative;
  left: 16vw;
`;

const StateBtn = styled.div`
  background-color: #8BE3FF;
  box-shadow: -0.2vw 0.3vw 0.6vw rgba(0, 0, 0, 0.25);

  position: relative;
  left: 18vw;
  
  width: 3.6vw;
  height: 1.2vw;

  font-size: 0.7vw;
  font-weight: bold;

  text-align: center;
  color: white;
`;

const AuthorContent = styled.div`
  flex: 1;
`;

const TimeContent = styled.div`
  flex: 1;
`;


const HR = styled.hr`
height: 0.1vw;
background: #000;
margin-top: 0.5vw;
margin-bottom:  0.5vw;
`;

const ThinHR = styled(HR)`
height: 0.05vw;
background: #B8B8B8;
`;

const BoardWrapper = styled.div`
margin-top: 200vw;
margin: 0 auto;
width: 80vw;

@media (max-width: 768px) {
  position: relative;
  top: 10vw;
}
`;

const HeaderRow = styled.div`
font-weight: bold;
font-size: 1.2vw;
display: flex;
justify-content: space-around;
padding: 0.8vw;
text-decoration: none;
color: inherit;
`;
