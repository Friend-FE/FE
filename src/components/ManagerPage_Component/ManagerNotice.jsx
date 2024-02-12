// 공지사항

import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import ManagerBoard from '../Board/ManagerNoticeBoard';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

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
      <Title title = "관리자 페이지"/>
      <ReviewWrapper>
        <TitleHR/>
        <NoticeTitle>공지사항</NoticeTitle>
        <ManagerBoard info={notice} />
        <RecordButton type='button' onClick={handleRecord}>작성하기</RecordButton>
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

const NoticeTitle = styled.h3`
    color : #23CAFF;
    font-size: 2.5vw;
    font-weight: 900;
    margin :0;
    margin-top :2vw;
    @media screen and (max-width: 1165px) {
      gap : 5px;
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
  font-weight: bold;

  margin-top: 2vw;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    position: relative;
    top: 15vw;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  bottom: -2vw;
  width: 100%;

  @media (max-width: 768px) {
    top: 26vw;
  }
`;

