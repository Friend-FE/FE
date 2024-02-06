// 비매너 유저 신고하기 - 더 자세한 신고 내용 입력에 쓰이는 Board입니다.

import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ManagerRBD = ({ info }) => {
  const infoLength = info.length;
  const navigate = useNavigate();

  const handleRowClick = (item, index) => {
    console.log(item);
    console.log(index);
    // navigate(`/ManagerPage/ReportReceiptHistory/${item.id}`, { state: { item, index } });
  };

  // 신고자 이름 두 번째 글자부터를 가려서 보여주는 함수
  // 현재 임의로 badMemberId(int형)을 써서 적용이 안 되는 것 같음.
  const formatBadMember = (BadMember) => {
    if (BadMember.length > 1) {
      return BadMember[0] + '**';
    } else {
      return BadMember;
    }
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
        <Title>신고하는 대상</Title>
        <Author>작성자</Author>
        <Time>작성 시간</Time>
      </HeaderRow>
      <ThinHR />
      {info && info.map((item, index) => (
        <div key={item.id}>
          <Row onClick={() => handleRowClick(item, index)}>
            {/* 임의로 item.badMemberId를 넣음. BE 쪽에서 */}
            <Title>{formatBadMember(item.badMemberNickname)}</Title>
            <Author>{formatAuthor(item.author)}</Author>
            <Time>{formatDate(item.updatedAt)}</Time>
          </Row>
          {index !== infoLength - 1 ? <ThinHR /> : <HR />}
        </div>
      ))}
    </BoardWrapper>
  );
};
  
export default ManagerRBD;

  
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