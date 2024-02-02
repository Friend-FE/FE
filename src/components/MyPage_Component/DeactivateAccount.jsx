// 계정 비활성화
import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import '../../styles/font.css'
import Footer from '../../components/footer/index'

export default function Deactivate_account() {
  return (
    <>
    <AppContainer>
      <img src={logo} alt="logo" />
      <p>정말 비활성화 하실건가요?</p>
      <Wrapper>
        <StyledButton>취소</StyledButton>
        <StyledButton>확인</StyledButton>
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