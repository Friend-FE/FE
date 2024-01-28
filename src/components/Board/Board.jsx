import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
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

const HR = styled.hr`
  height: 2px;
  background: #000;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ThinHR = styled(HR)`
  height: 1px;
  background: #B8B8B8;
`;

const BoardWrapper = styled.div`
  margin-top: 20vh;
  margin: 0 auto;
  width: 80vw;
`;

const HeaderRow = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  text-decoration: none;
  color: inherit;
`;

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
      </HeaderRow>
      <ThinHR />
      {info && info.map((item, index) => (
        <div key={item.id}>
          <Row onClick={() => handleRowClick(item)}>
            <Title>{item.title}</Title>
            <Author>{item.author}</Author>
            <Time>{item.time}</Time>
          </Row>
          {index !== infoLength - 1 ? <ThinHR /> : <HR />}
        </div>
      ))}
    </BoardWrapper>
  );
};

export default Board;