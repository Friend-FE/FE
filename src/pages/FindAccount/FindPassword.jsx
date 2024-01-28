import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const FindID = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCancleClick = (event) => {
        navigate(-1);
    }

    const handleAllowClick = (event) => {
        // 확인 버튼 누를 수 api 호출 필요함
    }

    return (
        <AppContainer>
            <Wrapper>
                지인 매칭 100% 방지 와 개인정보 노출 부담없는 교내 매칭 서비스
            </Wrapper>
            <RoundedBox>
                <DescriptionText textColor = "#23CAFF">비밀번호 찾기</DescriptionText>
                <LoginForm>
                    <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일을 입력해주세요."/>
                </LoginForm>
                <ButtonContainer>
                    <CancelButton onClick={handleCancleClick} bgColor = "white">취소</CancelButton>
                    <SubmitButton onClick={handleAllowClick} bgColor = "#23CAFF">확인</SubmitButton>
                </ButtonContainer>    
            </RoundedBox>
        </AppContainer>
    )
} 

export default FindID;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    @media (max-width: 768px) {
      width: 80%;
    }
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

const Wrapper = styled.div`
    display :flex;
    flex-direction : column;
    align-items:center;
    position:relative;
    top:5vh;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
`

// 네모 박스 그리기 
const RoundedBox = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  border: 2px solid #23CAFF; 
  border-radius: 10px; 
  padding: 50px; /* 좌우 여백 설정 */
  margin-top: 5rem;
`;

//네모 박스 내 설명 텍스트
const DescriptionText = styled.div`
  font-size: 1.5rem;
  margin: 1rem;
  color: ${(props) => props.textColor || 'black'}; /* 동적으로 입력받은 textColor 값으로 설정, 없으면 기본값 black */
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  flex-direction: column;
  margin-top: 1rem;
`;

const Input = styled.input`
  height: 1.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`

`

const CancelButton = styled.button`
    background-color: #FFF;
    font-size : 0.8rem;
    color: black;
    border: none;
    padding: 1rem;
    cursor: pointer;
    border-radius: 10px;
`;

const SubmitButton = styled.button`
  background-color: #23CAFF;
  font-size : 0.8rem;
  color: white;
  border: none;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  

  /* isFormValid가 false일 때 버튼 비활성화 스타일 추가 */
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;
