import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png"

function Header() {
  const [isLogined,setLogin]=useState(false);

  return (
    <div>
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
      <NavLink to="/" exact activeClassName="active">
            Friend
          </NavLink>
          <NavLink to="/reviews" activeClassName="active">
            솔직후기
          </NavLink>
          <NavLink to="/apply" activeClassName="active">
            매칭신청
          </NavLink>
          <NavLink to="/QnA" activeClassName="active">
            Q&A
          </NavLink>
          <NavLink to="/notice" activeClassName="active">
            공지사항
          </NavLink>
      </LinkContainer>
    </HeaderContainer>
    </div>
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
  gap : 675px;
  align-items : center;
  img {
    
    left: 100px;
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
`;
const Wrapper = styled.div`
  width : 100vw;
  height : 32px;
  background-color:rgba(90, 215, 255, 0.16);
  display :flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;

  justify-content : space-around;
  gap : 923px;
  align-items : center;

  div{
    display : flex;
    gap : 66px;
  }
  a{
    text-decoration-line: none;
    color:black;
  }
`;

export default Header;
