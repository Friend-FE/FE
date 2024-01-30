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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;

  @media (max-width: 768px) {
    margin-top: 1vw;
  }
`;

const CancelButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #fff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-right: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
`;

const SubmitButton = styled.button`
  width: 13vw;
  height: 2.5vw;
  background: #8be3ff;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  margin-left: 1vw;
  cursor: pointer;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);
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



  const handleDelete = async () => {
    try {
      const response = await fetch(`http://13.209.145.28:8080/api/v1/post/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //body 필요 ?
        }),
      });
  
      if (response.ok) {
        console.log('삭제 성공');
        navigate(-1);
      } else {
        console.error('삭제 실패');
      }
    } catch (error) {
      console.error('삭제 중 오류:', error);
    }
  };



  const handleModify = () => {
      const data = {
        id : id,
        title : notice.title,
        body : notice.body
      };
      navigate("/ManagerPage/WritingNotices" , {state : {data}} );
  };

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
    <ButtonWrapper>      
          <CancelButton type="button" onClick={handleDelete}>삭제하기</CancelButton>
          <SubmitButton type="button" onClick={handleModify}>수정하기</SubmitButton>
        </ButtonWrapper>
    <Footer/>
    </>
  );
};

export default NoticeDetail;
