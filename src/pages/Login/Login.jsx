// 로그인

import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../components/title/index';
import Footer from '../../components/footer';
import { useDispatch } from 'react-redux';
import { login,autoLogin } from '../../REDUX/loginCheck';
import { certify, notCertify } from '../../REDUX/emailCheck';



const Login = () => {
    //로그인 정보 관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [managerLogin, setManagerLogin] = useState(false);

    const isFormValid = email !== '' && password !== '';
    console.log(rememberMe);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRememberMeChange = (event) => {
        setRememberMe(prevRememberMe => !prevRememberMe);
        console.log(rememberMe);
    };
    const handleManagerLogin = (event) => {
        setManagerLogin(event.target.checked);
    };
    const dispatch = useDispatch();


    const handleSubmit = async (event) => {
        event.preventDefault();
        // API 호출
        try {
          const response = await fetch('https://umcfriend.kro.kr/api/v1/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });
  
          if (!response.ok) {
              // 에러 처리
              alert('존재하지 않는 계정입니다. 다시 시도해주세요.');
              throw new Error('Failed to log in');
          }
          

          const responseData = await response.json();
          dispatch(login(responseData.data.memberId));

          if(rememberMe){
            console.log(rememberMe);
            dispatch(autoLogin())
          }
          

          if(responseData.data.status ==='ACTIVE'){
            dispatch(certify(email));
            navigate('/');
          }
          else{
            dispatch(notCertify(email));
            navigate('/JudgePage');
          }
      } catch (error) {
          console.error('Error during login:', error.message);
      }
    };

    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate('/CertifyBeginning');
    };
    const handleFindIDClick = () => {
      navigate('/FindID');
    };
    const handleFindPasswordClick = () => {
      navigate('/FindPassword');
    };

    return (
      <>
        <Title title = "로그인/회원가입"/>
        <AppContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Input style={{borderBottom: 'transparent'}} type="text" value={email} onChange={handleEmailChange} placeholder="이메일"/>
                <Input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
                <CheckboxContainer>
                    <Checkbox type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
                    <CheckText>로그인 상태 유지</CheckText>
                    <Checkbox type="checkbox" checked={managerLogin} onChange={handleManagerLogin}/>
                    <CheckText>관리자 로그인</CheckText>
                </CheckboxContainer>
                <SubmitButton type="submit" disabled={!isFormValid}>로그인</SubmitButton>
            </LoginForm>
            <ButtonContainer>
                <SignUpButton onClick={handleSignupClick}>회원가입</SignUpButton>
                <ForgotButton onClick={handleFindIDClick}>아이디 찾기</ForgotButton>
                <ForgotButton onClick={handleFindPasswordClick}>비밀번호 찾기</ForgotButton>
            </ButtonContainer>
        </AppContainer>
        <FooterDiv>
          <Footer/>
        </FooterDiv>
      </>
    )
}

export default Login;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    margin-top: 15vw;

  @media (max-width: 768px) {
    position: relative;
    top: 10vw;
  }
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
`;

const Input = styled.input`
  width: 30vw;
  height: 3vw;
  padding: 0.5rem;
  margin: 0 auto;

  border: 1px solid gray;

  font-size: 0.8vw;
`;

// 로그인 상태, 관리자 로그인을 선택하기 위한 것들 
const CheckboxContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vw;
`
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.5vw;
    margin-top: 0.1vw;

    width: 1vw;
    height: 1vw;
`;

const CheckText = styled.div`
    font-size: 0.8vw;
    margin-right: 1vw;
`

//로그인 버튼
const SubmitButton = styled.button`
  padding: 0.7vw;
  background-color: #23CAFF;
  color: white;
  border: none;
  cursor: pointer;

  width: 30vw;
  height: 3vw;
  margin-top: 2vw;

  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
  font-size: 1.3vw;

  /* isFormValid가 false일 때 버튼 비활성화*/
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
`;

const SignUpButton = styled.button`
  color: #23CAFF;
  background: none;
  border: none;
  cursor: pointer;

  position: relative;
  right: 5vw;

  font-size: 1.3vw;
`;

const ForgotButton = styled.button`
  color: black;
  background: none;
  border: none;
  cursor: pointer;

  position: relative;
  left: 5vw;

  font-size: 1.3vw;
`;

const FooterDiv = styled.div`
  position: relative;
  top: 14vw;
  width: 100%;  

  @media (max-width: 768px) {
    top: 30vw;
  }
`;