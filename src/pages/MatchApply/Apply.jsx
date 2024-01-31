// 매칭신청 - 매칭신청 완료 팝업

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import checkImage from "../../images/checkImage.png";
import Title from '../../components/title';
import Footer from '../../components/footer';

const Apply = () => {

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);

  useEffect(() => {
    const drawCanvas = (canvas, isChecked) => {
      const ctx = canvas.getContext('2d');
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      const radius = 13.2;
      const centerX = 20;
      const centerY = 20;
  
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  
      if (isChecked) {
        ctx.fillStyle = 'palegreen';
        ctx.fill();
      }
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1.5;
      ctx.stroke();
  
      drawCheckMark(ctx, centerX, centerY, isChecked);
    };
  
    drawCanvas(canvasRef1.current, isChecked1);
    drawCanvas(canvasRef2.current, isChecked2);
    drawCanvas(canvasRef3.current, isChecked3);
  }, [isChecked1, isChecked2, isChecked3]);

  const drawCheckMark = (ctx, centerX, centerY, isChecked) => {
    const checkSize = 6.8;
    const offsetY = 1.5; 
    const checkX1 = centerX - checkSize;
    const checkY1 = centerY - offsetY;
    const checkX2 = centerX - checkSize / 4;
    const checkY2 = centerY + checkSize - offsetY;
    const checkX3 = centerX + checkSize;
    const checkY3 = centerY - checkSize / 3 - offsetY;

    ctx.beginPath();
    ctx.moveTo(checkX1, checkY1);
    ctx.lineTo(checkX2, checkY2);
    ctx.lineTo(checkX3, checkY3);
    ctx.lineWidth = 1.5;

    if (isChecked) {
      ctx.strokeStyle = 'black';
    } else {
      ctx.strokeStyle = 'gray';
    }
  
    ctx.stroke();
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  
  const [warningMessage, setWarningMessage] = useState('');
 
  const handleApplyClick = () => {
    if (!isChecked1 || !isChecked2 || !isChecked3) {
      setWarningMessage('주의사항에 체크해주세요!');
    }else if (showModal) {
      alert('이미 매칭 신청이 완료되었습니다.');
    }else {
      setShowModal(true);
    }
  };
  
  useEffect(() => {
    const special = () => {
      if (isChecked1 && isChecked2 && isChecked3) {
        setWarningMessage('');
      }
    };
    special();
  }, [isChecked1, isChecked2, isChecked3]);

  const navigate = useNavigate();

  const handleProfileCheckClick = () => {
    navigate('/MyPage/ProfileCard');
  };

  const handleCancelClick = () => {
    if(showModal){
      if (window.confirm("이미 매칭 신청이 완료되었습니다.\n메인 페이지로 이동하시겠습니까?")) {
         navigate('/');
      } else {
      }
    }
    else{
      navigate('/');
    }
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Title title = "매칭신청"/>
      <Hr />
      <Container>
        <Notice>다음 주의사항을 확인해 주시고 체크해주세요.</Notice>
        <Consent>
          <Canvas
            ref={canvasRef1}
            width={40}
            height={40}
            onClick={handleCheckboxChange1}
            style={{ cursor: 'pointer' }}
          />
          <Text isChecked={isChecked1}> 나의 현재 프로필 카드를 확인했다.</Text>
          <ProfileCheckButton onClick={handleProfileCheckClick}>프로필 확인</ProfileCheckButton>
        </Consent>
        <Consent>
          <Canvas
            ref={canvasRef2}
            width={40}
            height={40}
            onClick={handleCheckboxChange2}
            style={{ cursor: 'pointer' }}
          />
          <Text isChecked={isChecked2}> 무분별한 이용을 막기 위해 매칭 신청은 하루에 한번만 가능합니다. 동의하십니까?</Text>
        </Consent>
        <Consent3>
          <Canvas
            ref={canvasRef3}
            width={40}
            height={40}
            onClick={handleCheckboxChange3}
            style={{ cursor: 'pointer' }}
          />
          <Text isChecked={isChecked3}> 매칭 결과는 매주 금요일에 확인 가능하십니다. 동의하십니까?</Text>
          <WarningMessage>{warningMessage}</WarningMessage>
        </Consent3>
        
        <ButtonsContainer>
        <CancelButton onClick={handleCancelClick}>취소</CancelButton>
        <ApplyButton onClick={handleApplyClick}>매칭 신청하기</ApplyButton>
        </ButtonsContainer>
      </Container>
      <Footer/>
      
      <ModalContainer showModal={showModal}>
      <CheckImage src={checkImage} alt="Check Image" />
        <ModalText>매칭 신청이 완료되었습니다!</ModalText>
        <ModalText>돌아오는 금요일에 담당 매니저가 연락드려요!</ModalText>
      </ModalContainer>
    </>
  );
};

export default Apply;


const Container = styled.div`
  justify-content: center;
  width: 40%; 
  margin: 0 auto; 
  padding-bottom: 200px;
`;

const Hr = styled.div`
  height: 1px;
  background-color: gray;
  width: 90%;
  margin: 100px auto; 
`;

const Notice = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 10px;
  margin-top: 20px;
  user-select: none;/* 드래그 방지 */
`;

const Canvas = styled.canvas`
`;

const Consent = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 60px;
  margin-right: 20px;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  white-space: nowrap; /* 줄바꿈 하지 않음 */
  color: ${props => (props.isChecked ? 'rgba(120, 200, 120, 1)' : 'black')};
  transition: color 0.2s ease;
  user-select: none; 
`;

const ProfileCheckButton = styled.button`
  background-color: white;
  padding: 20px;
  width: 200px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -2px 5px 5px 0px rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

const Consent3 = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 60px;
  margin-right: 20px;
  gap: 10px;
  padding-bottom: 100px; // 문구고정을 위한 요소
  position: relative;  // 문구고정을 위한 요소
`;

const WarningMessage = styled.div`
  color: rgb(255, 123, 0);
  white-space: nowrap;
  margin-right:200px;
  position: absolute; // 문구고정을 위한 요소
  top: 90px;  // 문구고정을 위한 요소
  left: 250px;  // 문구고정을 위한 요소
  user-select: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const CancelButton = styled.button`
  background-color: white;
  padding: 20px;
  width: 200px;
  margin-left: 19%;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -2px 5px 5px 0px rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

const ApplyButton = styled.button`
  background-color: rgb(139, 227, 255);
  color: white;
  padding: 20px;
  width: 200px;
  margin-left: 20px;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -2px 5px 5px 0px rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column; /* 문구 줄바꿈 */
  align-items: center; 
  top: 94%;
  left: 50%;
  transform: translate(-46%, -50%);
  background-color: rgb(218, 246, 255);
  padding: 100px 200px;
  border-radius: 10px;
  z-index: 1;
  user-select: none;
`;

const CheckImage = styled.img`
  width: 120px;
  height: 100px;
  margin-bottom: 40px;
`;

const ModalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
  user-select: none;
`;

