// 공지사항 - 자세히

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import NoticeBoard from '../../components/Board/NoticeBoard';
import React from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

const NoticeDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const notice = state?.item;

  if (!notice) {
    navigate('/not-found');
    return null;
  }

  return (
    <>
    <NoticeWrapper>
      <Title title = "공지사항 자세히 보기"/>
      <TitleHR/>
      <NoticeBoard info={[notice]} />
      <NoticeBox>
        {notice.body}
      </NoticeBox>
    </NoticeWrapper>
    <Footer/>
    </>
  );
};

export default NoticeDetail;

const NoticeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TitleHR = styled.hr`
  margin-top: 10vh;
  width: 80vw;
  margin-bottom: 10vh;
`;

const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 40vh;
  border-radius: 30px;
  border: 1.5px solid #2ECAFD;
  background: #FFF;
  padding: 20px;
  text-align: center;

  margin-top: 3vw;
`;