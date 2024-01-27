import Board from '../../components/Board/Board';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';

const TitleHR = styled.hr`
  margin-top: 10vh;
`;
const Notice = () => {
  const notice = [
    { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18' },
    { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18' },
    { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18' },
    { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18' },
  ];

  return (
    <div className='Notice'>
      <Title title = "공지사항"/>
      <TitleHR/>
      <Board info={notice} />
    </div>
  );
};

export default Notice;
