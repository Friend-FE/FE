// 솔직후기에 쓰이는 Board입니다.

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Board = ({ info }) => {
  const infoLength = info.length;
  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate(`/reviews/${item.id}`, { state: { item } });
  };

  return (
    <BoardWrapper>
      <HR />
      <HeaderRow as="div">
        <Title>제목</Title>
        <Author>작성자</Author>
        <Time>작성 시간</Time>
        <View>조회수</View>
      </HeaderRow>
      <ThinHR />
      {info && info.map((item, index) => (
        <div key={item.id}>
          <Row onClick={() => handleRowClick(item)}>
            <Title>{item.title}</Title>
            <Author>{item.author}</Author>
            <Time>{item.time}</Time>
            <ViewCount>{item.view}</ViewCount>
          </Row>
          {index !== infoLength - 1 ? <ThinHR /> : <HR />}
        </div>
      ))}
    </BoardWrapper>
  );
};

export default Board;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1vw;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  font-size: 1vw;
`;

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

const View = styled.div`
  flex: 1;
`;

const ViewCount = styled.div`
  flex: 1;
  position: relative;
  left: 1vw;
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
  /* margin-top: 200vw; */
  /* margin: 0 auto; */
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