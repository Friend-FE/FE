import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import CertifyGirl from "../../images/CertifyGirl.png"
import Title from '../../components/title';

const CertifyBeginning = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/CertifyEmail');
    };

    return (
        <AppContainer>
            <Title title = "회원가입"/>

            <LogoContainer>
                <SignupGirl src={CertifyGirl} alt="signup_girl" />
            </LogoContainer>

            <DiscriptionText>지금, 소중한 한 명의 FRIEND를 만나기 위한 당신의 진심을 보여주세요.</DiscriptionText>
            <DiscriptionText>당신의 '진심'을 인증해주세요!</DiscriptionText>

            <ParentContainer>
                <SignUpButton onClick={handleClick}>부경대 학생 인증하기</SignUpButton>
            </ParentContainer>
        </AppContainer>
    )
}

export default CertifyBeginning

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    @media (max-width: 768px) {
      width: 80%;
    }
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;


//Friend 로고와 로그인 / 회원가입을 담는 컨테이너 
const LogoContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로축에서 가운데 정렬 */
`;

const SignupGirl = styled.img`
  display : flex;
  margin : 7rem;
`

//지금 --- 인증해주세요  를 표시
const DiscriptionText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin : 1rem;
`;

// 부모 컨테이너
const ParentContainer = styled.div`
  text-align: center;
`;

//부경대 인증 버튼 
const SignUpButton = styled.button`
  padding: 1rem;
  background-color: #23CAFF; 
  color: #fff;
  border-radius: 10px; 
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;