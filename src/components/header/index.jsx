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
              <NavLink to="/mypage">마이페이지</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">LOGIN</NavLink>
              <NavLink to="/join">회원가입</NavLink>
            </>
          )}
      </div>
    </Wrapper>  
    <HeaderContainer>
      <Link to="/">
        <img
          style={{ width: "111px" }}
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
  margin: 0;
  padding: 0px;
  
  display: flex;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  justify-content : space-around;
  gap : 46vw;
  align-items : center;
  img {
    
    left: 100px;
  }

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 5px;
  }

`;

const LinkContainer = styled.div`
  display: flex;
  gap:53px;
  
  a {
    text-decoration-line: none;
    color: #000;
    font-weight : 600;
  }
  .active {
    color: #23CAFF;
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
  }
  a{
    text-decoration-line: none;
    color:black;
  }

  @media screen and (max-width: 1070px) {
    font-size : 1.5vw;
    gap : 1vw;
  }
`;
const Container = styled.div`
  min-width : 1070px;
    @media screen and (max-width: 1070px) {
      font-size : 1.5vw;
    }
`

export default Header;
