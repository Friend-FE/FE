import Board from '../../components/Board/Board';
import React, { useEffect, useState } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';

const TitleHR = styled.hr`
  margin-top: 10vh;
`;

const Notice = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await fetch('http://13.209.145.28:8080/api/v1/posts');
        const data = await response.json();

        const updatedNotice = data.data.map(item => {
          const createdAtDate = new Date(item.createdAt);
          const formattedDate = `${createdAtDate.getFullYear()}-${(createdAtDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${createdAtDate.getDate().toString().padStart(2, '0')}`;
        
          return {
            id: item.id,
            title: item.title,
            author: item.author,
            time: formattedDate,
          };
        });

        setNotice(updatedNotice);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchNoticeData();
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  return (
    <div className='Notice'>
      <Title title="공지사항" />
      <TitleHR />
      <Board info={notice} />
    </div>
  );
};

export default Notice;