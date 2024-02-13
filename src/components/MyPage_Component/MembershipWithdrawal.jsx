// 회원 탈퇴
import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import '../../styles/font.css'
import Footer from '../../components/footer/index'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Membership_withdrawal() {
  const navigate = useNavigate();
  const email = ''; //리덕스로 저장한 이메일 사용
  const handleCancleButton = () => {
   //취소 시 이전 페이지로
   navigate(-1);
 };
  const handleCheckButton = () => {
    axios
    .delete(`http://13.209.145.28:8080/api/v1/member/${email}`)
    .then(function (response) {
      // 성공적으로 응답 받았을 때의 처리
      navigate("/");
      console.log('성공');
    })
    .catch(function (error) {
      // 오류 발생 시의 처리
      console.error("오류 발생:", error);
    });
 };
  return (
    <>
    <AppContainer>
      <img src={logo} alt="logo" />
      <p>정말 탈퇴하실건가요?</p>
      <Wrapper>
        <StyledButton onClick={handleCancleButton}>취소</StyledButton>
        <StyledButton onClick={handleCheckButton}>확인</StyledButton>
      </Wrapper>
    </AppContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </>
  )
}

const AppContainer = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction : column;
  align-items:center;
  gap : 5vh;
  img{
    width : 30vw;
    @media screen and (max-width: 600px) {
      width : 50vw;
    }
  }
  p{
    font-family: HSYuji-Regular;
    font-size:2rem;
    color: #50D5FF;
    @media screen and (max-width: 335px) {
      font-size:1.5rem;
    }
  }
  
`

const Wrapper = styled.div`
  display:flex;
  gap: 13px;
`
const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 12vw;
  height : 3vw;
  border :none;
  box-shadow: -2px 8px 6.1px 0px rgba(0, 0, 0, 0.25);

  /* 첫 번째 버튼에만 적용되는 스타일 */
  &:first-child {
    color: #000;
    background-color: #ffffff;
  }
  &:last-child{
    color : #ffffff;
    background-color:#8BE3FF;
  }

  @media screen and (max-width: 700px) {
    width : 20vw;
    height : 5vw;
  }
  @media screen and (max-width: 300px) {
    width : 30vw;
    height : 7vw;
  }
`;
const FooterContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  width: 100%;
`;