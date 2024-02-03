// Header

import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png"

function Header() {
  const [isLogined,setLogin]=useState(true);

  return (
    <Container>
    <Wrapper>
      <div>사람이 해주는 진심어린 매칭, Friend!</div>
      <div>
      {isLogined ? (
            <>
              <NavLink to="/logout">LOGOUT</NavLink>
              <NavLink to="/Mypage">마이페이지</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">LOGIN</NavLink>
              <NavLink to="/CertifyBeginning">회원가입</NavLink>
            </>
          )}
      </div>
    </Wrapper>  
    <HeaderContainer>
      <Link to="/">
        <StyledImg
          src={logo}
          alt="로고"
        />
      </Link>
      <LinkContainer>
      <NavLink to="/" exact="true" activeclassname="active">
            Friend
          </NavLink>
          <NavLink to="/reviews" activeclassname="active">
            솔직후기
          </NavLink>
          <NavLink to="/apply" activeclassname="active">
            매칭신청
          </NavLink>
          <NavLink to="/QnA" activeclassname="active">
            Q&A
          </NavLink>
          <NavLink to="/notice" activeclassname="active">
            공지사항
          </NavLink>
      </LinkContainer>
    </HeaderContainer>
    </Container>
  );
}

const HeaderContainer = styled.div`
  margin: 0px;
  padding: 0px;
  
  display: flex;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  justify-content : space-around;
  gap : 40vw;
  align-items : center;

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 3vw;
  }
  @media screen and (max-width: 600px) {
    font-size : 10vw;
    gap : 15vw;
    justify-content : center;
  }

`;
const StyledImg = styled.img`
  left: 100px;
  width:111px;
  @media screen and (max-width: 450px) {
    width:70px;
  }
`
const LinkContainer = styled.div`
  display: flex;
  gap:5vw;
  
  
  a {
    text-decoration-line: none;
    color: #000;
    font-weight : 600;
  }
  .active {
    color: #23CAFF;
  }
  @media screen and (max-width: 600px) {
    font-size : 2.2vw;
    gap : 1vw;
  }
`  
const Wrapper = styled.div`
  width : 100vw;
  height : 32px;
  background-color:rgba(90, 215, 255, 0.16);
  display :flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;

  justify-content : space-around;
  gap : 58vw;
  align-items : center;

  div{
    display : flex;
    gap : 66px;
    @media screen and (max-width: 500px) {
      font-size : 3vw;
      gap : 2vw;
    }
  }
  a{
    text-decoration-line: none;
    color:black;
  }

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 1vw;
  }
  @media screen and (max-width: 500px) {
    font-size : 3vw;
    gap : 0.3vw;
  }
`;
const Container = styled.div`
  min-width : 1070px;
    @media screen and (max-width: 1070px) {
      font-size : 1.5vw;
    }
`

export default Header;
