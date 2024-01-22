import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../components/title';

const Login = () => {
    //로그인 정보 관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [managerLogin, setManagerLogin] = useState(false);

    const isFormValid = email !== '' && password !== '';

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };
    const handleManagerLogin = (event) => {
        setManagerLogin(event.target.checked);
    };
    const handleSubmit = (event) => {
        //api 호출이 필요한 부분 

        event.preventDefault();
        console.log('Submitted:', { email, password });
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
        <AppContainer>
            <Title title = "로그인/회원가입"/>
            <LoginForm onSubmit={handleSubmit}>
                <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일"/>
                <Input type="password" value={password} onChange={handlePasswordChange} placeholder="패스워드" />
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
                <ForgotButton onClick={handleFindIDClick}>이메일 찾기</ForgotButton>
                <ForgotButton onClick={handleFindPasswordClick}>비밀번호 찾기</ForgotButton>
            </ButtonContainer>
        </AppContainer>
    )
}

export default Login;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

// 이메일과 패스워드를 입력할 칸들
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Input = styled.input`
  height: 30px;
  padding: 10px;
  margin-top: 10px;
`;

// 로그인 상태, 관리자 로그인을 선택하기 위한 것들 
const CheckboxContainer = styled.div`
    display: flex; 
    margin-top: 10px; 
`
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;
`;

const CheckText = styled.div`
    font-size: 12px;
    margin-right: 10px;
`

//로그인 버튼
const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #23CAFF;
  color: white;
  border: none;
  cursor: pointer;
  justify-content: center; 

  /* isFormValid가 false일 때 버튼 비활성화*/
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  justify-content: space-between;
`;

const SignUpButton = styled.button`
  color: #23CAFF;
  background: none;
  border: none;
  cursor: pointer;
`;

const ForgotButton = styled.button`
  color: black;
  background: none;
  border: none;
  cursor: pointer;
`;