import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/footer';
import Title from '../../components/title';

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

    const isEmailFormValid = email !== "";

    return (
      <>
            <Title/>
            <AppContainer>    
                <RoundedBox>
                    <DescriptionText textColor = "#23CAFF">아이디 찾기</DescriptionText>
                    <DescriptionText>가입 학교 이메일로 아이디 찾기</DescriptionText>
                    <LoginForm>
                        <Input type="text" value={email} onChange={handleEmailChange} placeholder="학교 이메일 주소를 입력하세요."/>
                    </LoginForm>
                    
                    <ButtonContainer>
                        <CancelButton onClick={handleCancleClick} >취소</CancelButton>
                        <SubmitButton
                          disabled={!isEmailFormValid}
                          onClick={handleAllowClick}
                        >
                          확인
                        </SubmitButton>
                    </ButtonContainer>
                    
                </RoundedBox>
            </AppContainer>

          <FooterDiv>
            <Footer/>
          </FooterDiv>
      </>
    )
} 

export default FindID;


// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    /* height: 80vh;
    width: 40%; 
    margin: 0 auto; */

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

// 네모 박스 그리기 
const RoundedBox = styled.div`
  display: flex;
  font-weight : bold;
  flex-direction: column; 
  width: 50vw;
  height: 40vw;
  align-items: center;
  border: 2px solid #23CAFF; 
  border-radius: 10px; 
  padding: 1vw; /* 좌우 여백 설정 */
  margin-top: 10vw;
`;

//네모 박스 내 설명 텍스트
const DescriptionText = styled.div`
  font-size: 2vw;
  margin: 2vw;
  color: ${(props) => props.textColor || 'black'}; /* 동적으로 입력받은 textColor 값으로 설정, 없으면 기본값 black */
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  flex-direction: column;
  margin-top: 2vw;
`;

const Input = styled.input`
  height: 2vw;
  width : 25vw;
  padding: 1vw;
  margin-top: 1vw;
  margin-bottom : 2vw;
  font-size : 1.5vw;
`;

const ButtonContainer = styled.div`
  margin-top : 3vw;
`

const CancelButton = styled.button`
    background-color: #FFF;
    font-size : 1vw;
    color: black;
    border: none;
    padding: 1.5vw;
    height: 4vw;
    width : 12vw;
    cursor: pointer;
    box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
  background-color: #23CAFF;
  font-size : 1vw;
  color: white;
  border: none;
  padding: 1.5vw;
  height: 4vw;
  width : 12vw;
  cursor: pointer;
  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);

  /* isFormValid가 false일 때 버튼 비활성화 스타일 추가 */
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  position: relative;
  top: 12vw;

  @media (max-width: 768px) {
    top: 22vw;
  }
`;