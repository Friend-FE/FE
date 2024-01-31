import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Title from '../../components/title';
import CircleCheckbox from '../../components/CircleCheckbox/CircleCheckbox';
import LimitInputForm from '../../components/LimitInputForm/LimitInputForm';
import styled from 'styled-components';
import ProfileBasic from "../../images/ProfileBasic.png"
import Footer from '../../components/footer';

const SignupInfo = () => {
    //로그인 정보 관리
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordCheckChange = (event) => {
        setPasswordCheck(event.target.value);
    };
      
    const handleCancleButton = (event) => {
        //취소 시 이전 페이지로
        navigate(-1);
    }
    
    const handleSubmitButton = async () => {
        try {
          const response = await fetch('http://13.209.145.28:8080/api/v1/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password
            }),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('회원가입 성공:', data);
            navigate('/');
          } else {
            console.error('회원가입 실패:', response.status);
          }
        } catch (error) {
          console.error('회원가입 오류:', error);
        }
      };

    return (
        <>
            <Title title = "회원가입"/>
            <Separator />

            <AppContainer>
                <InfoMessage>먼저 프로필 사진을 등록해주세요 </InfoMessage>
                <LogoContainer>
                    <ProfileImage src={ProfileBasic} alt="profile_image" />
                </LogoContainer>

                <InfoMessage>아이디와 비밀번호를 입력해주세요</InfoMessage>
                <LoginForm>
                    <Input type="text" value={email} onChange={handleEmailChange} placeholder="이메일"/>
                    <Input type="password" value={password} onChange={handlePasswordChange} placeholder="패스워드" />
                    <Input type="password" value={passwordCheck} onChange={handlePasswordCheckChange} placeholder="패스워드 확인" />
                </LoginForm>

                <InfoMessage>기본 정보를 작성해주세요.</InfoMessage>
                <InfoName>닉네임</InfoName>
                <LoginForm>
                    <Input type="text" placeholder="닉네임을 입력해주세요."/>
                </LoginForm>
 
                <InfoName>연락처</InfoName>
                <LoginForm>
                    <Input type="tel"  placeholder="***-****-****"/>
                </LoginForm>

                <InfoName>생년월일</InfoName>
                <LoginForm>
                    <Input type="date"  placeholder="****/**/**"/>
                </LoginForm>

                <InfoName>성별</InfoName>
                <CircleCheckbox options={['여성', '남성']} />

                <InfoName>키</InfoName>
                <LoginForm>
                    <Input type="number"  placeholder="***cm"/>
                </LoginForm>

                <InfoName>지역</InfoName>
                <LoginForm>
                    <Input type="text"  placeholder="대략적인 **구까지만 써주세요."/>
                </LoginForm>

                <InfoName>장거리 가능 유무</InfoName>
                <CircleCheckbox options={['가능', '불가능']} />

                <InfoName>흡연 여부</InfoName>
                <CircleCheckbox options={['흡연', '비흡연']} />

                <InfoName>음주 여부</InfoName>
                <CircleCheckbox options={['음주', '비음주']} />
                    
                <InfoName>내가 속한 단과대는?</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>자기소개를 입력해주세요.</InfoName>
                <LoginForm>
                    <LimitInputForm/>
                </LoginForm>

                <InfoName>나의 이상형에 대해서 알려주세요!</InfoName>
                <LoginForm>
                    <LimitInputForm/>
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 학과를 적어주세요! 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 학번를 적어주세요! (예, 20학번) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 나이를 적어주세요! (예, 2005년생보다 어린 나이) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>

                <InfoName>매칭되고 싶지 않은 지역 조건을 적어주세요! (예, 부산 외에 지역만 매칭 원함) 없으면 없음이라고 적어주세요.</InfoName>
                <LoginForm>
                    <Input type="text" />
                </LoginForm>
                
                <ButtonContainer>
                    <CancelButton onClick={handleCancleButton}>취소</CancelButton>
                    <SubmitButton  onClick={handleSubmitButton}>회원가입 완료하기</SubmitButton>
                </ButtonContainer>
                <FooterDiv>
                  <Footer/>
                </FooterDiv>
            </AppContainer>
        </>
    )
}

export default SignupInfo;


// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    @media (max-width: 768px) {
      width: 80%;
    }
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

//ProfileBasic 로고 표시를 위한 스타일
const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
`;

//ProfileBasic 이미지 삽입
const ProfileImage = styled.img`
  width: 16.7vw;
  height: 16.7vw;
  cursor: pointer;
`;

//수평선 스타일
const Separator = styled.div`
  height: 1px;
  background-color: Gray;
  margin : 15vw 10vw 5vw 10vw;
`;


//어떤 정보를 입력해야하는지, 알려주는 텍스트
const InfoMessage = styled.div`
    text-align: center;
    margin-top : 8vw;
    margin-bottom : 2vw;
    font-size: 2vw; 
    width: 100%; /* 텍스트가 max-width를 넘어가더라도 크기를 조절할 수 있도록 */
`;

// 이메일과 패스워드 등을 입력할 칸들
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
`;

const Input = styled.input`
  height: 2vw;
  padding: 0.8rem;
  margin-bottom: 1vw;
`;

// 칸 마다 입력해야하는 정보 알려주는 작은 텍스트
const InfoName = styled.div`
    font-size: 1.5vw;
`;


//취소, 이어서 가입 버튼 
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 버튼을 좌우로 나눕니다. */
`;

const CancelButton = styled.button`
    background-color: #FFF;
    font-size : 1.5vw;
    color: black;
    border: none;
    padding: 1vw;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
  background-color: #23CAFF;
  font-size : 1.5vw;
  color: white;
  border: none;
  padding: 1vw;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);

  /* isFormValid가 false일 때 버튼 비활성화 스타일 추가 */
  &:disabled {
    background-color: #B9EEFF;
    cursor: not-allowed;
  }
`;

const FooterDiv = styled.div`
  position: relative;
  top: 14vw;
  width: 100%;  

  @media (max-width: 768px) {
    top: 30vw;
  }
`;