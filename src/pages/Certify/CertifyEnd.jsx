// 부경대 학생 인증 - 2

import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/footer';

const CertifyEmail = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/SignupTerms');
    };

    return (
      <>
        <AppContainer>
                <RoundedBox>
                    <DiscriptionText>부경대 학생 인증이 완료되었습니다.</DiscriptionText>
                    <DiscriptionText>이어서 회원가입을 진행해주세요 !</DiscriptionText>
                    <SubmitButton onClick={handleClick}>확인</SubmitButton>
                </RoundedBox>
        </AppContainer>
        <FooterDiv>
          <Footer/>
        </FooterDiv>
      </>
    )
} 

export default CertifyEmail;

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


const RoundedBox = styled.div`
  border: 2px solid #2ECAFD;
  border-radius: 10px;
  padding: 3vw;
  margin-top: 20vw;
  width: 50vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const DiscriptionText = styled.div`
  font-size: 2.5vw;
  text-align : center;
  margin : 1vw;
`;

const SubmitButton = styled.button`
  background-color: #8BE3FF;
  color: white;
  border: none;
  padding: 2vw;
  cursor: pointer;
  border-radius: 5px;
  width : 15vw;
  margin-top : 10vw;
  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
`;

const FooterDiv = styled.div`
  width: 100%;
  position: relative;
  top: 12vw;

  @media (max-width: 768px) {
    top: 22vw;
  }
  `;