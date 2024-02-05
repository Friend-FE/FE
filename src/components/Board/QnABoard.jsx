// Q&A (이용자가 헤더에서 접근하는 경우)에 쓰이는 Board입니다.

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1vw;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  font-size: 1vw;
`;

const Title = styled.div`
  flex: 4;  
  text-align: center;
`;

const Author = styled.div`
  flex: 1;
`;

const Time = styled.div`
  flex: 1;
`;

const HR = styled.hr`
  height: 0.1vw;
  background: #000;
  margin-top: 0.5vw;
  margin-bottom:  0.5vw;
`;

const ThinHR = styled(HR)`
  height: 0.05vw;
  background: #B8B8B8;
`;

const BoardWrapper = styled.div`
  /* margin-top: 200vw; */
  /* margin: 0 auto; */
  width: 80vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

const HeaderRow = styled.div`
  font-weight: bold;
  font-size: 1.2vw;
  display: flex;
  justify-content: space-around;
  padding: 0.8vw;
  text-decoration: none;
  color: inherit;
`;

//const Overlay = styled.div`
//  position: fixed;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background: rgba(0, 0, 0, 0.2);
//  display: flex;
//  justify-content: center;
//  align-items: center;
//`;

//const ModalWrapper = styled.div`
//  background: white;
//  padding: 20px;
//  border-radius: 8px;
//  width: 300px;
//  position: relative;
//  z-index: 1;
//`;

//const PasswordForm = styled.form`
//  flex;
//  flex-direction: column;
//  max-width: 300px;
//  0 auto;
//`;

//const InputLabel = styled.label`
//  margin-bottom: 8px;
//  font-size: 16px;
//`;

//const PasswordInput = styled.input`
//  8px;
//  margin-bottom: 16px;
//  font-size: 14px;
//`;

//const SubmitButton = styled.button`
//  background-color: rgb(139, 227, 255);
//  white;
//  10px;
//  none;
//  border-radius: 4px;
//  pointer;
//  font-size: 16px;
//`;

//const CloseButton = styled.button`
//  absolute;
//  10px;
//  10px;
//  none;
//  none;
//  font-size: 14px;
//  pointer;
//`;

const QnABoard = ({ info }) => {
  
  const infoLength = info.length;
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  // const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  
  // //선택한 항목이 비밀글인지 확인,api설정필요
  //  if (item.isPrivate) {
  //  setShowPasswordPrompt(true);
  //  } else {
  //  //비밀번호가 설정되어 있지 않다면, 직접 해당 게시물로 이동
      navigate(`/QnA/${item.id}`, { state: { item: selectedItem } });
  //  }
  };

  //  const handlePasswordSubmit = (isPasswordCorrect) => {
  //  //handleSubmit 버튼과 동시에 동작 검증이 끝남과 동시에 모달꺼짐
  //  setShowPasswordPrompt(false);

  // if (isPasswordCorrect) {
  //  //비밀번호가 맞다면 해당 게시글로 이동
  //  navigate(`/QnA/${selectedItem.id}`, { state: { item: selectedItem } });
  //  } else {
  //  alert('비밀번호가 일치하지 않습니다.');
  //  }
  //  };

  return (
    <BoardWrapper>
      <HR />
      <HeaderRow as="div">
        <Title>제목</Title>
        <Author>작성자</Author>
        <Time>작성 시간</Time>
      </HeaderRow>
      <ThinHR />
      {info && info.map((item, index) => {
      const createdAtDate = new Date(item.createdAt);
      const options = {
        timeZone: 'Asia/Seoul',
        hour12: true,
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      };
      createdAtDate.setHours(createdAtDate.getHours() + 9);
      
      const formattedDate = createdAtDate.toLocaleString('ko-KR', options);
        return (
          <div key={item.id}>
            <Row onClick={() => handleRowClick(item)}>
              <Title>{item.title}</Title>
              <Author>{item.author}</Author>
              <Time>{formattedDate}</Time>
            </Row>
            {index !== infoLength - 1 ? <ThinHR /> : <HR />}
          </div>
        );
      })}
      {//  {showPasswordPrompt && (
        // <PasswordPrompt
        // onPasswordSubmit={handlePasswordSubmit}
        // setShowPasswordPrompt={setShowPasswordPrompt}
      //   />
      //)} 
      }
    </BoardWrapper>
  );
};

// PasswordPrompt 컴포넌트
// const PasswordPrompt = ({ onPasswordSubmit, setShowPasswordPrompt }) => {
//  const [password, setPassword] = useState('');

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const isPasswordCorrect = true; // 여기를 실제 비밀번호 검증으로 변경
//    // 여기에서 서버에 비밀번호를 전송하여 검증하는 로직을 추가해야 합니다.
//    // 비밀번호가 맞다면 onPasswordSubmit(true) 호출, 아니면 false

//    onPasswordSubmit(isPasswordCorrect);
//  };

//  const handleClose = () => {
//    setShowPasswordPrompt(false);
//  };

//  return (
//    <Overlay>
//      <ModalWrapper>
//        <CloseButton onClick={handleClose}>X</CloseButton>
//        <PasswordForm onSubmit={handleSubmit}>
//          <InputLabel>비밀번호를 입력하세요:</InputLabel>
//          <PasswordInput
//            type="password"
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//            required
//          />
//          <SubmitButton type="submit">확인</SubmitButton>
//        </PasswordForm>
//      </ModalWrapper>
//    </Overlay>
//  );
//};

export default QnABoard;