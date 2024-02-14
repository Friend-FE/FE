// 공지사항 - 자세히

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NoticeBoard from '../../components/Board/NoticeBoard';
import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer/index';

const NoticeDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [notice, setNotice] = useState(state?.item);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        const response = await fetch(`http://13.209.145.28:8080/api/v1/post/${id}`);
        if (response.ok) {
          const data = await response.json();
          setNotice((prevNotice) => ({ ...prevNotice, body: data.data.body }));
        } else {
          console.error('API 호출 실패');
        }
      } catch (error) {
        console.error('API 호출 중 오류:', error);
      }
    };

    // id가 존재하고 notice에 body가 없을 때만 API 호출
    if (id && !notice?.body) {
      fetchNoticeDetail();
    }
  }, [id, notice]);

  if (!notice) {
    navigate('/not-found');
    return null;
  }



  const handleBackBtn = () => {
      navigate("/notice");
  };

  return (
    <>
      <NoticeWrapper>
        <Title title = "공지사항"/>
        <TitleHR/>
        <HeadTitleH3>공지사항 자세히 보기</HeadTitleH3>
        <Div>
          <NoticeBoard info={[notice]} clickable={false}/>
        </Div>
        <NoticeBox>
          {notice.body}
        </NoticeBox>
      </NoticeWrapper>
      <ButtonWrapper>      
        <BackButton type="button" onClick={handleBackBtn}>목록으로 돌아가기</BackButton> 
      </ButtonWrapper>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
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
  /* height: 100vh; */

  @media (max-width: 768px) {
    top: -2vw;
  }
`;

const TitleHR = styled.hr`
  margin-top: 10vh;
  width: 80vw;
  margin-bottom: 10vh;
  @media (max-width: 768px) {
    position: relative;
    top: -2vw;
  }
`;

export const HeadTitleH3 = styled.h3`
  color: #23CAFF;
  font-size: 3vw;
  font-weight: 900;

  position: relative;
  top: -1vw;
  margin: -0.6vw 0 0.6vw 0;
  @media (max-width: 768px) {
  position: relative;
  top: -10vw;
  }
`;

const Div = styled.div`
  position: relative;
  /* height: 100vh; */

  @media (max-width: 768px) {
    top: -18vw;
  }
`;

const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  /* height: 40vh; */
  border-radius: 2.08vw;
  border: 0.10vw solid #2ECAFD;
  background: #FFF;
  padding: 1.38vw;
  text-align: center;

  font-size: 1vw;

  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;
    top: -8vw;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    position: relative;

    margin-top: 0vw;
    /* top: 10vw; */
  }
`;

const BackButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: -0.13vw 0.55vw 0.41vw 0 rgba(0, 0, 0, 0.25);
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    bottom: -10vw;
  }
`;