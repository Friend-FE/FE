// 공지사항

import React, { useEffect, useState } from 'react';
import Board from '../../components/Board/NoticeBoard';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

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
    <>
      <Title title = "공지사항"/>
      <TitleHR/>
      <ReviewWrapper>
        <Board info={notice} />
      </ReviewWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
};

export default Notice;

const ReviewWrapper = styled.div`
  /* position: relative; */
  /* height: 10vw; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitleHR = styled.hr`
  margin-top: 5vw;
  width: 80vw;
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const FooterContainer = styled.div`
    position: relative;
    bottom: -2vw;
    width: 100%;

    @media (max-width: 768px) {
    top: 25vw;
  }
`;