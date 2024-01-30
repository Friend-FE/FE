
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Board from '../../components/Board/NoticeBoard';
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

const RecordButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
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
  const [notice, setNotice] = useState([]);
  const navigate = useNavigate();
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


  const handleRecord = () => {
    navigate("/ManagerPage/WritingNotices");
  }

  return (
    <>
      <Title title = "공지사항"/>
      <TitleHR/>
      <ReviewWrapper>
        <Board info={notice} />
        <RecordButton type='button' onClick={handleRecord}> 작성하기 </RecordButton>
      </ReviewWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </>
  );
};

export default Notice;