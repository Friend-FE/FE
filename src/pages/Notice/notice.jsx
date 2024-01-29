import Board from '../../components/Board/NoticeBoard';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

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

const Notice = () => {
  const notice = [
    { id: 1, title: '제목 1', author: '작성자 1', time: '2024-01-18' },
    { id: 2, title: '제목 2', author: '작성자 2', time: '2024-01-18' },
    { id: 3, title: '제목 3', author: '작성자 3', time: '2024-01-18' },
    { id: 4, title: '제목 4', author: '작성자 4', time: '2024-01-18' },
  ];

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
