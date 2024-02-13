// Q&A 모아보기 (관리자 페이지)에 쓰이는 Board입니다.

import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const QnABoard = ({ info }) => {
  const infoLength = info.length;
  const navigate = useNavigate();
  const isCollectPage = window.location.pathname === "/ManagerPage/QnA"; //자체 true로 인식
  const location = useLocation();
  const actualAddress = location.pathname;

  const handleRowClick = (item) => {
    if (isCollectPage) {
       //상세 페이지의 보드 클릭 시 네비게이트가 되는 문제를 해결
      navigate(`/ManagerPage/QnA/${item.id}`, { state: { item } });
    } else {
      // 클릭 무시
    }
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
      {info && [...info].reverse().map((item, index) => {
        const createdAtDate = new Date(item.updatedAt);
        createdAtDate.setHours(createdAtDate.getHours() + 9);

        const year = createdAtDate.getFullYear();
        const month = String(createdAtDate.getMonth() + 1).padStart(2, '0');
        const day = String(createdAtDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}.${month}.${day}`;

        const maskedAuthor = item.author.charAt(0) + '**';
        return (
          <div key={item.id}>
          <Row address="/ManagerPage/QnA" actualAddress={actualAddress}>
              <Title onClick={() => handleRowClick(item)}>{item.title}</Title>
              {/* /ManagerPage/QnA 페이지일 때만 버튼생성 */}
              {isCollectPage && <AnswerButton to={`/ManagerPage/QnA/QnAResponse/${item.id}`} state={{ item }}>답변하기</AnswerButton>}
              <Author onClick={() => handleRowClick(item)} style={{ transform: 'translateX(0.3vw)' }}>{maskedAuthor}</Author>
              <Time onClick={() => handleRowClick(item)} style={{ transform: 'translateX(0.2vw)' }}>{formattedDate}</Time>
            </Row>
            {index !== infoLength - 1 ? <ThinHR /> : <HR />}
          </div>
        );
      })}
    </BoardWrapper>
  );
};

export default QnABoard;

const BoardWrapper = styled.div`
  margin-top: 200vw;
  margin: 0 auto;
  width: 80vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1vw;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 1vw;

  // 페이지의 실제 주소가 주어진 주소와 일치할 때 스타일 적용
  ${props => props.actualAddress === props.address && 'margin-left: -3vw;'} 
`;

const Title = styled.div`
  flex: 4;
  text-align: center;

`;

const AnswerButton = styled(Link)`
  flex: 0.3; //변경
  width: 5vw; //변경
  height: 1.5vw; //변경
  transform: translateY(-0.5vw); //변경
  margin-left: -17vw; //변경
  margin-right: 15vw; //변경
  background: #8be3ff;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  text-align: center;
  font-size: 0.6vw;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5vw;
`;


const Author = styled.div`
  flex: 1;
`;

const Time = styled.div`
  flex: 1;
`;

const HR = styled.hr`
  height: 0.1vw;
  background: #000;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
`;

const ThinHR = styled(HR)`
  height: 0.05vw;
  background: #B8B8B8;
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

