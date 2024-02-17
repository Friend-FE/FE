// 관리자 페이지 - 솔직후기에 쓰이는 Board입니다.
// 안 씀. 추후 삭제 예정

import React from 'react';
import styled from 'styled-components';
import { useNavigate,useLocation } from 'react-router-dom';

export default function ManagerReviewBoard({ info }) {
    // const infoLength = info.length;
    const navigate = useNavigate();
    const location = useLocation();

    const handleRowClick = (item) => {
      if (location.pathname === '/reviews') {
      navigate(`/reviews/${item.id}`, { state: { item } });
      }
      else if (location.pathname === '/ManagerPage/Review'){
      navigate(`/ManagerPage/Review/reviews/${item.id}`, { state: { item } });
      }
  };

    const formatAuthor = (author) => {
        if (author.length > 1) {
        return author[0] + '**';
        } else {
        return author;
        }
    };

    // 날짜 형식 변환 함수
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
                <View>조회수</View>
            </HeaderRow>
            <ThinHR />
            {info && info.map((item, index) => (
                <div key={item.id}>
                    <Row onClick={() => handleRowClick(item)}>
                    <Title>{item.title}</Title>
                    <Author>{formatAuthor(item.author)}</Author>
                    <Time>{formatDate(item.time)}</Time>
                    <ViewCount>{item.views}</ViewCount>
                    </Row>
                    <ThinHR />
                </div>
            ))}
        </BoardWrapper>
    )
}

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