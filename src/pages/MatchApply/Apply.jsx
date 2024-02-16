// 매칭신청 - 매칭신청 완료 팝업

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import checkImage from "../../images/checkImage.png";
import Title from '../../components/title';
import Footer from '../../components/footer';
import axios from 'axios';

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
 
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://13.209.145.28:8080/api/v1/reports');
  //     // console.log(response.data.data);
  //     setHistory(response.data.data);
  //   } catch (error) {
  //     console.error('오류 발생:', error);
  //     alert('오류가 발생했습니다. 다시 시도해주세요.');
  //     navigate(-1); 
  //   }
  // }

 // 매칭 신청
  const MatchingApplication = async () => {

    const userId = 20; // id 임의로 지정

    console.log('test', userId);

    try {
      const response = await axios.post(`http://13.209.145.28:8080/api/v1/match/20`);
        if (response.status === 200) {
          console.log('매칭 신청 정상');
        } else {
          console.error('오류');
        }
      }
      catch (error) {
        console.error('매칭 신청 중 오류 발생:', error);
        alert('매칭 신청 오류가 발생했습니다. 다시 시도해주세요.');
      };
  }

  const handleApplyClick = async () => {
    if (!isChecked1 || !isChecked2 || !isChecked3) {
      setWarningMessage('주의사항에 체크해주세요!');
    }else if (showModal) {
      alert('이미 매칭 신청이 완료되었습니다.');
    }else {
      const userId = 22; // id 임의로 지정

      console.log('test', userId);
      
      try {
        const response = await axios.post(`http://13.209.145.28:8080/api/v1/match/${userId}`, {id : `${userId}`});
          if (response.status === 200) {
            console.log('매칭 신청 정상');
            setShowModal(true);
          } else {
            console.error('오류');
          }
        }
        catch (error) {
          console.error('매칭 신청 중 오류 발생:', error);
          alert('매칭 신청 오류가 발생했습니다. 다시 시도해주세요.');
        };
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
        MatchingApplication();
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
  //vw변환사이트 참고
  padding-bottom: 13.8889vw; 
`;

const Hr = styled.hr`
margin-top: 5vw;
width: 80vw;
margin-bottom: 5vw;
margin-left: 10vw;

@media (max-width: 768px) {
  position: relative;
  top: 8vw;
}
`;

const Notice = styled.p`
  font-size: 1.25vw;
  font-weight: 900;
  margin-bottom: 0.6944vw;
  margin-top: 1.3889vw;
  user-select: none;/* 드래그 방지 */
`;

const Canvas = styled.canvas`
width: 2.7778vw;
height: 2.7778vw;
`;

const Consent = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 4.1667vw;
  margin-right: 1.3889vw;
  gap: 0.6944vw;
`;

const Text = styled.p`
  font-size: 1.25vw;
  white-space: nowrap; /* 줄바꿈 하지 않음 */
  color: ${props => (props.isChecked ? 'rgba(120, 200, 120, 1)' : 'black')};
  transition: color 0.2s ease;
  user-select: none; 
`;

const ProfileCheckButton = styled.button`
  background-color: white;
  padding: 1.3889vw;
  width: 13.8889vw;
  margin-left: 1.3889vw;
  font-size: 0.9vw;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -0.1389vw 0.3472vw 0.3472vw 0vw rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 0.2083vw 0.3472vw rgba(0, 0, 0, 0.2);
  }
  user-select: none;
`;

const Consent3 = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 4.1667vw;
  margin-right: 1.3889vw;
  gap: 0.6944vw;
  padding-bottom: 6.9444vw; // 문구고정을 위한 요소
  position: relative;  // 문구고정을 위한 요소
`;

const WarningMessage = styled.div`
  color: rgb(255, 123, 0);
  white-space: nowrap;
  margin-right: 13.8889vw;
  font-size: 0.95vw;
  position: absolute; // 문구고정을 위한 요소
  top: 6.25vw;  // 문구고정을 위한 요소
  left: 17.3611vw;  // 문구고정을 위한 요소
  user-select: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const CancelButton = styled.button`
  background-color: white;
  padding: 1.3889vw;
  width: 13.8889vw;
  margin-left: 19%;
  margin-right: 1.3889vw;
  font-size: 0.9vw;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -0.1389vw 0.3472vw 0.3472vw 0vw rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 0.2083vw 0.3472vw rgba(0, 0, 0, 0.2);
  user-select: none;
  }
`;

const ApplyButton = styled.button`
  background-color: rgb(139, 227, 255);
  color: white;
  padding: 1.3889vw;
  width: 13.8889vw;
  margin-left: 1.3889vw;
  font-size: 0.9vw;
  cursor: pointer;
  font-weight: 900;
  border: none;
  box-shadow: -0.1389vw 0.3472vw 0.3472vw 0vw rgba(0, 0, 0, 0.5); 
  &:active {
    box-shadow: inset 0 0.2083vw 0.3472vw rgba(0, 0, 0, 0.2);
  user-select: none;
  }
`;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column; /* 문구 줄바꿈 */
  align-items: center; 
  top: 84%;
  left: 50%;
  transform: translate(-46%, -50%);
  background-color: rgb(218, 246, 255);
  padding: 8.3333vw; /* 13.8889vw; */
  border-radius: 0.6944vw;
  z-index: 1;
  user-select: none;
`;
const CheckImage = styled.img`
  width: 8.3333vw;
  height: 6.9444vw;
  margin-bottom: 2.7778vw;
`;

const ModalText = styled.p`
  font-size: 1.2500vw;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 0.6944vw;
  user-select: none;
`;