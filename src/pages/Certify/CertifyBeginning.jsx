import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import CertifyGirl from "../../images/CertifyGirl.png"
import Title from '../../components/title';
import Footer from '../../components/footer';

const CertifyBeginning = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/CertifyEmail');
    };

    return (
      <>
      <Title title = "회원가입"/>
        <AppContainer>

            <LogoContainer>
                <SignupGirl src={CertifyGirl} alt="signup_girl" />
            </LogoContainer>

            <DiscriptionText>지금, 소중한 한 명의 FRIEND를 만나기 위한 당신의 진심을 보여주세요.</DiscriptionText>
            <DiscriptionText>당신의 '진심'을 인증해주세요!</DiscriptionText>

            <ParentContainer>
                <SignUpButton onClick={handleClick}>부경대 학생 인증하기</SignUpButton>
            </ParentContainer>
        </AppContainer>
        <FooterDiv>
          <Footer/>
        </FooterDiv>
      </>
    )
}

export default CertifyBeginning

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    position: relative;
    top: 8vw;
`;


//Friend 로고와 로그인 / 회원가입을 담는 컨테이너 
const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
`;

const SignupGirl = styled.img`
  display : flex;
  margin : 7vw 0 1vw 0;

  width: 15vw;
  height: 15vw;
`

//지금 --- 인증해주세요  를 표시
const DiscriptionText = styled.div`
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold; 

  margin : 3vw 0 3vw 0;
`;

// 부모 컨테이너
const ParentContainer = styled.div`
  text-align: center;
`;

//부경대 인증 버튼 
const SignUpButton = styled.button`

  padding: 0.7vw;
  background-color: #8BE3FF;
  color: white;
  border: none;
  cursor: pointer;

  width: 30vw;
  height: 3vw;
  margin-top: 2vw;

  box-shadow: -0.6vw 0.5vw 0.3vw rgba(0, 0, 0, 0.2);
  font-size: 1.3vw;
  font-weight: bold; 


`;

const FooterDiv = styled.div`
  width: 100%;
  position: relative;
  top: 12vw;

  @media (max-width: 768px) {
    top: 22vw;
  }
`;