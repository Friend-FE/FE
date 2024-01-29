import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NoticeBoard from '../../components/Board/NoticeBoard';
import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import styled from 'styled-components';
import Footer from '../../components/footer';

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
          //API 결과 중에서 body를 notice의 body로 설정
          setNotice((prevNotice) => ({ ...prevNotice, body: data.data.body }));
        } else {
          // API 호출이 실패한 경우에 대한 처리
          console.error('API 호출 실패');
        }
      } catch (error) {
        // 네트워크 오류 등의 예외 처리
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
