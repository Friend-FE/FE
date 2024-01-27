import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const CertifyEmail = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/SignupTerms');
    };

    return (
        <AppContainer>
                <RoundedBox>
                    <DiscriptionText>부경대 학생 인증이 완료되었습니다.</DiscriptionText>
                    <DiscriptionText>이어서 회원가입을 진행해주세요 !</DiscriptionText>
                    <SubmitButton onClick={handleClick}>확인</SubmitButton>
                </RoundedBox>
        </AppContainer>
    )
} 

export default CertifyEmail;

// 전체를 담고 있는 컨테이너
const AppContainer = styled.div`
    justify-content: center;
    width: 40%; /* 원하는 크기로 조정 (가로의 반 정도로 설정) */
    @media (max-width: 768px) {
      width: 80%;
    }
    margin: 0 auto; /* 수평 가운데 정렬을 위해 margin을 auto로 설정 */
`;

const RoundedBox = styled.div`
  border: 2px solid #23CAFF;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const DiscriptionText = styled.div`
  font-size: 1.5rem;
  text-align : center;
  margin : 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width : 6rem;
  margin-top : 3rem;
`;